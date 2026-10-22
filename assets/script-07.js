
// 2026-10-04 batch49: promote already-verified direct-source construction records
(()=>{
const updates={"moe_3710001":{"builder":"日立造船株式会社（現カナデビア株式会社）","builder_source":"https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/kankyo/seisojigyo/h23gaiyo.files/18631_L13_H234.pdf","builder_scope":"当初建設・設計施工／施工業者確認済み","builder_basis":"高松市『清掃事業概要 平成23年度版』の西部焼却施設欄に、設計施工=日立造船株式会社と直接記載。所在地川部町930-1、280t/日（140t/日×2炉）、1988年3月10日竣工で環境省2024台帳と一致。","history_note":"1988年3月10日竣工。当初設計・施工：日立造船株式会社（現カナデビア）。"},"moe_4210027":{"builder":"株式会社川崎技研","builder_source":"https://www.kawatana.jp/hokenfukushi/pamphlet/seisou_01_2021.pdf","builder_scope":"当初建設・設計施工／施工業者確認済み","builder_basis":"東彼地区保健福祉組合の施設パンフレットに、設計・施工=株式会社川崎技研と直接記載。46t/16h（23t×2基）、工期2016年9月7日～2018年3月31日、所在地川棚町白石郷282-1で現施設と一致。","history_note":"2016年9月7日～2018年3月31日建設。設計・施工：株式会社川崎技研。"},"moe_4210006":{"builder":"川崎重工業株式会社","builder_source":"https://www.city.sasebo.lg.jp/documents/25789/r7jigyougaiyou_op_sec3.pdf","builder_scope":"当初建設・設計施工／施工業者確認済み","builder_basis":"佐世保市『令和7年度 環境部事業概要』に、東部クリーンセンターの当初施工業者=川崎重工業、竣工2001年1月9日、100t/24h×2基と直接記載。2019年3月の基幹改良とは別工事。","history_note":"2001年1月9日竣工。当初施工：川崎重工業株式会社。2019年3月の基幹改良は別枠。"},"moe_4210093":{"builder":"JFEエンジニアリング株式会社","builder_source":"https://www.city.sasebo.lg.jp/documents/25789/r7jigyougaiyou_op_sec3.pdf","builder_scope":"当初建設・設計施工／施工業者確認済み","builder_basis":"佐世保市『令和7年度 環境部事業概要』に、西部クリーンセンターの施工業者=JFEエンジニアリング九州支店、着工2016年12月22日、竣工2020年3月27日、55t/24h×2基と直接記載。","history_note":"2016年12月22日着工、2020年3月27日竣工。当初施工：JFEエンジニアリング株式会社。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
