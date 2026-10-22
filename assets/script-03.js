
// 2026-10-04 batch45: verified original construction builders
(()=>{
const updates={"moe_4010008":{"builder":"株式会社タクマ","builder_source":"https://www.city.kurume.fukuoka.jp/1100keikaku/2090kansa/3060gaibukansa/files/R2-houkatuzenbun.pdf","builder_scope":"当初建設・設計施工確認済み","builder_basis":"久留米市の包括外部監査報告書に、施設名称=久留米市上津クリーンセンター、処理能力300t/24h（100t/24h×3基）、建設期間平成元年7月～平成5年3月、設計施工=株式会社タクマと直接記載。環境省2024台帳の現施設条件と一致。","history_note":"1993年3月竣工・稼働。設計・施工：株式会社タクマ。後年改修・長期運営委託は別枠。"},"moe_4010001":{"builder":"株式会社タクマ","builder_source":"https://www.city.kitakyushu.lg.jp/files/001146118.pdf","builder_scope":"当初建設・設計施工確認済み","builder_basis":"北九州市公式の随意契約結果で『皇后崎工場は、（株）タクマが設計・施工したタクマ式連続焼却式機械炉である』と直接記載。環境省2024台帳の810t/日・3炉の皇后崎工場と一致。","history_note":"1998年度稼働。当初設計・施工：株式会社タクマ。2016年度などの焼却炉設備改良工事も同社実績があるが、当初建設とは区別。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
