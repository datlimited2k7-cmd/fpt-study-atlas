import { env } from "cloudflare:workers";
import { headers } from "next/headers";

const COOKIE_NAME = "__Host-fpt_creator";
const SESSION_SECONDS = 7 * 24 * 60 * 60;
const encoder = new TextEncoder();

type PasswordRecord = { password_hash: string; salt: string; version: number };

async function passwordRecord(): Promise<PasswordRecord | null> {
  if (!env.DB) throw new Error("Missing D1 binding");
  return env.DB.prepare("SELECT password_hash, salt, version FROM creator_auth WHERE id = 1").first<PasswordRecord>();
}

function bytesToBase64Url(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToBytes(value: string): Uint8Array | null {
  if (!/^[A-Za-z0-9_-]+$/.test(value)) return null;
  try {
    const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
    return Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
  } catch {
    return null;
  }
}

async function sessionKey(): Promise<CryptoKey | null> {
  const encoded = env.CREATOR_SESSION_KEY;
  const raw = encoded && base64UrlToBytes(encoded);
  if (!raw || raw.length < 32) return null;
  return crypto.subtle.importKey("raw", new Uint8Array(raw), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

async function passwordPepper(): Promise<CryptoKey | null> {
  const encoded = env.CREATOR_PASSWORD_PEPPER;
  const raw = encoded && base64UrlToBytes(encoded);
  if (!raw || raw.length < 32) return null;
  return crypto.subtle.importKey("raw", new Uint8Array(raw), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
}

export async function verifyCreatorPassword(password: string): Promise<boolean> {
  if (!password || password.length > 256) return false;
  const record = await passwordRecord();
  if (record) {
    const salt = base64UrlToBytes(record.salt);
    const expected = record.password_hash.startsWith("h1.") ? base64UrlToBytes(record.password_hash.slice(3)) : null;
    if (!salt || salt.length !== 16 || !expected || expected.length !== 32) return false;
    const actual = await derivePassword(password, salt);
    if (!actual) return false;
    let difference = 0;
    for (let index = 0; index < expected.length; index++) difference |= actual[index] ^ expected[index];
    return difference === 0;
  }
  const expected = env.CREATOR_PASSWORD_SHA256;
  if (!expected || !/^[a-f0-9]{64}$/.test(expected)) return false;
  const actual = new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(password)));
  let difference = 0;
  for (let index = 0; index < actual.length; index++) {
    difference |= actual[index] ^ Number.parseInt(expected.slice(index * 2, index * 2 + 2), 16);
  }
  return difference === 0;
}

async function derivePassword(password: string, salt: Uint8Array): Promise<Uint8Array | null> {
  const key = await passwordPepper();
  if (!key) return null;
  const passwordBytes = encoder.encode(password);
  const message = new Uint8Array(salt.length + passwordBytes.length);
  message.set(salt);
  message.set(passwordBytes, salt.length);
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, message));
}

async function resetTokenHash(token: string): Promise<string> {
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(token)));
  return bytesToBase64Url(digest);
}

export async function issueCreatorResetToken(): Promise<{ token: string; hash: string } | null> {
  if (!env.DB) throw new Error("Missing D1 binding");
  const now = Math.floor(Date.now() / 1000);
  const token = bytesToBase64Url(crypto.getRandomValues(new Uint8Array(32)));
  const hash = await resetTokenHash(token);
  const result = await env.DB.prepare(`
    INSERT INTO creator_password_reset (id, token_hash, expires_at, requested_at)
    VALUES (1, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET token_hash = excluded.token_hash,
      expires_at = excluded.expires_at, requested_at = excluded.requested_at
    WHERE creator_password_reset.requested_at <= ?
  `).bind(hash, now + 15 * 60, now, now - 5 * 60).run();
  return result.meta.changes === 1 ? { token, hash } : null;
}

export async function cancelCreatorResetToken(hash: string): Promise<void> {
  if (!env.DB) throw new Error("Missing D1 binding");
  await env.DB.prepare("DELETE FROM creator_password_reset WHERE id = 1 AND token_hash = ?")
    .bind(hash).run();
}

