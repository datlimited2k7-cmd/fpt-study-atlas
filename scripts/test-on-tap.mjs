import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
const context = {window:{}};
for (const name of ['data.js','lesson-guides.js','quiz.js','quiz-expansions.js','quiz-slot08-09.js','on-tap-sync.js','quiz-format.js']) runInNewContext(readFileSync(new URL(`../public/${name}`,import.meta.url),'utf8'),context);
const {QUIZZES,COURSES,ON_TAP_SYNC,formatQuizText,mergeAtlasQuizzes}=context.window;
assert.equal(Object.keys(COURSES).length,6);
for(const [code,count] of Object.entries(ON_TAP_SYNC.counts)){
 const questions=QUIZZES[code].filter(q=>q.source==='on-tap');
 assert.equal(questions.length,count,code);
 assert.equal(new Set(questions.map(q=>q.sourceId)).size,count);
 for(const q of questions){
  assert.ok(q.q.length<=1000&&q.e.length<=2000&&q.o.every(o=>o.length&&o.length<=500));
  for(const a of [q.a].flat().concat(q.alternativeAnswers||[]))assert.ok(Number.isInteger(a)&&a>=0&&a<q.o.length);
  for(const html of [q.q,...q.o,q.e])for(const match of formatQuizText(html,true).matchAll(/src="([^\"]+)"/g))assert.ok(existsSync(new URL(`../public${match[1]}`,import.meta.url)),match[1]);
 }
}
assert.equal(Object.values(ON_TAP_SYNC.counts).reduce((a,b)=>a+b),2106);
assert.ok(formatQuizText('$0<x<2$ <code>#include <stdio.h></code>',true).includes('&lt;stdio.h&gt;'));
assert.equal(formatQuizText('<b onclick="alert(1)">Hi</b>',true),'<b>Hi</b>');
assert.ok(!formatQuizText('<img src="x" onerror="alert(1)">',true).includes('<img'));
assert.ok(!formatQuizText('<script>alert(1)</script>',true).includes('<script'));
const saved=JSON.parse(JSON.stringify(QUIZZES.CEA201));saved[0].q='Creator edit';
const merged=mergeAtlasQuizzes(QUIZZES.CEA201,saved);
assert.equal(merged.length,saved.length);assert.equal(merged[0].q,'Creator edit');
assert.equal(mergeAtlasQuizzes(QUIZZES.MAE101,[]).length,669);
assert.ok(QUIZZES.SDI101m.find(q=>q.sourceId===23).alternativeAnswers.includes(0));
console.log('PASS: 2,106 imported questions, six subjects, answer indices, assets, safe formatting, creator merge.');
const {default:ts}=await import('typescript');
const route=readFileSync(new URL('../app/api/creator/content/route.ts',import.meta.url),'utf8');
const validation=route.slice(route.indexOf('const COURSE_CODES'),route.indexOf('export async function PUT'));
const sandbox={};
runInNewContext(ts.transpile(validation+'\nglobalThis.validate = validDocument;'),sandbox);
const document={version:0,courses:Object.fromEntries(Object.entries(COURSES).map(([c,v])=>[c,v.groups])),quizzes:QUIZZES};
assert.ok(sandbox.validate(document),'Full imported data must be saveable by creator API');
const bad=JSON.parse(JSON.stringify(document));bad.quizzes.SDI101m.find(q=>q.sourceId===23).alternativeAnswers=[99];
assert.equal(sandbox.validate(bad),false);
console.log('PASS: full document accepted by creator validation; invalid alternate answer rejected.');
