
// 2026-10-04 batch50: verified original construction builder
(()=>{
const updates={"moe_4610244":{"builder":"日立造船株式会社（現カナデビア株式会社）を代表とする企業グループ","builder_source":"https://www.kanadevia.com/newsroom/news/release/2021/20210226_000794.html","builder_scope":"当初建設・DBO設計建設確認済み","builder_basis":"カナデビア公式ニュースに、南薩地区衛生管理組合より（仮称）南薩地区新クリーンセンター施設整備・運営事業を日立造船株式会社代表グループがDBO方式で受注と直接記載。エネルギー回収型廃棄物処理施設145t/日（72.5t/日×2炉）、設計・建設期間2021年2月～2024年8月で環境省2024台帳の現施設と一致。","history_note":"2021年2月～2024年8月 設計・建設。代表企業：日立造船株式会社九州支社（現カナデビア）。2024年9月運営開始。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
