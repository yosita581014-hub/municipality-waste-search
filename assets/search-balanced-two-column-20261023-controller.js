(()=>{
const controls=document.getElementById('sort-controls');
if(controls){for(const id of ['prefecture-filter','sort-scope']){const sel=document.getElementById(id),lab=controls.querySelector('label[for="'+id+'"]');if(!sel||!lab||sel.parentElement?.classList.contains('nav-filter-field'))continue;const box=document.createElement('div');box.className='nav-filter-field';lab.before(box);box.append(lab,sel);}}
const details=document.getElementById('advanced-search');if(details)details.open=true;
})();