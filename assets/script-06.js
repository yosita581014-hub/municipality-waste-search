
// 2026-10-04 batch48: verified original construction builders
(()=>{
const updates={"moe_4310002":{"builder":"日立造船株式会社（現カナデビア株式会社）","builder_source":"https://www.jefma.or.jp/jefma/61/pdf/jefma61-13.pdf","builder_scope":"当初建設・納入／受注確認済み","builder_basis":"日立造船の技術資料に『当社が納入した熊本市東部環境工場』と直接記載。熊本市公式の現施設概要は600t/日（300t/日×2基）、平成6年3月竣工で環境省2024台帳と一致。1979年竣工の旧東部清掃工場とは世代が異なるため混同しない。","history_note":"1994年3月竣工。当初納入・施工：日立造船株式会社（現カナデビア）。2011年3月に基幹的施設整備工事完了。"},"moe_4310186":{"builder":"日立造船株式会社（現カナデビア株式会社）","builder_source":"https://www.city.yatsushiro.lg.jp/gikai/kiji00322262/3_22262_123395_up_gyvgrzu6.pdf","builder_scope":"当初建設・納入／受注確認済み","builder_basis":"八代市議会資料に、八代市と日立造船株式会社グループが環境センター施設整備・運営事業の基本協定を締結したと直接記載。JESC公的資料でもエネルギー回収推進施設を『受注：日立造船㈱』、67t/日×2炉と明記。環境省2024台帳の134t/日・2炉・2018年度稼働と一致。","history_note":"2015年基本契約、2018年供用開始。エネルギー回収推進施設の受注・建設：日立造船株式会社（現カナデビア）。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
