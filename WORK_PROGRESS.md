# 自治体・焼却施設ナビ — 作業進捗・引継ぎ基準

更新日: 2026-10-23
公開サイト: https://yosita581014-hub.github.io/municipality-waste-search/
リポジトリ: https://github.com/yosita581014-hub/municipality-waste-search

## 運用上の最優先事項
- 2024年度環境省焼却施設台帳の845施設について、当初建設施工会社（builder）未登録を減らす。
- 正確な一次資料、施設の世代、住所、能力、炉数、稼働・竣工年を照合する。推測登録禁止。
- 運営、改修、長寿命化、基幹改良、後年設備更新の会社を当初施工として登録しない。
- JV代表会社とプラントメーカーを混同しない。既登録builderを上書きしない。
- UI変更はユーザーが明示指示するまで行わない。ダッシュボードから施設詳細へ遷移後の「戻る」動作を維持。
- 「0」「やれ」「いけ」「すすめろ」は作業継続の指示。不要な確認を挟まず、その応答中にできる限り調査・反映する。
- 応答終了後も自動で継続できるとは報告しない。

## GitHub作業の安全手順
1. 毎回、mainの最新コミットとindex.htmlの現在SHAを取得。並行作業に注意。
2. index.html全体を会話に印字しない。GitHubツール内で集計し、出力はSHA・件数・対象IDなど小さな要約のみにする。
3. 更新直前にもindex.htmlの最新SHAを確認。古い全文で最新版を上書きしない。
4. コミット後に再取得して反映確認。既存件数と対象者IDを差分で検査。
5. 調査ログと進捗はこのファイルへ追記。チャットの引継ぎ文や過去ログだけを真実として扱わない。

## 最新状態（更新日時点の既知）
- 2024年度環境省台帳: 845施設。
- 旧基準（batch68時点）: builder登録640 / 未登録205。**最新値ではない。**
- batch69で当初施工会社の直接確認済み記録85件を候補として空欄builderのみ補完するJavaScriptを実装。ただし85件は候補数であって増加件数ではない。
- batch69: 平取町外2町衛生施設組合第1工場（moe_0110063）、当初施工タクマの確認記録。
- batch70: 西紋別地区広域ごみ処理センター（moe_0110067）設計施工JVの構成会社と岩田地崎建設の実績根拠。
- batch71以降にも更新がある。**常にmainで最新batchを再確認**。
- このファイル作成直前に観測したmain最新コミット: e00a503f139ad04387ead79189fdbce9a2d4d558。
- 最新builder登録実数および増加件数は未確定。集計できるまで数値を断定しない。

## 次に実行すること
1. 最新index.htmlを解析し、JavaScriptの追加代入分を含めた845施設のbuilder有無を再集計する。
2. 空欄IDの一覧を抽出し、高効率な一次資料（県の施設施工者一覧、自治体契約公表、メーカー実績）で複数施設を連続調査。
3. 確定した当初建設会社だけbuilderに追加し、根拠URLと世代一致情報を保存。
4. 施工会社登録済み累計/未登録残数/新規登録件数/確認不能件数/根拠資料件数を実値で更新。
5. UIは現状維持。

## 会話の上限対策
- 新規チャットが数分で上限に達した事例がある。時間よりも巨大なHTMLや長大なツール応答が主な負荷候補。
- ツール内で全文を処理しても、チャットへは抜粋と集計のみ出す。全文HTML・巨大なdiff・全施設配列をチャットへ貼らない。
- 新チャットの最初にこのWORK_PROGRESS.mdを確認し、その後mainの最新コミットとindex.html SHAを取得して再開する。

