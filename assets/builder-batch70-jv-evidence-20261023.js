
/* batch70: primary source confirming Iwata Chizaki JV member, no unproven plant-manufacturer inference */
(()=>{const f=facilities.find(x=>x.id==='moe_0110067');if(!f)return;
 f.jv_construction_members_verified=['株式会社プランテック','岩田地崎建設株式会社','北一建設株式会社'];
 f.jv_primary_evidence=[{url:'https://www.city.eniwa.hokkaido.jp/material/files/group/22/000.pdf',description:'恵庭市施設比較表：設計建設JV構成会社、2012年12月竣工'},{url:'https://www.iwatachizaki.jp/result/detail/105.html',description:'岩田地崎建設公式施工実績：2010年8月着工、2012年12月竣工、設計施工・JVサブ'}];
 f.plant_builder_research_status='JV構成確認済み。プラント設備担当の分担は別途確認必要';
})();
