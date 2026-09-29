declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    CREATOR_PASSWORD_SHA256?: string;
    CREATOR_PASSWORD_PEPPER?: string;
    CREATOR_SESSION_KEY?: string;
    GMAIL_APP_PASSWORD?: string;
  }
}
