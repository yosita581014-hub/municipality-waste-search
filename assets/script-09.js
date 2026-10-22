
// 2026-10-04 batch51: verified currently-unregistered builders
(()=>{
const updates={"moe_0910181":{"builder":"日立造船株式会社（現カナデビア株式会社）","builder_source":"https://www.city.tochigi-sakura.lg.jp/manage/contents/upload/61bb4018bacf5.pdf","builder_scope":"当初建設・施設整備／設備更新工事確認済み","builder_basis":"さくら市議会資料に、塩谷広域行政組合の次期環境整備施設整備事業を2016年11月28日に日立造船株式会社と123億1,920万円で契約したこと、2017年10月3日に同社と建設工事請負変更仮契約を締結したことが直接記載。組合要覧の114t/日（57t/日×2炉）、2019年9月竣工の現施設と一致。","history_note":"2016年11月28日施設整備事業契約、2019年9月竣工。当初建設：日立造船株式会社（現カナデビア）。"},"moe_2310004":{"builder":"JFEエンジニアリング株式会社","builder_source":"https://www.jfe-eng.co.jp/news/2016/20160509.html","builder_scope":"当初建設・施設整備／設備更新工事確認済み","builder_basis":"JFEエンジニアリング公式ニュースに、名古屋市より『名古屋市富田工場焼却設備更新工事』を受注し、既存建屋を再利用してストーカ方式150t/日×3炉の設備更新を行うと直接記載。工期2016年3月8日～2020年6月30日で、環境省2024台帳の450t/日・3炉・2020年度稼働と一致。","history_note":"2016年3月8日～2020年6月30日焼却設備更新工事。受注・施工：JFEエンジニアリング株式会社。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