export async function resetCreatorPassword(token: string, next: string): Promise<boolean> {
  if (!/^[A-Za-z0-9_-]{43}$/.test(token) || next.length < 12 || next.length > 128 || !next.trim()) return false;
  if (!env.DB) throw new Error("Missing D1 binding");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derivePassword(next, salt);
  if (!hash) return false;
  const tokenHash = await resetTokenHash(token);
  const now = Math.floor(Date.now() / 1000);
  const results = await env.DB.batch([
    env.DB.prepare(`
      INSERT INTO creator_auth (id, password_hash, salt, version, updated_at)
      SELECT 1, ?, ?, 1, ?
      WHERE EXISTS (
        SELECT 1 FROM creator_password_reset
        WHERE id = 1 AND token_hash = ? AND expires_at > ?
      )
      ON CONFLICT(id) DO UPDATE SET password_hash = excluded.password_hash,
        salt = excluded.salt, version = creator_auth.version + 1,
        updated_at = excluded.updated_at
    `).bind(`h1.${bytesToBase64Url(hash)}`, bytesToBase64Url(salt), new Date().toISOString(), tokenHash, now),
    env.DB.prepare("DELETE FROM creator_password_reset WHERE id = 1 AND token_hash = ?")
      .bind(tokenHash),
  ]);
  return results[0].meta.changes === 1;
}

export async function changeCreatorPassword(current: string, next: string): Promise<boolean> {
  if (next.length < 12 || next.length > 128 || !next.trim() || current === next ||
      !(await verifyCreatorPassword(current))) return false;
  const record = await passwordRecord();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derivePassword(next, salt);
  if (!hash) return false;
  const values = [`h1.${bytesToBase64Url(hash)}`, bytesToBase64Url(salt), new Date().toISOString()];
  if (!env.DB) throw new Error("Missing D1 binding");
  const result = record
    ? await env.DB.prepare("UPDATE creator_auth SET password_hash = ?, salt = ?, version = version + 1, updated_at = ? WHERE id = 1 AND version = ?")
      .bind(...values, record.version).run()
    : await env.DB.prepare("INSERT OR IGNORE INTO creator_auth (id, password_hash, salt, version, updated_at) VALUES (1, ?, ?, 1, ?)")
      .bind(...values).run();
  return result.meta.changes === 1;
}

export async function createCreatorCookie(): Promise<string | null> {
  const key = await sessionKey();
  if (!key) return null;
  const version = (await passwordRecord())?.version ?? 0;
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const nonce = bytesToBase64Url(crypto.getRandomValues(new Uint8Array(16)));
  const payload = `v2.${expires}.${version}.${nonce}`;
  const signature = bytesToBase64Url(new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload))));
  return `${COOKIE_NAME}=${payload}.${signature}; Path=/; Max-Age=${SESSION_SECONDS}; HttpOnly; Secure; SameSite=Strict`;
}

export function clearCreatorCookie(): string {
  return `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`;
}

export async function isCreatorAuthenticated(): Promise<boolean> {
  const requestHeaders = await headers();
  const cookie = requestHeaders.get("cookie")?.split(";").map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);
  if (!cookie) return false;
  const parts = cookie.split(".");
  if (parts.length !== 5 || parts[0] !== "v2" || !/^\d+$/.test(parts[1]) || !/^\d+$/.test(parts[2])) return false;
  const expires = Number(parts[1]);
  const version = Number(parts[2]);
  const now = Math.floor(Date.now() / 1000);
  if (!Number.isSafeInteger(expires) || expires <= now || expires > now + SESSION_SECONDS ||
      !Number.isSafeInteger(version) || version < 0) return false;
  const signature = base64UrlToBytes(parts[4]);
  const key = await sessionKey();
  if (!signature || !key) return false;
  if (!(await crypto.subtle.verify("HMAC", key, new Uint8Array(signature), encoder.encode(parts.slice(0, 4).join("."))))) return false;
  return version === ((await passwordRecord())?.version ?? 0);
}