## 2026-10-23: 継続調査ログ（一次資料優先）
- moe_1010004 吉井クリーンセンター: 高崎市公式 https://www.city.takasaki.gunma.jp/page/2445.html で1991年3月着工・1992年9月竣工・30t/日・2炉を確認。2003年3月はダイオキシン対策工事の竣工で、当初施工とは別。施工会社は未確認。
- moe_1010017 玉村町クリーンセンター: 玉村町公式 https://www.town.tamamura.lg.jp/docs/2017020700030/ に1990年建設、1995年24時間運転体制改良の記録。https://www.town.tamamura.lg.jp/docs/2023061600017/file_contents/teirei5_0901.pdf は2023年のタクマによる年次整備工事で、当初施工の証明ではない。施工会社は未確認。
- 甘楽西部環境衛生施設組合清掃センター: https://nanmoku.ne.jp/lifehealth/life/environmental_sanitary/ に維持管理情報。施工者名の直接確認は未達。
- いずれも当初施工会社の新規登録は0件。改修工事担当を当初施工会社に誤登録しない。

## 2026-10-23 継続調査: 碓氷川クリーンセンター（moe_1010014）
- 安中市公式施設概要 https://www.city.annaka.lg.jp/page/1728.html : 所在地 原市65、1995年6月着工・1998年3月竣工、ごみ焼却135t/日（67.5t/24h×2炉）、総事業費65億4565万円。環境省2024年度台帳の同施設・同能力・同炉数・1998年度稼働に一致。
- 不二サッシ公式 https://www.fujisash.co.jp/hp/business/environment/dest/case/ は飛灰処理設備実績として「株式会社タクマ」を並記しているが、当初焼却施設本体の工事施工者を直接証明する記録ではないためbuilderを変更しない。
- 安中市公式・入札 https://portal.g-cals.e-gunma.lg.jp/ebia/servlet/p?anken_no=202502110201039&job=AcKekkaBDetail&shubetsucd=02 は2025年精密機能検査契約。新設施工者ではない。
- 当初施工会社未確定。新規builder登録0件。次は1995～1998年の本体設計・建設工事契約公表か施工JVの直接一次資料を探す。

## 2026-10-23 第10施設一括調査（batch74 research-only）

対象10施設。**この10件では新規builder登録0件**。根拠が当初施工会社を特定しない場合は工事会社を推測しない。

| ID | 施設 | 一次資料照合・判断 |
|---|---|---|
| moe_0110001 | 札幌市駒岡清掃工場（旧600t/日、1985年度） | 岩田地崎建設公式 https://www.iwatachizaki.jp/result/detail/122.html は1982年8月着工・1985年11月竣工、JVメインで工場棟等の**建築施工**を記載。一方、現行新工場は真駒内129-3・2025年7月竣工、https://komaoka-ht.jp/about/ に別JVを記載。**旧と新は別世代**。旧のプラントメーカーへの誤転用禁止。 |
| moe_0110060 | 利尻郡ごみ焼却処理場 | 環境省旧台帳 https://www.env.go.jp/recycle/dioxin/ippan/html/hokkai.html は1991年2月運転開始・15t/日・機械化バッチを掲載。当初建設者の直接証明なし。 |
| moe_0110061 | 南後志清掃センター | 同環境省旧台帳および https://www.env.go.jp/content/900533123.pdf は1994年6月運転開始・18t/日・機械化バッチ。施工者不明。 |
| moe_0110062 | しらかば清掃センター | 環境省旧台帳で1993年6月開始・37.5t/日×2炉・全連続。施工者不明。 |
| moe_0110065 | 北十勝2町環境衛生処理組合ごみ処理施設 | 環境省旧台帳に1997年4月運転開始・15t/日・機械化バッチ1炉。施工者不明。 |
| moe_0210008 | 南部清掃工場 | 弘前地区環境整備事務組合 https://souma.city.hirosaki.aomori.jp/kankyoseibi/shisetsu/nanbu.html に1992年3月竣工・140t/日。組合沿革 https://www.city.hirosaki.aomori.jp/kankyoseibi/shoukai/index.html に1989年10月着工。施工者名未発見。 |
| moe_0210009 | 黒石地区環境管理センター | 黒石市 https://www.city.kuroishi.aomori.jp/kurashi/kurashi/gomi_recycle/gomihenkou202604.html に2026年3月閉鎖・4月広域移行。別の黒石市年表 https://www.city.kuroishi.aomori.jp/shisei/about/city_event/syouwa_event.html の1983年完成施設と2024年度台帳の1988年度施設が同じ建設世代か**未確定**。混同注意。 |
| moe_1010017 | 玉村町クリーンセンター | 玉村町 https://www.town.tamamura.lg.jp/docs/2017020700030/ 1990年建設、1995年に24時間運転改良。https://www.nikoukei.co.jp/news/detail/7858 の2001年タクマ受注は**ダイオキシン対策改造**で、当初施工ではない。 |
| moe_1010013 | 富岡市清掃センター | 富岡市 https://www.city.tomioka.lg.jp/www/contents/1000000000757/index.html に112.5t/日・2炉、施工JFEエンジニアリングを明記。既にbatch73でbuilderへの補完スクリプトあり、**新規登録として二重加算しない**。 |
| moe_0110064 | クリーンおしま | 環境省 https://www.env.go.jp/content/900533123.pdf に2003年4月開始・63t/日×2炉。既存builderタクマあり。再確認のみで新規登録扱いしない。 |

