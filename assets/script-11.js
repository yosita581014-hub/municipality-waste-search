
// 2026-10-04 batch53: verified builders for previously blank facilities
(()=>{
const updates={"moe_0410037":{"builder":"川重・熊谷・佐藤 建設工事共同企業体","builder_source":"https://www.khi.co.jp/pressrelease/detail/20130327_1.html","builder_scope":"当初建設・DBO／建設工事受注確認済み","builder_basis":"川崎重工業公式プレスリリースに、亘理名取共立衛生処理組合向け新ごみ処理施設建設工事を川崎重工・熊谷組・佐藤建設のグループで受注したと直接記載。納入時資料では、川崎重工が施設の設計、機器の製作・調達・据付工事を担当。処理能力157t/日（78.5t/日×2炉）で環境省2024台帳と一致。","history_note":"2013年受注、2016年3月完工。受注者：川重・熊谷・佐藤 建設工事共同企業体。プラント設計・機器製作・据付：川崎重工業株式会社。"},"moe_0510018":{"builder":"荏原環境プラントグループ","builder_source":"https://app.city.yokote.lg.jp/kankyo/page000107.html","builder_scope":"当初建設・DBO／建設工事受注確認済み","builder_basis":"横手市公式のクリーンプラザよこて整備及び運営事業ページでDBO方式の設計・建設業務を含む事業として実施したことを確認。運営事業者公式では、本事業が施設の設計・施工と運営を一括して行うDBO事業であり、荏原環境プラントが出資者として事業に参画。横手市公表資料では落札者=荏原環境プラントグループ。","history_note":"DBO方式で整備。落札者：荏原環境プラントグループ。2016年4月供用開始。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
