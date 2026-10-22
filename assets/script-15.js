
// 2026-10-04 batch57: verified builders for previously blank facilities
(()=>{
const updates={"moe_2610133":{"builder":"株式会社タクマ","builder_source":"https://www.city.kizugawa.lg.jp/0000000929.html","builder_scope":"当初建設・実施設計／建設工事施工確認済み","builder_basis":"木津川市公式『クリーンセンター施設整備工事』に、契約の相手方=株式会社タクマ、工事期間=2015年3月19日～2018年8月31日（実施設計期間を含む）、施設規模94t/日（47t/日×2炉）と直接記載。タクマ公式技報でも同社が木津川市から受注し2018年8月竣工と確認でき、環境省2024台帳と一致。","history_note":"2015年3月19日～2018年8月31日施設整備工事（実施設計含む）。契約の相手方・施工：株式会社タクマ。"},"moe_2010207":{"builder":"JFEエンジ・武井組特定建設工事共同企業体","builder_source":"https://azumino-hotaka.jp/files/libs/638/202103300855492505.pdf","builder_scope":"当初建設・実施設計／建設工事施工確認済み","builder_basis":"穂高広域施設組合公式パンフレットに、建設工事の工期=2018年4月11日～2021年2月28日、施工者=JFEエンジ・武井組特定建設工事共同企業体と直接記載。施設規模120t/日（60t/24h×2炉）、発電3,000kWで環境省2024台帳の現施設と一致。","history_note":"2018年4月11日～2021年2月28日建設工事。施工：JFEエンジ・武井組特定建設工事共同企業体。2021年3月運営開始。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