本セットの確認：調査10施設、追加施工会社0、未確定施工会社を推測登録0、参考一次資料URL 9以上（上記）。施設世代の混同注意2件。GitHub index.htmlとUIは変更せず。

## 2026-10-23 batch75: 青森県10施設（一次資料照合・新規builder 0）
以下10施設を一括調査。建設当初の施工者を直接確認できない場合、推測登録しない。既登録会社の再確認は新規件数に算入しない。
|ID|施設|調査結果・公式根拠|
|---|---|---|
|moe_0210010|西部クリーンセンター|広域連合公式 https://www.tsgren.jp/jimu/generalwaste/jimu_shisetsu.html ：1986年11月竣工、75t×2炉、2003年3月改修、2021年3月基幹改良。当初施工者未確認。|
|moe_0210012|三戸地区クリーンセンター|組合公式 https://www.sannohekankyou.jp/aboutus/enkaku/ ：1995年2月稼働開始、旧1977年清掃センターと別世代。組合 https://www.sannohekankyou.jp/sisetsu/sodaigomi/ のユニチカは粗大ごみ処理施設の設計指導欄であり、焼却施設の当初施工会社として転記しない。|
|moe_0210011|エコクリーンアフイ|青森県施設表に2000年・44t/日・1炉（県台帳資料）あり。当初施工者の一次資料は未確認。|
|moe_0210013|八戸清掃工場第一工場|環境省 https://www.env.go.jp/recycle/dioxin/ippan/html/aomori.html ：1995年9月開始の150t/日×2炉。第二工場（1980年）と区別。施工者未確認。|
|moe_0210016|十和田ごみ焼却施設|組合公式 https://www.towada-kouiki.jp/soshiki_shisetu.html ：1985年3月竣工、2002年6月改造、150t/日。改造工事施工者は当初施工者に転用しない。|
|moe_0210017|クリーン・ペア・はまなす|当初1998年度・52t/日の台帳世代に一致する施工者の直接一次資料は未確認。|
|moe_0210007|弘前地区環境整備センター|組合 https://souma.city.hirosaki.aomori.jp/kankyoseibi/shisetsu/seibi.html ：2003年3月竣工・246t/日。清水建設公式 https://www.shimz.co.jp/works/jp_env_200303_hirosaki.html は「設計・監理 清水建設」と記載するため、本体焼却プラント施工者とは断定しない。|
|moe_0210006|中部上北清掃センター|2000年度・60t/日の台帳と照合する当初施工の直接一次資料は今回未発見。既登録builderがある場合は保護。|
|moe_0210005|外ヶ浜町ごみ処理施設|外ヶ浜町公式施設計画 https://www.town.sotogahama.lg.jp/gyosei/gyouzaisei/files/kobetsushisetsukeikaku.pdf では施設「グリーンハート外ヶ浜」2009年建築。設計施工の協和エクシオは既往調査登録あり、二重計上禁止。|
|moe_0210001|青森市清掃工場|台帳2015年度・300t/日。既登録builderを保護し、今回新規登録に算入しない。|
結果：10施設調査／新規施工会社登録0／当初施工会社を今回新たに確定した施設0／UI・index.html変更なし。次回は未確定施設に対する旧建設契約書、竣工記念誌、設備メーカー公式施工実績を優先。

