
/* batch69 primary-source research: original construction firm remains unconfirmed; do not populate builder from equipment model or operations contractor. */
(()=>{const f=facilities.find(x=>x.id==='moe_0110191');if(!f)return;
 if(!f.furnace_model)f.furnace_model='シオバラ AR-150型（火床燃焼方式）';
 f.original_facility_research_source='https://www.rumoi-nanbu.jp/facility/hbbif.html';
 f.original_facility_research_note='留萌南部衛生組合公式。2013年10月10日～11月15日有害鳥獣焼却炉設置工事、2014年4月供用開始、150kg/h、シオバラ AR-150型。製品名は確認したが、契約上の施工会社は未確認。';
 if(!f.builder)f.builder_research_status='当初施工会社未確認（組合公式で施設仕様・設置年月のみ確認）';
})();
