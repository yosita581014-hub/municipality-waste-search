// Run: node scripts/verify_builder_batch80_82.cjs [pre-update git ref]
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const cp = require('node:child_process');
const root = path.resolve(__dirname, '..');
const modulePath = 'assets/builder-batch80-82-primary-20261023.js';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const originalHtml = cp.execFileSync('git', ['show', `${process.argv[2] || 'origin/main'}:index.html`], {cwd: root, encoding: 'utf8'});
const withoutNewModule = html.replace(/<script id="builder-batch80-82-primary-20261023"[^>]*><\/script>\r?\n/, '');
assert.equal(withoutNewModule.trimEnd(), originalHtml.trimEnd(), 'Existing UI markup, references and order must stay identical');
const moduleSource = fs.readFileSync(path.join(root, modulePath), 'utf8');
function run(includeNew) {
  let dummy;
  dummy = new Proxy(function(){return dummy;}, {
    get: (_, key) => key === Symbol.iterator ? function*(){} : key === 'length' ? 0 : key === 'value' ? '' : dummy,
    set: () => true, apply: () => dummy
  });
  const errors = [];
  const context = vm.createContext({document: dummy, window: dummy, console: {log(){},warn(){},error(){},info(){}},
    localStorage: dummy, sessionStorage: dummy, URL, URLSearchParams, location: {search:'',hash:''},
    setTimeout:()=>0, requestAnimationFrame:()=>0, Event:function(){}});
  for (const match of html.matchAll(/<script[^>]*src="([^"?]+)/g)) {
    const file = match[1];
    if (!includeNew && file === modulePath) continue;
    try {vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'), context, {timeout:5000});}
    catch (error) {if(file===modulePath) throw error; errors.push([file,error.message]);}
  }
  return {data:JSON.parse(vm.runInContext('JSON.stringify(facilities)',context)),errors};
}
const before = run(false), after = run(true);
assert.deepEqual(after.errors,before.errors,'No new execution failures');
const expected = new Map([
  ['moe_3510010','株式会社川崎技研'],['moe_1110028','株式会社タクマ'],
  ['moe_3510013','バブコック日立株式会社'],['moe_4510012','三機・清水・木村共同企業体'],
  ['moe_1310061','日立造船株式会社'],['moe_1310016','三和動熱工業株式会社'],
  ['moe_1310017','日立金属株式会社'],['moe_1310018','大清工業株式会社']
]);
const allowed = new Set(['builder','builder_source','builder_scope','builder_research_status','builder_candidate_resolution','constructionResearch']);
assert.equal(after.data.length,before.data.length);
const changed=[];
for(let i=0;i<before.data.length;i++) {
  const a=before.data[i],b=after.data[i];
  assert.equal(a.id,b.id);
  if(!expected.has(a.id)){assert.deepEqual(b,a,`Unrelated facility ${a.id}`);continue;}
  assert.ok(!a.builder,`Must not overwrite ${a.id}`);
  assert.equal(b.builder,expected.get(a.id));
  for(const key of new Set([...Object.keys(a),...Object.keys(b)])) {
    if(!allowed.has(key)) assert.deepEqual(b[key],a[key],`${a.id}.${key}`);
  }
  const prior=a.constructionResearch||{},next=b.constructionResearch;
  for(const key of Object.keys(prior)) {
    if(['status','note','checkedAt','searchHistory','retrievalEvidence'].includes(key))continue;
    assert.deepEqual(next[key],prior[key]);
  }
  for(const key of ['searchHistory','retrievalEvidence']) {
    const old=prior[key]||[];
    assert.deepEqual(next[key].slice(0,old.length),old,'Preserve previous evidence');
    assert.equal(next[key].length,old.length+1);
  }
  changed.push(a.id);
}
const context=vm.createContext({facilities:after.data});
const once=JSON.stringify(after.data);
vm.runInContext(moduleSource,context);
assert.equal(JSON.stringify(context.facilities),once,'Idempotent application');
const protectedRecords = before.data.filter(f=>expected.has(f.id)).map(f=>({...structuredClone(f),builder:'既存値・上書き禁止'}));
vm.runInNewContext(moduleSource,{facilities:protectedRecords});
assert.ok(protectedRecords.every(f=>f.builder==='既存値・上書き禁止'));
const mismatched=before.data.filter(f=>expected.has(f.id)).map(f=>({...structuredClone(f),capacity_tpd:'999999'}));
vm.runInNewContext(moduleSource,{facilities:mismatched});
assert.ok(mismatched.every(f=>!f.builder),'Mismatched identity must not be applied');
console.log(JSON.stringify({facilities:after.data.length,changed:changed.length,blankBefore:before.data.filter(f=>f.id.startsWith('moe_')&&!f.builder).length,
  blankAfter:after.data.filter(f=>f.id.startsWith('moe_')&&!f.builder).length,uiMarkupUnchanged:true,changedIds:changed,
  limitation:'Data/markup regression only; dummy DOM does not verify browser layout or interaction.'}));
