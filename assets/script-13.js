
// 2026-10-04 batch55: verified builders for previously blank facilities
(()=>{
const updates={"moe_0410135":{"builder":"JFEエンジニアリング株式会社","builder_source":"https://www.city.tome.miyagi.jp/koshitu/shisejoho/gyose/teisyutsugian/documents/gianntuikasononi.pdf","builder_scope":"当初建設・建設工事受注／契約相手方確認済み","builder_basis":"登米市議会の工事請負契約議案に、（仮称）新クリーンセンター建設工事の契約相手方としてJFEエンジニアリング株式会社東北支店を直接記載。別の市議会委員会報告でも、施設規模70t/日・2炉、受注者=JFEエンジニアリング株式会社と確認でき、環境省2024台帳の現施設と一致。","history_note":"2016年12月15日～2019年11月30日建設工事。受注・施工：JFEエンジニアリング株式会社。"},"moe_0510009":{"builder":"荏原環境プラント株式会社","builder_source":"https://www.ebara.com/eep/jp-ja/news/2015/20151009/","builder_scope":"当初建設・建設工事受注／契約相手方確認済み","builder_basis":"荏原環境プラント公式ニュースに、北秋田市クリーンリサイクルセンターエネルギー回収推進施設建設工事を同社が受注したと直接記載。施設規模50t/日（25t/16h×2炉）、工事期間2015年6月11日～2018年3月30日、建設場所北秋田市坊沢で環境省2024台帳の現施設と一致。","history_note":"2015年6月11日～2018年3月30日建設工事。受注・施工：荏原環境プラント株式会社。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
