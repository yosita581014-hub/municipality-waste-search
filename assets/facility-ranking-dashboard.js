
(()=>{
 const registryList=()=>[...new Set(Object.values(registryFacilityMap2024))].map(id=>facilities.find(f=>f.id===id)).filter(Boolean);
 const main=document.querySelector('main'),hero=main.querySelector('.hero');
 const tabs=document.createElement('nav');tabs.className='page-tabs';tabs.setAttribute('aria-label','ページ切り替え');
 const searchTab=document.createElement('button'),dashTab=document.createElement('button');
 searchTab.type=dashTab.type='button';searchTab.textContent='検索';dashTab.textContent='ダッシュボード';tabs.append(searchTab,dashTab);hero.after(tabs);
 const dashboard=document.createElement('section');dashboard.id='dashboard';dashboard.hidden=true;tabs.after(dashboard);
 const head=document.createElement('div');head.className='dash-head';
 const heading=document.createElement('div');heading.innerHTML='<h2>焼却施設ダッシュボード</h2><p>全国の施設を、件数・規模・稼働年数で見渡す</p>';
 const filter=document.createElement('div');filter.className='dash-filter';const label=document.createElement('label');label.htmlFor='dashboard-pref';label.textContent='都道府県';const pref=document.createElement('select');pref.id='dashboard-pref';
 for(const o of document.getElementById('prefecture-filter').options){const opt=document.createElement('option');opt.value=o.value;opt.textContent=o.textContent;pref.appendChild(opt)}filter.append(label,pref);head.append(heading,filter);dashboard.appendChild(head);
 const selector=document.createElement('div');selector.className='dash-selector';const rankField=document.createElement('div');rankField.className='dash-filter';const rankLabel=document.createElement('label');rankLabel.htmlFor='dashboard-ranking';rankLabel.textContent='表示するランキング';const ranking=document.createElement('select');ranking.id='dashboard-ranking';
 for(const [index,title] of ['施工会社別 施設件数','処理方式別 施設件数','処理能力ランキング','発電出力ランキング','年間処理量ランキング','稼働年数が長い施設','稼働年数が短い施設','都道府県別 施設件数'].entries()){const option=document.createElement('option');option.value=String(index);option.textContent=title;ranking.appendChild(option)}ranking.value='0';rankField.append(rankLabel,ranking);selector.appendChild(rankField);dashboard.appendChild(selector);ranking.addEventListener('change',render);
 const progress=document.createElement('small');progress.className='update-progress';const registry=registryList();progress.textContent='（随時情報更新中：施工会社登録 '+(registry.filter(f=>!!f.builder).length/registry.length*100).toFixed(1)+'％完了）';hero.appendChild(progress);
 const content=document.createElement('div');dashboard.appendChild(content);
 function switchPage(open){document.body.classList.toggle('dashboard-open',open);dashboard.hidden=!open;dashTab.setAttribute('aria-pressed',String(open));searchTab.setAttribute('aria-pressed',String(!open));if(open)render();}
 searchTab.addEventListener('click',()=>switchPage(false));dashTab.addEventListener('click',()=>{pref.value=document.getElementById('prefecture-filter').value;switchPage(true)});pref.addEventListener('change',render);document.getElementById('home-button').addEventListener('click',()=>switchPage(false));
 const num=v=>new Intl.NumberFormat('ja-JP',{maximumFractionDigits:1}).format(v);
 let returnToDashboard=null;
 function saveDashboardReturn(){
  returnToDashboard={pref:pref.value,ranking:ranking.value,scrollY:window.scrollY};
  document.getElementById('back-button').disabled=false;
 }
 document.getElementById('back-button').addEventListener('click',function(event){
  if(!returnToDashboard||!dashboard.hidden)return;
  event.stopImmediatePropagation();
  const state=returnToDashboard;returnToDashboard=null;
  pref.value=state.pref;ranking.value=state.ranking;
  switchPage(true);
  document.getElementById('back-button').disabled=viewHistory.length<2;
  requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:state.scrollY,behavior:'instant'})));
 },true);
 document.getElementById('home-button').addEventListener('click',()=>{returnToDashboard=null;});
 searchTab.addEventListener('click',()=>{returnToDashboard=null;});
 dashTab.addEventListener('click',()=>{returnToDashboard=null;});
 function openFacility(f){saveDashboardReturn();switchPage(false);document.getElementById('prefecture-filter').value=pref.value;document.getElementById('sort-scope').value='facilities';updateSortUI();document.getElementById('q').value=f.name;searchAndShow(f.name,f.id);document.getElementById('result').scrollIntoView({behavior:'smooth',block:'start'});}
 function openGroup(g,mode){saveDashboardReturn();switchPage(false);document.getElementById('prefecture-filter').value=pref.value;document.getElementById('sort-scope').value='facilities';updateSortUI();document.getElementById('sort-order').value=mode;document.getElementById('q').value='';runSearch();renderCompanyFacilities(g,mode,document.getElementById('search-candidates'));}
 function panel(title,note,items,unit,onClick,tone=''){
  const section=document.createElement('section');section.className='dash-panel';section.dataset.tone=tone;const h=document.createElement('h3');h.textContent=title;const p=document.createElement('p');p.className='dash-note';p.textContent=note;section.append(h,p);
  const maximum=Math.max(1,...items.map(x=>x.value));
  items.forEach((item,index)=>{const button=document.createElement('button');button.type='button';button.className='dash-rank';button.setAttribute('aria-label',item.label+' '+num(item.value)+unit+' 詳細を開く');const row=document.createElement('div');row.className='dash-row';for(const [cls,text] of [['dash-place',index+1],['dash-label',item.label],['dash-value',num(item.value)+unit]]){const span=document.createElement('span');span.className=cls;span.textContent=text;row.appendChild(span)}const meta=document.createElement('div');meta.className='dash-meta';meta.textContent=item.meta||'施設一覧を開く ↗';const track=document.createElement('div');track.className='dash-track';const bar=document.createElement('div');bar.className='dash-bar';bar.style.width=(item.value/maximum*100)+'%';track.appendChild(bar);button.append(row,meta,track);button.addEventListener('click',()=>onClick(item));section.appendChild(button)});
  if(!items.length){const empty=document.createElement('p');empty.className='dash-note';empty.textContent='この条件の登録データはありません。';section.appendChild(empty)}return section;
 }
 function render(){
  const all=registryList(),list=all.filter(f=>!pref.value||facilityPrefecture(f)===pref.value),builders=aggregateFacilities(list,'builder'),age=f=>facilityAge(f)?.years;
  content.replaceChildren();const summary=document.createElement('p');summary.className='dash-summary';summary.textContent=(pref.value||'全国')+' ｜ 対象 '+list.length+'施設 ｜ 施工会社登録 '+list.filter(f=>!!f.builder).length+'施設';content.appendChild(summary);
  const grid=document.createElement('div');grid.className='dash-grid';content.appendChild(grid);
  for(const [mode,title] of [['builder','施工会社別 施設件数'],['process','処理方式別 施設件数']]){const groups=aggregateFacilities(list,mode);grid.appendChild(panel(title,'上位10分類｜未登録 '+groups.unverified+'施設',groups.slice(0,10).map(g=>({label:g.label,value:g.count,group:g})),'施設',i=>openGroup(i.group,mode)))}
  for(const [field,title,unit] of [['capacity_tpd','処理能力ランキング',' t/日'],['power_kw','発電出力ランキング',' kW'],['annual_tonnes','年間処理量ランキング',' t/年']]){const known=list.filter(f=>sortableAmount(f[field])!==null);grid.appendChild(panel(title,'上位10施設｜値の登録 '+known.length+'／'+list.length+'施設',sortFacilities(known,field==='capacity_tpd'?'capacity-desc':field==='power_kw'?'power-desc':'annual-desc').slice(0,10).map(f=>({label:f.name,value:sortableAmount(f[field]),meta:facilityPrefecture(f)+(field==='annual_tonnes'?' ｜ '+(f.annual_tonnes_year||'年度未登録'):''),facility:f})),unit,i=>openFacility(i.facility)))}
  for(const [newest,title,tone] of [[false,'稼働年数が長い施設','old'],[true,'稼働年数が短い施設','new']]){const known=list.filter(f=>age(f)!=null);known.sort((a,b)=>(newest?1:-1)*(age(a)-age(b))||a.name.localeCompare(b.name,'ja'));grid.appendChild(panel(title,'上位10施設｜供用開始からの年数（月不明は概算）',known.slice(0,10).map(f=>({label:f.name,value:age(f),meta:facilityPrefecture(f)+' ｜ 稼働開始 '+f.operation_start,facility:f})),'年',i=>openFacility(i.facility),tone))}
  const prefs=new Map();for(const f of list){const p=facilityPrefecture(f)||'所在地未確認';if(!prefs.has(p))prefs.set(p,[]);prefs.get(p).push(f)}const grouped=[...prefs].map(([label,facilities])=>({label,value:facilities.length,facilities})).sort((a,b)=>b.value-a.value||a.label.localeCompare(b.label,'ja'));
  grid.appendChild(panel('都道府県別 施設件数','上位10都道府県｜クリックで絞り込み',grouped.slice(0,10),'施設',i=>{pref.value=i.label;render();dashboard.scrollIntoView({behavior:'smooth',block:'start'})}));
  const selectedPanel=grid.children[Number(ranking.value)||0];grid.replaceChildren(selectedPanel);
  const foot=document.createElement('p');foot.className='dash-footer';foot.textContent='集計対象は環境省2024施設台帳の845施設。ランキングは登録値に基づき、未登録値は数値ランキングから除外しています。施工会社は検索画面と同じ名寄せで集計し、JVの複数社は重複計上する場合があります。稼働年数は改修後の経過年数ではありません。年間処理量は施設ごとの表示年度をご確認ください。';content.appendChild(foot);
 }
 switchPage(false);
})();
