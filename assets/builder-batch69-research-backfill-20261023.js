
/* batch69: backfill only still-empty builder fields from already-confirmed original-construction research. Never overwrite existing builders. */
(()=>{
 const registry=(typeof facilityResearch20261003!=='undefined')?facilityResearch20261003:null;
 if(!registry)return;
 let eligible=0,filled=0,skippedExisting=0;
 const filledIds=[];
 for(const r of Object.values(registry)){
  if(!r||r?.research?.status!=='確認済み'||r?.research?.priorState!=='未確認'||!r?.originalConstruction?.contractor?.length)continue;
  eligible++;
  const f=facilities.find(x=>x.id===r.facilityId); if(!f)continue;
  if(f.builder){skippedExisting++;continue;}
  const cs=r.originalConstruction.contractor.filter(Boolean);
  const role=String(r.originalConstruction.role||'');
  let display=cs.join('・');
  if(cs.length>1&&/JV|共同企業体/.test(role)&&!/JV|共同企業体/.test(display))display+='JV';
  const ev=(r.originalConstruction.evidence||[])[0]||{};
  f.builder=display;
  f.builder_source=ev.url||r.research.retrievedUrls?.[0]||'';
  f.builder_scope=[role,ev.summary].filter(Boolean).join('。');
  f.builder_research_status='一次資料等で当初建設確認済み（既存確認データから反映）';
  filled++;filledIds.push(f.id);
 }
 window.__builderBatch69ResearchBackfill={eligible,filled,skippedExisting,filledIds};
 console.info('builder batch69 research backfill',window.__builderBatch69ResearchBackfill);
})();
