
// 2026-10-04 batch52: verified builders for previously blank facilities
(()=>{
const updates={"moe_0210124":{"builder":"荏原・中屋敷・鈴木特定建設工事共同企業体","builder_source":"https://www.mies.ebara.com/introduction/","builder_scope":"当初建設・設計施工／請負者確認済み","builder_basis":"三沢市清掃センター公式の施設紹介に、処理能力52t/日（26t/日×2炉）、2019年12月着工・2023年8月竣工、設計施工=荏原・中屋敷・鈴木特定建設工事共同企業体と直接記載。環境省2024台帳条件と一致。","history_note":"2019年12月着工、2023年8月竣工。設計施工：荏原・中屋敷・鈴木特定建設工事共同企業体。"},"moe_0610073":{"builder":"日立造船・佐藤工務・鶴岡建設特定建設工事共同企業体","builder_source":"https://www.city.tsuruoka.lg.jp/shisei/koutyou/shingikai/shimin/hgsk/haikibutuR2_1.files/beshi1-3.pdf","builder_scope":"当初建設・設計施工／請負者確認済み","builder_basis":"鶴岡市公式資料『鶴岡市ごみ焼却施設整備・運営事業』に、工事期間2018年4月1日～2021年3月31日、請負者=日立造船・佐藤工務・鶴岡建設特定建設工事共同企業体、新施設160t/日（80t/日×2炉）と直接記載。環境省2024台帳条件と一致。","history_note":"2018年4月1日～2021年3月31日整備工事。請負者：日立造船・佐藤工務・鶴岡建設特定建設工事共同企業体。"},"moe_2010194":{"builder":"荏原・竹花特定建設工事共同企業体","builder_source":"https://www.eep.ebara.com/news/newsrelease/20210118.html","builder_scope":"当初建設・設計施工／請負者確認済み","builder_basis":"荏原環境プラント公式ニュースに2017年受注の建設・運営事業で施設建設を進め2020年11月に建設工事完了、施設規模110t/日（55t/日×2炉）と記載。施工JVについて株式会社竹花組公式の施工事例・火入式記事に『施工：荏原・竹花特定建設工事共同企業体』と直接記載。","history_note":"2017年受注、2020年11月建設工事完了。施工：荏原・竹花特定建設工事共同企業体。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
