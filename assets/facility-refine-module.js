(()=>{
 const anchor=document.getElementById('sort-controls');if(!anchor)return;
 const panel=document.createElement('section');panel.id='facility-refine';
 panel.innerHTML='<div class="refine-title">▦ 施設を詳しく絞り込む</div><label>処理能力<select id="facility-capacity-filter"><option value="all">すべて</option><option value="under">100t/日未満</option><option value="over">100t/日以上</option></select></label><label>稼働年数<select id="facility-age-filter"><option value="all">すべて</option><option value="under">15年未満</option><option value="over">15年以上</option></select></label><label>運転方式<select id="facility-operation-filter"><option value="all">すべて</option><option value="continuous">連続運転（全連続・准連続）</option><option value="intermittent">間欠運転（バッチ式）</option></select></label><button type="button" id="facility-refine-clear">条件をクリア</button>';
 anchor.after(panel);
 const controls=[...panel.querySelectorAll('select')];
 controls.forEach(el=>el.addEventListener('change',()=>{document.getElementById('sort-scope').value='facilities';updateSortUI();runSearch()}));
 panel.querySelector('button').addEventListener('click',()=>{controls.forEach(el=>el.value='all');runSearch()});
 document.getElementById('home-button').addEventListener('click',()=>controls.forEach(el=>el.value='all'));
})();