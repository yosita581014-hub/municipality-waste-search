
for(const [id,value,label] of [['prefecture-filter','','都道府県を全国に戻す'],['sort-scope','search','対象をすべてに戻す'],['sort-order','related','並び順を関連順に戻す']]){
 const select=document.getElementById(id);
 const field=document.createElement('div');field.className='filter-reset-field';field.dataset.control=id;
 select.parentNode.insertBefore(field,select);field.appendChild(select);
 const button=document.createElement('button');button.type='button';button.className='filter-reset-button';button.textContent='×';button.setAttribute('aria-label',label);button.title=label;
 button.addEventListener('click',()=>{select.value=value;select.dispatchEvent(new Event('change',{bubbles:true}));});field.appendChild(button);
}
