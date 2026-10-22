
// 2026-10-04 batch54: verified builder for previously blank facility
(()=>{
const updates={"moe_0610016":{"builder":"神鋼・山形建設特定建設工事共同企業体","builder_source":"https://www.kobelco-eco.co.jp/topics/news/2015/20160218.html","builder_scope":"当初建設・設計施工／建設事業者確認済み","builder_basis":"神鋼環境ソリューション公式ニュースに、山形広域環境事務組合の『エネルギー回収施設（川口）建設及び運営事業』を受注し、本施設の設計・施工を同社と山形建設株式会社が実施、建設事業者（設計・建設）は『神鋼・山形建設特定建設工事共同企業体』と直接記載。施設能力150t/日（75t/24h×2系列）、設計・建設期間2016年2月～2018年11月で環境省2024台帳と一致。","history_note":"2016年2月～2018年11月設計・建設。建設事業者：神鋼・山形建設特定建設工事共同企業体。2018年12月運営開始。"}};
if(typeof facilities!=='undefined' && Array.isArray(facilities)){
  for(const f of facilities){
    const u=updates[f.id];
    if(!u) continue;
    Object.assign(f,u);
  }
}
})();
