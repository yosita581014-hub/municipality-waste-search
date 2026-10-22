
// 2026-10-04 batch56: verified builders for previously blank facilities
(()=>{
const updates={"moe_0110057":{"builder":"荏原環境プラント株式会社","builder_source":"https://www.ebara.com/eep/jp-ja/news/2017/20171208/","builder_scope":"当初建設・建設工事受注確認済み","builder_basis":"荏原環境プラント公式ニュースに、えんがるクリーンセンターについて『当社が2015年に建設工事を受注』し、2018年1月の運営開始に向け工事を進めていると直接記載。施設規模32t/日（16t/16h×2基）も環境省2024台帳と一致。","history_note":"2015年建設工事受注、2017年完成、2018年1月運営開始。当初建設：荏原環境プラント株式会社。"},"moe_0110054":{"builder":"日立造船株式会社（現カナデビア株式会社）","builder_source":"https://www.env.go.jp/recycle/report/h31-08-04.pdf","builder_scope":"当初建設・建設工事受注確認済み","builder_basis":"環境省資料『VII-3 中・北空知地域』に、中・北空知エネクリーンについて『建設は日立造船株式会社が受注した』と直接記載。施設規模85t/日（42.5t/日×2炉）、2013年供用開始で環境省2024台帳と一致。日立造船アニュアルレポートでも同施設の完工・運営委託事業開始を確認。","history_note":"2013年3月31日完工、2013年4月1日供用・運営開始。当初建設：日立造船株式会社（現カナデビア）。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
