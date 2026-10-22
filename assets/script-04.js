
// 2026-10-04 batch46: verified original construction builder
(()=>{
const updates={"moe_4410006":{"builder":"JFEエンジニアリング株式会社","builder_source":"https://www.jfe-eng.co.jp/news/pdf/20030609.pdf","builder_scope":"当初建設・受注建設確認済み","builder_basis":"JFEエンジニアリング公式ニュースに、佐伯地域広域市町村圏事務組合より受注・建設していたシャフト式高温ガス化溶融炉を2003年3月末に竣工・引渡ししたと直接記載。施設名=エコセンター番匠、処理能力110t/日（55t/日×2基）で環境省2024台帳条件と一致。","history_note":"2003年3月末竣工・引渡し、同年4月稼働開始。当初建設：JFEエンジニアリング株式会社。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
