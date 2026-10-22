(()=>{
 const form=document.getElementById('search'),sort=document.getElementById('sort-controls'),panel=document.getElementById('facility-refine');
 if(!form||!sort||!panel)return;
 sort.parentNode.insertBefore(form,sort);
 const details=document.createElement('details');details.id='advanced-search';
 const summary=document.createElement('summary');summary.textContent='詳細条件・並び順';
 const body=document.createElement('div');body.className='advanced-body';
 details.append(summary,body);sort.after(details);
 const sortOrder=document.getElementById('sort-order');
 if(sortOrder){const label=document.querySelector('label[for="sort-order"]');const wrap=document.createElement('div');wrap.className='advanced-sort-label';if(label)wrap.appendChild(label);wrap.appendChild(sortOrder);body.appendChild(wrap)}
 body.appendChild(panel);
 const chips=document.createElement('div');chips.id='active-filter-chips';details.after(chips);
 const configs=[['prefecture-filter','都道府県'],['sort-scope','対象'],['sort-order','並び順'],['facility-capacity-filter','処理能力'],['facility-age-filter','稼働年数'],['facility-operation-filter','運転方式']];
 const defaults={'prefecture-filter':'','sort-scope':'search','sort-order':'related','facility-capacity-filter':'all','facility-age-filter':'all','facility-operation-filter':'all'};
 function refresh(){
  chips.replaceChildren();
  for(const [id,title] of configs){
   const el=document.getElementById(id);if(!el||el.value===defaults[id])continue;
   const item=document.createElement('button');item.type='button';item.textContent=title+'：'+el.selectedOptions[0].textContent+' ×';
   item.addEventListener('click',()=>{el.value=defaults[id];el.dispatchEvent(new Event('change',{bubbles:true}));refresh()});
   chips.appendChild(item);
  }
 }
 configs.forEach(([id])=>document.getElementById(id)?.addEventListener('change',refresh));
 document.getElementById('facility-refine-clear')?.addEventListener('click',refresh);
 document.getElementById('home-button')?.addEventListener('click',()=>requestAnimationFrame(refresh));
 refresh();
})();