## batch74 青森10施設（2026-10-23）
調査対象：moe_0210013,moe_0210007,moe_0210016,moe_0210011,moe_0210017,moe_0210006,moe_0210005,moe_0210001,moe_0210010,moe_0210008（10施設）。
- 八戸第一工場: 組合公式 https://www.city.hachinohe.aomori.jp/section/koiki/seisou/seisou.html に「設計施工 荏原製作所」、1996年7月竣工、300t/日。builder空欄時のみ追加するbatch74記録。
- クリーン・ペア・はまなす: 組合公式 https://hokubukamikita.org/hamanasu/guide に「設計・製作・施工 川崎重工業」、1998年3月竣工、52t/日。builder空欄時のみ追加するbatch74記録。
- 弘前地区環境整備センター: https://souma.city.hirosaki.aomori.jp/kankyoseibi/shisetsu/seibi.html は2003年竣工・246t/日を確認。清水建設資料は設計監理でプラント建設施工と混同しない。
- 十和田焼却施設: https://www.towada-kouiki.jp/soshiki_shisetu.html は1985年当初竣工・2002年改造。2022年以後と処理能力表記差あり。施工会社未確認。
- エコクリーンアフイ: 当初施工会社の直接根拠未取得。
- 中部上北清掃センター: https://www.env.go.jp/recycle/dioxin/ippan/html/aomori.html は2000年開始・30t×2炉。同ページは施工会社の根拠ではない。
- 外ヶ浜町施設、青森市清掃工場: 既存登録は保護。新規登録件数に計上しない。
- 西部クリーンセンター: https://www.tsgren.jp/jimu/generalwaste/jimu_shisetsu.html 1986年11月竣工・150t/日、2003年改修・2021年基幹改良。施工会社未確認。
- 南部清掃工場: https://souma.city.hirosaki.aomori.jp/kankyoseibi/shisetsu/nanbu.html 1992年3月竣工・140t/日。施工会社未確認。
実際の新規登録数はbuilder実行後の空欄→非空欄を照合して確定すること。batch74処理は空欄時のみ書込、既存を上書きしない。UI変更なし。

## 2026-10-23 構造分離・UI変更（明示指示による）
- ユーザーが構造改善とUI変更を明示許可。旧「UI変更しない」は今回の指示で更新。
- index.html 2,649,697 bytes → 約9KB。既存47ブロックをassetsに内容完全一致・順序維持で分離。施設データの原本はassets/script-01.js。今後巨大HTMLをAPI取得・会話へ印字しない。
- UI: 背景・余白・配色・操作ボタンを調整。詳細条件を初期折りたたみ。既存検索・ソート・ダッシュボード機能は維持。
- 右下に「↻ 最新版」。スマホは公開サイトをSafariで開いて押す。GitHubへの更新はChatGPTで指示→コミット→Pages反映を待つ。ボタンは公開済み最新版の読込用であり、GitHubへの送信機能ではない。
- assets変更後に `python scripts/version_assets.py` を実行。参照URLに内容ハッシュを付加し古いCSS/JSキャッシュを回避。
- 検証: 既存47ブロック完全一致・JS構文OK。jsdom実行で全878施設レコードのJSONが変更前と完全一致、実行エラー0、検索候補表示、ランキング→施設詳細→戻るで元ランキング保持、詳細初期折りたたみ・最新版ボタン存在を確認。
- Chromiumダウンロードが失敗し、ピクセル表示の実ブラウザ確認は未実施。jsdomはレイアウト検証を代替しない。
- 実行時全施設878件、moe_から始まるID826件（builder有621、空205）。これは旧845施設台帳の単純件数とは一致しない。ID統合等の対応照合前に845母数の進捗率へ換算しない。
- 新規調査はresearch/batch76.md（未登録10件、施工会社の新規確定0、builder更新0）。根拠URL・不採用理由を保存。
- 今後の調査追記はresearch/batchNN.mdと小さなassets/builder-batchNN.jsに分離。index.htmlへ巨大データを再埋込しない。
