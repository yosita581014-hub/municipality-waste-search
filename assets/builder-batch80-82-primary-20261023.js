/* Verified original-construction evidence only. Never replace an existing builder. */
(() => {
  'use strict';
  const tokyo = 'https://www.kankyo.metro.tokyo.lg.jp/documents/d/kankyo/-4-6-5-28-';
  const entries = [
    {
      id: 'moe_3510010', capacity: 90, year: '2015年度', batch: 80,
      company: '株式会社川崎技研',
      url: 'https://www.city.sanyo-onoda.lg.jp/uploaded/attachment/11951.pdf',
      title: '一般会計予算決算常任委員会記録（平成27年3月13日）',
      publisher: '山陽小野田市', page: '印刷57ページ（PDF58ページ）',
      note: '市の環境施設整備室技監が新ごみ処理施設の建設メーカーを川崎技研と説明。2015年3月25日までに完成検査・引渡し予定とし、運転管理受注者とは明確に区別。市施設概要の2015年4月供用・90t/日と照合。'
    },
    {
      id: 'moe_1110028', capacity: 80, year: '1994年度', batch: 80,
      company: '株式会社タクマ',
      url: 'https://www.pref.saitama.lg.jp/documents/65008/9999907088.pdf',
      title: '埼玉県景観資源データベース 坂戸市西清掃センター',
      publisher: '埼玉県／埼玉県景観行政連絡会議', page: '1ページ',
      note: '1994年竣工の坂戸市西清掃センターについて設計者をタクマ東京支店、施工者をタクマと明記。所在地にっさい花みず木一丁目と既存レコードを照合。近年の焼却炉補修の落札者からの推定ではない。'
    },
    {
      id: 'moe_3510013', capacity: 330, year: '1995年度', batch: 80,
      company: 'バブコック日立株式会社',
      url: 'https://www.hitachihyoron.com/jp/pdf/1996/07/1996_07_12.pdf',
      title: '日立評論1996年7月号 廃棄物焼却システム',
      publisher: '日立評論', page: '印刷535～536ページ（PDF1～2ページ）',
      note: 'バブコック日立の流動床式焼却炉の節に、1995年9月に周南地区衛生施設組合へ110t/24h×3炉を納入したと記載。表紙写真は恋路クリーンセンター。組合公式の1995年供用・330t/日と一致し、後年の基幹改良とは別。'
    },
    {
      id: 'moe_4510012', capacity: 160, year: '1991年度', batch: 80,
      company: '三機・清水・木村共同企業体',
      url: 'https://hyuga-kouiki.jp/pdf/plan/2025/seiso_keikaku01.pdf',
      title: '日向東臼杵広域連合 清掃センター長寿命化総合計画 抜粋版（2024年3月）',
      publisher: '日向東臼杵広域連合', page: '印刷2ページ 表2-1（PDF4ページ）',
      note: '建設欄に1989年9月1日着工、1991年3月25日竣工、設計三機工業、施工三機・清水・木村共同企業体を記載。160t/日、日向市富高2192の対象施設と一致。JV構成会社の正式商号は資料の略称を勝手に展開しない。'
    },
    {
      id: 'moe_1310061', capacity: 190, year: '1994年度', batch: 82,
      company: '日立造船株式会社', url: tokyo,
      title: '東京都区市町村清掃事業年報 令和4年度実績',
      publisher: '東京都環境局', page: '印刷23ページ A07（PDF33ページ）',
      note: '焼却施設表A07の施工者は日立造船。昭島市田中町4-3-14、95t/日×2炉、1994年3月稼働を照合。表の竣工1995年10月と稼働1994年3月は別欄の原記載を維持し、既存稼働年は変更しない。'
    },
    {
      id: 'moe_1310016', capacity: 13, year: '1994年度', batch: 82,
      company: '三和動熱工業株式会社', url: tokyo,
      title: '東京都区市町村清掃事業年報 令和4年度実績',
      publisher: '東京都環境局', page: '印刷24ページ A16（PDF34ページ）',
      note: '焼却施設表A16の施工者は三和動熱工業。神津島村字鍛冶山1、13t/日×1炉、1994年7月竣工・8月稼働と一致。既存候補の開邦工業はこの当初施工の根拠として採用しない。'
    },
    {
      id: 'moe_1310017', capacity: 7, year: '2000年度', batch: 82,
      company: '日立金属株式会社', url: tokyo,
      title: '東京都区市町村清掃事業年報 令和4年度実績',
      publisher: '東京都環境局', page: '印刷24ページ A17（PDF34ページ）',
      note: '焼却施設表A17の施工者は日立金属。三宅村伊ヶ谷103・105、7t/日×1炉、2000年3月竣工・4月稼働と一致。同名の粗大ごみ処理施設の施工欄と区別。既存候補の開邦工業は不採用。'
    },
    {
      id: 'moe_1310018', capacity: 2, year: '1997年度', batch: 82,
      company: '大清工業株式会社', url: tokyo,
      title: '東京都区市町村清掃事業年報 令和4年度実績',
      publisher: '東京都環境局', page: '印刷24ページ A18（PDF34ページ）',
      note: '焼却施設表A18の施工者は大清工業。御蔵島村の2t/日×1炉のじん芥処理施設を照合。年報は1996年3月竣工・4月稼働、環境省由来の既存値は1997年度で差があるため、稼働年は未修正のまま差異を記録。'
    }
  ];
  for (const entry of entries) {
    const f = facilities.find(item => item.id === entry.id);
    if (!f || f.builder || Number(f.capacity_tpd) !== entry.capacity || f.operation_start !== entry.year) continue;
    f.builder = entry.company;
    f.builder_source = entry.url;
    f.builder_scope = entry.note;
    f.builder_research_status = '当初建設・施工を一次資料で確認済み';
    if (f.builder_candidate) f.builder_candidate_resolution = '過去の未確定候補は履歴として保持。確定値はbuilderとbuilder_sourceを参照。';
    const evidence = {
      url: entry.url, title: entry.title, publisher: entry.publisher,
      page: entry.page, summary: entry.note, checkedAt: '2026-10-23',
      sourceStatus: '本文取得・確認済み', sourcePriority: 'A'
    };
    const research = f.constructionResearch || (f.constructionResearch = {});
    if (!Array.isArray(research.searchHistory)) research.searchHistory = [];
    research.searchHistory.push({
      checkedAt: '2026-10-23', action: `batch${entry.batch} 当初施工の一次資料照合`,
      urls: [entry.url], sourceStatus: '確認済み', note: entry.note,
      previousStatus: research.status, previousNote: research.note
    });
    if (!Array.isArray(research.retrievalEvidence)) research.retrievalEvidence = [];
    research.retrievalEvidence.push(evidence);
    research.status = '確認済み';
    research.note = entry.note;
    research.checkedAt = '2026-10-23';
  }
})();
