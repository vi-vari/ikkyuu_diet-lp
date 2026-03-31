/*
 * 美容整体サロン vivari LP
 * Design: Figma 1920w light - pixel-perfect reproduction
 * Colors: #f39f88 (accent/heading), #4b4f58 (subheading), #736357 (body), #3a3a3a (dark text)
 * CTA LINE: https://lin.ee/XoPtWqp (QR code page)
 * CTA HPB: https://beauty.hotpepper.jp/kr/slnH000719702/ (iframe page)
 * 口コミ: https://beauty.hotpepper.jp/kr/slnH000719702/review/ (accordion)
 * Map address: 兵庫県西宮市門戸東町２－４ファミリアル門戸103
 */

import { useState, useRef } from "react";
import { MapView } from "@/components/Map";


const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410806327/JA5n7xr5WMnAweWKrFvH5o";

const ASSETS: Record<string, string> = {
  "39-5":   `${CDN}/39-5_f3b0b771.webp`,
  "39-20":  `${CDN}/39-20_eabab979.webp`,
  "39-22":  `${CDN}/39-22_4a4060e8.webp`,
  "39-24":  `${CDN}/39-24_5c40b417.webp`,
  "39-26":  `${CDN}/39-26_cc73bb24.webp`,
  "39-28":  `${CDN}/39-28_be996e34.webp`,
  "39-30":  `${CDN}/39-30_3cc769c9.webp`,
  "39-32":  `${CDN}/39-32_4213ae40.webp`,
  // Voice_S SNS口コミ写真グリッド (39-42〜64 + 64-xxx)
  "39-42":  `${CDN}/39-42_5a1e8d38.webp`,
  "39-48":  `${CDN}/39-48_089e74c3.webp`,
  "39-50":  `${CDN}/39-50_cc5e977d.webp`,
  "39-52":  `${CDN}/39-52_1ccad18b.webp`,
  "39-54":  `${CDN}/39-54_8759d2b9.webp`,
  "39-56":  `${CDN}/39-56_5d7bd820.webp`,
  "39-58":  `${CDN}/39-58_dea3246e.webp`,
  "39-60":  `${CDN}/39-60_9f5cc139.webp`,
  "39-62":  `${CDN}/39-62_682fafd3.webp`,
  "39-64":  `${CDN}/39-64_e7f290b3.webp`,
  // 新しい写真（ユーザー提供）
  "photo1": `${CDN}/photo1_2bfef1e8.png`,
  "photo2": `${CDN}/photo2_3aa4469e.png`,
  "photo3": `${CDN}/photo3_e81c79a5.png`,
  "photo6": `${CDN}/photo6_ec31b51d.png`,
  "photo7": `${CDN}/photo7_5a4d141c.png`,
  "photo8": `${CDN}/photo8_286888a1.png`,
  "photo9": `${CDN}/photo9_194fa7db.png`,
  // ２ショット写真（row2, col4 = 右端真ん中）
  "photo2shot": `${CDN}/２ショット_f3f1a6ef.png`,
  // 新しい２ショット写真（row2, col4に使用）
  "photo2shot2": `https://d2xsxph8kpxj0f.cloudfront.net/310519663410806327/JA5n7xr5WMnAweWKrFvH5o/２ショット_6c446dbb.png`,
  // こだわりセクション
  "39-106": `${CDN}/39-106_483b2125.webp`,
  "39-111": `${CDN}/39-111_4a617ff1.webp`,
  "39-115": `${CDN}/39-115_7370db64.webp`,
  // スタッフ写真
  "39-128": `${CDN}/39-128_b0131fdb.webp`,
  // 店舗情報
  "39-181": `${CDN}/39-181_d53581e8.webp`,
  // BOOK特典
  "39-235": `${CDN}/39-235_83ee64cf.webp`,
  // 当店のダイエットが成功する理由
  "39-251": `${CDN}/39-251_95bc8772.webp`,
  "39-256": `${CDN}/39-256_3c669ddf.webp`,
  "39-261": `${CDN}/39-261_8acc2bf5.webp`,
  "39-262": `${CDN}/39-262_a668dfeb.webp`,
  "39-268": `${CDN}/39-268_7c561a2a.webp`,
  "39-269": `${CDN}/39-269_ecb89d04.webp`,
  "39-270": `${CDN}/39-270_e6580ca7.webp`,
  "39-271": `${CDN}/39-271_7f8ced00.webp`,
  // スタッフ顔写真
  "44-289": `${CDN}/44-289_dab1e574.webp`,  // 山崎スタッフ
  "44-290": `${CDN}/44-290_ba5e19f8.webp`,  // 院長池本
  // 施術写真（こだわりセクション用）
  "44-285": `${CDN}/44-285_2b55f5a9.webp`,
  "44-286": `${CDN}/44-286_e6c147c6.webp`,
  "44-287": `${CDN}/44-287_bab70f28.webp`,
  "44-288": `${CDN}/44-288_f4a80c15.webp`,
  "44-291": `${CDN}/44-291_fc2f52cd.webp`,
  "44-292": `${CDN}/44-292_c48631b2.webp`,
  // 書籍
  "44-282": `${CDN}/44-282_019809a9.webp`,
  // 国家資格
  "62-3":   `${CDN}/62-3_5da58225.webp`,
  // 64-xxx SNS口コミ写真
  "64-16":  `${CDN}/64-16_dbc7426a.webp`,
  "64-17":  `${CDN}/64-17_484dc6f0.webp`,
  "64-18":  `${CDN}/64-18_071344e8.webp`,
  "64-19":  `${CDN}/64-19_779bb574.webp`,
  "64-20":  `${CDN}/64-20_53f425d3.webp`,
  "64-21":  `${CDN}/64-21_31851795.webp`,
  "64-22":  `${CDN}/64-22_9318bc7d.webp`,
  "64-23":  `${CDN}/64-23_22998868.webp`,
  "64-24":  `${CDN}/64-24_4ea2e2cc.webp`,
  "64-25":  `${CDN}/64-25_73392cb7.webp`,
  "64-26":  `${CDN}/64-26_e231e944.webp`,
  "64-27":  `${CDN}/64-27_d841e149.webp`,
  // LINE QRコード
  "line-qr": `${CDN}/line-qr_72289f0c.png`,
};

const LINE_URL = "https://lin.ee/XoPtWqp";
const HPB_URL = "https://beauty.hotpepper.jp/kr/slnH000719702/";
const IKKYUU_URL = "https://beauty.hotpepper.jp/kr/slnH000719702/";
const REVIEW_URL = "https://beauty.hotpepper.jp/kr/slnH000719702/review/";

// Page types
type PageType = "home" | "line" | "hpb";

// CTA Block component (reused multiple times)
function CTABlock({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="w-full py-8 flex flex-col items-center gap-2">
      <button
        onClick={() => onNavigate("line")}
        className="flex items-center justify-center gap-3 bg-[#4dce6e] text-white font-semibold text-xl rounded-[3px] px-8 py-3 w-full max-w-[321px] hover:opacity-90 transition-opacity"
      >
        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>
        LINE講座をスタート
      </button>
      <p className="text-[#3a3a3a] text-[15px] text-center">1週間で痩せ体質を作る無料講座をプレゼント中🎁</p>
      <a
        href={HPB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#bf1391] text-white font-semibold text-xl rounded-[3px] px-8 py-3 w-full max-w-[392px] hover:opacity-90 transition-opacity"
      >
        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
        </svg>
        ホットペッパーで予約する
      </a>
      <p className="text-[#3a3a3a] text-sm text-center">今すぐ予約したい方はこちらからどうぞ</p>
      <p className="text-[#3a3a3a] text-sm text-center">ダイエットカウンセリングが初回限定500円🎉</p>
    </div>
  );
}

// Section heading component
function SectionHeading({ title, size = "28" }: { title: string; size?: string }) {
  return (
    <h2 style={{ fontSize: `${size}px`, color: "#f39f88" }} className="font-bold leading-tight mb-2 whitespace-pre-line">{title}</h2>
  );
}

// Sub heading component
function SubHeading({ title }: { title: string }) {
  return (
    <h3 className="text-[#4b4f58] text-lg font-semibold mb-3">{title}</h3>
  );
}

// Body text component
function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#736357] text-base font-normal leading-relaxed">{children}</p>
  );
}

// List item with bullet
function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 py-1">
      <span className="text-[#f39f88] text-xl mt-0.5 flex-shrink-0">✓</span>
      <span className="text-[#736357] text-base">{children}</span>
    </div>
  );
}

// Divider
function SectionDivider() {
  return <div className="w-full border-t border-neutral-200 mb-6 mt-2" />;
}

// Voice_S SNS口コミ写真グリッド
// 行1: photo1, photo2, photo3, photo6
// 行2: photo7, photo8, photo9, photo2shot2(新しい２ショット=右端真ん中)
// 行3: 64-24, 64-16, photo2shot(旧２ショット), 64-18
const voiceImages = [
  // 行1 (左上から順に新しい写真)
  { id: "photo1", alt: "施術写真1" },
  { id: "photo2", alt: "施術写真2" },
  { id: "photo3", alt: "施術写真3" },
  { id: "photo6", alt: "施術写真4" },
  // 行2
  { id: "photo7", alt: "施術写真5" },
  { id: "photo8", alt: "施術写真6" },
  { id: "photo9", alt: "施術写真7" },
  { id: "photo2shot2", alt: "２ショット写真" },
  // 行3
  { id: "64-24", alt: "口コミ写真9" },
  { id: "64-16", alt: "口コミ写真10" },
  { id: "photo2shot", alt: "２ショット写真（旧）" },
  { id: "64-18", alt: "口コミ写真12" },
];

// BA images (ビフォーアフター)
const baImages = [
  { id: "39-20", alt: "50代② ビフォーアフター -10.8kg" },
  { id: "39-22", alt: "40代 ビフォーアフター -8.8kg" },
  { id: "39-24", alt: "40代③ ビフォーアフター -8.9kg" },
  { id: "39-26", alt: "30代② ビフォーアフター -10kg" },
  { id: "39-28", alt: "50代 ビフォーアフター -7.5kg" },
  { id: "39-30", alt: "50代② ビフォーアフター -14.9kg" },
  { id: "39-32", alt: "40代② ビフォーアフター -8.1kg" },
];

// Home page component
function HomePage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [reviewOpen, setReviewOpen] = useState(false);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    const address = "兵庫県西宮市門戸東町２－４ファミリアル門戸103";
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);
        map.setZoom(16);
        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: location,
          title: "美容整体サロン vivari",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <div className="max-w-[700px] mx-auto">

        {/* ===== FV (ファーストビュー) ===== */}
        <section className="w-full">
          <img
            src={ASSETS["39-5"]}
            alt="美容整体サロン vivari ファーストビュー"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* ===== CTA 1 ===== */}
        <div className="px-4">
          <CTABlock onNavigate={onNavigate} />
        </div>

        {/* ===== B/A実績 ===== */}
        <section className="w-full px-4 py-4">
          <div className="flex flex-col gap-8">
            {baImages.map((img) => (
              <div key={img.id} className="w-full">
                <img
                  src={ASSETS[img.id]}
                  alt={img.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONCEPT ===== */}
        <section className="w-full px-4 py-8">
          <SectionDivider />
          <SectionHeading title={"CONCEPT\n我慢しない、無理しないで自分らしく痩せる"} />
          <div className="mt-4 space-y-4">
            <BodyText>
              本当はもう少しカラダを引き締めたい。理想のボディラインがある。でも…「筋トレはきついし、甘いものも食べたいし…」という女性の方へ。
            </BodyText>
            <BodyText>
              当店の我慢しないダイエットはいかがですか？「筋トレなし、無理な食事制限なし」なのにストレスなく痩せていく。その後もリバウンドしにくいカラダをずーっとキープしていく。
            </BodyText>
            <BodyText>
              国家資格である柔道整復師。プロの資格を所有しているので、我慢しないダイエットが実現可能です。
            </BodyText>
          </div>
        </section>

        {/* ===== Voice_S (SNS口コミ写真グリッド) ===== */}
        <section className="w-full px-4 py-4">
          <div className="grid grid-cols-4 gap-0.5">
            {voiceImages.map((img) => (
              <div key={img.id} className="aspect-square overflow-hidden">
                <img
                  src={ASSETS[img.id]}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-3">
            <ListItem>30代〜60代まで多くの女性がご利用しています</ListItem>
          </div>
        </section>

        {/* ===== 口コミ ===== */}
        <section className="w-full px-4 py-8">
          <SectionDivider />
          <SectionHeading title="口コミ" />
          <SubHeading title="ホットペッパーの口コミをご覧ください" />
          <BodyText>当店は整体サロンです。ホットペッパーで沢山の口コミを頂いていますのでご確認ください。</BodyText>

          {/* 「口コミを見る」ボタン - アコーディオン展開 */}
          <div className="mt-5 flex justify-center">
            <button
              onClick={() => setReviewOpen(!reviewOpen)}
              className="inline-flex items-center gap-2 bg-white border border-[#acacac] rounded-lg px-10 py-2 text-[#898989] text-[17px] font-bold hover:bg-gray-50 transition-colors"
            >
              {reviewOpen ? "口コミを閉じる ▲" : "口コミを見る ▼"}
            </button>
          </div>

          {/* アコーディオン展開エリア */}
          {reviewOpen && (
            <div className="mt-4 w-full rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
              <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b border-neutral-200">
                <span className="text-sm text-[#736357]">ホットペッパービューティー 口コミページ</span>
                <a
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#bf1391] hover:underline"
                >
                  別タブで開く ↗
                </a>
              </div>
              <iframe
                src={REVIEW_URL}
                title="ホットペッパービューティー 口コミ"
                className="w-full"
                style={{ height: "600px", border: "none" }}
                loading="lazy"
              />
            </div>
          )}
        </section>

        {/* ===== ３つのこだわり ===== */}
        <section className="w-full px-4 py-8">
          <SectionDivider />
          <SectionHeading title="３つのこだわり" />

          <div className="mb-8 mt-4">
            <SubHeading title="01：個室のプライベート空間" />
            <img
              src={ASSETS["39-106"]}
              alt="個室のプライベート空間"
              className="w-full h-auto object-cover rounded mb-3"
            />
            <BodyText>
              プライベート空間になります。多くの場合、お客様ひとりずつでの接遇です。周りを気にせずに、なんでもご相談ください。
            </BodyText>
          </div>

          <div className="mb-8">
            <SubHeading title="02：おひとりおひとりに合わせた無理のないプランをご提案します" />
            <img
              src={ASSETS["39-111"]}
              alt="個別プランのご提案"
              className="w-full h-auto object-cover rounded mb-3"
            />
            <BodyText>
              カウンセリングではお身体の状態を聞かせて頂き、お悩みに沿って無理なく痩せるプランをご提案できます。
            </BodyText>
          </div>

          <div className="mb-8">
            <SubHeading title="03：ダイエットだけじゃない！全身美容整体も施します" />
            <img
              src={ASSETS["39-115"]}
              alt="全身美容整体"
              className="w-full h-auto object-cover rounded mb-3"
            />
            <BodyText>
              ダイエットはもちろんのこと、ストレートネック、反り腰、猫背、産後の骨盤矯正、小顔調整など、美しい姿勢改善もまるごと全部ご提供しています。痛みや疲れが取れて、痩せて見た目が良くなるって良いとは思いませんか？
            </BodyText>
          </div>
        </section>

        {/* ===== スタッフ紹介 ===== */}
        <section className="w-full px-4 py-8">
          <SectionDivider />
          <SectionHeading title="スタッフ紹介" />

          {/* スタッフ：安東 */}
          <div className="mb-10 mt-4">
            <SubHeading title="スタッフ：安東" />
            <div className="flex justify-center my-5">
              <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-[#f39f88]/20">
                <img
                  src={ASSETS["39-128"]}
                  alt="スタッフ 安東"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <ListItem>21歳</ListItem>
              <ListItem>柔道整復師</ListItem>
            </div>
            <div className="mt-3">
              <BodyText>
                「女性がキレイで自分らしくなれる美容整体」をご提供します。<br />
                お子様連れでもご安心いただけます。女性特有のお悩みをお気軽にご相談ください。<br />
                優しい施術とカウンセリングが、お客様から喜ばれております。
              </BodyText>
            </div>
          </div>

          <SectionDivider />

          {/* スタッフ：山崎 雅弘 */}
          <div className="mb-10">
            <SubHeading title="スタッフ：山崎　雅弘" />
            <div className="flex justify-center my-5">
              <div className="w-44 h-44 rounded-full overflow-hidden bg-[#d9d9d9]">
                <img
                  src={ASSETS["44-289"]}
                  alt="スタッフ 山崎雅弘"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <ListItem>キャリア9年</ListItem>
              <ListItem>国家資格：柔道整復師 所有</ListItem>
            </div>
            <div className="mt-3">
              <BodyText>
                整体サロンを運営していくなかで、女性の「痩せたい！でも無理したくない！」というリクエストにお答えしてきました。きっとあなたの願望も実現できると思います。ぜひ一度、「初回体験セッション」で当店の我慢しないダイエットコースがどのようなものか？を体験してください。
              </BodyText>
            </div>
          </div>

          <SectionDivider />

          {/* 院長：池本 有佑 */}
          <div className="mb-10">
            <SubHeading title="院長：池本　有佑" />
            <div className="flex justify-center my-5">
              <div className="w-44 h-44 rounded-full overflow-hidden bg-[#d9d9d9]">
                <img
                  src={ASSETS["44-290"]}
                  alt="院長 池本有佑"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <ListItem>キャリア20年</ListItem>
              <ListItem>国家資格：柔道整復師・はり / きゅう師所有</ListItem>
            </div>
            <div className="mt-3">
              <BodyText>
                「練習と同じくらいメンテナンスが大切」を理念に、皆様の健康をサポートしています。<br />
                身体が変わっていくプロセスを一緒に楽しみながら、理想の自分を手に入れましょう。<br />
                お客様一人ひとりのお悩みに寄り添い、今よりさらに良くなるためのお手伝いをさせていただきます。どうぞお気軽にご相談ください。
              </BodyText>
            </div>
          </div>
        </section>

        {/* ===== 店舗情報 ===== */}
        <section className="w-full px-4 py-8">
          <SectionDivider />
          <h2 className="text-[#f39f88] text-[32px] font-semibold mb-4">店舗情報</h2>
          <img
            src={ASSETS["39-181"]}
            alt="店舗外観"
            className="w-full h-auto object-cover rounded mb-5"
          />
          <div className="space-y-2 mb-6">
            <ListItem>営業時間：月～金：8:30~12:30  15:00~19:30 / 土：8:30~12:30</ListItem>
            <ListItem>定休日：土曜午後・日曜・祝日</ListItem>
            <ListItem>住所：兵庫県西宮市門戸東町２－４ファミリアル門戸１０３</ListItem>
            <ListItem>現金・クレジットカード・PayPay・その他QR決済</ListItem>
          </div>

          {/* Google Map - インタラクティブ（Figmaの地図画像を置き換え） */}
          <div className="w-full rounded overflow-hidden shadow-md">
            <MapView
              className="w-full h-[432px]"
              initialCenter={{ lat: 34.7371, lng: 135.3615 }}
              initialZoom={16}
              onMapReady={handleMapReady}
            />
          </div>
        </section>

        {/* ===== BOOK特典 1 ===== */}
        <section className="w-full px-4 py-6 flex justify-center">
          <img
            src={ASSETS["44-282"]}
            alt="BOOK特典 1週間で痩せ体質になるダイエット"
            className="w-[280px] h-auto object-contain"
            style={{ transform: "rotate(3deg)" }}
          />
        </section>

        {/* ===== CTA 2 ===== */}
        <div className="px-4">
          <CTABlock onNavigate={onNavigate} />
        </div>

        {/* ===== 当店のダイエットが成功する理由 ===== */}
        <section className="w-full px-4 py-8">
          <h2 className="text-[#f39f88] text-[32px] font-semibold mb-6">当店のダイエットが成功する理由</h2>

          {/* 理由１ - 枠線付き */}
          <div className="mb-6 rounded border-2 border-neutral-200 overflow-hidden">
            <div className="px-5 pt-6 pb-2">
              <p className="text-[#f39f88] text-[26px] font-semibold">理由１：太った理由を徹底分析</p>
            </div>
            <div className="flex justify-center px-4 py-3">
              <img src={ASSETS["39-251"]} alt="理由１カウンセリング写真" className="w-[400px] max-w-full h-auto object-cover" />
            </div>
            <div className="px-5 pb-6">
              <BodyText>肥満DNA検査による自分のスーパーフード知ることができ、分子栄養学を用いて体質を考慮した効率的なダイエットメニューを作成します。</BodyText>
            </div>
          </div>

          {/* 理由２ - 枠線付き */}
          <div className="mb-6 rounded border-2 border-neutral-200 overflow-hidden">
            <div className="px-5 pt-6 pb-2">
              <p className="text-[#f39f88] text-[26px] font-semibold">理由２：痩身整体で生涯太りにくい体質作り</p>
            </div>
            <div className="flex justify-center px-4 py-3">
              <img src={ASSETS["39-256"]} alt="理由２施術写真" className="w-[400px] max-w-full h-auto object-cover" />
            </div>
            <div className="px-5 pb-6">
              <BodyText>主に姿勢矯正と骨盤矯正を行なって、痩せやすい体づくりをしていきます。</BodyText>
            </div>
          </div>

          {/* 理由３ - 枠線付き */}
          <div className="mb-6 rounded border-2 border-neutral-200 overflow-hidden">
            <div className="px-5 pt-6 pb-2">
              <p className="text-[#f39f88] text-[26px] font-semibold">理由３：マンツーマン食事サポート</p>
            </div>
            <div className="flex justify-center px-4 py-3">
              <img src={ASSETS["39-261"]} alt="理由３食事写真" className="w-[400px] max-w-full h-auto object-cover" />
            </div>
            <div className="px-5 pb-6">
              <BodyText>LINEでサポート！楽しく続く食習慣を形成していきます。</BodyText>
            </div>
          </div>

          {/* 理由４ - 枠線付き */}
          <div className="mb-6 rounded border-2 border-neutral-200 overflow-hidden">
            <div className="px-5 pt-6 pb-2">
              <p className="text-[#f39f88] text-[26px] font-semibold">理由４：国家資格の柔道整復師を所有。だから安心！</p>
            </div>
            <div className="flex justify-center px-4 py-3">
              <img src={ASSETS["62-3"]} alt="理由４国家資格" className="w-[400px] max-w-full h-auto object-cover" />
            </div>
            <div className="px-5 pb-6">
              <BodyText>体の構造を知り尽くした、プロの整体師の証である「国家資格：柔道整復師」。<br />安心してダイエットを任せることができます。</BodyText>
            </div>
          </div>
        </section>

        {/* ===== CTA 3 ===== */}
        <div className="px-4">
          <CTABlock onNavigate={onNavigate} />
        </div>

        {/* Footer */}
        <footer className="w-full px-4 py-8 border-t border-gray-200 text-center">
          <p className="text-[#736357] text-sm">© 2026 美容整体サロン vivari. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

// LINE QRコードページ
function LinePage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダーバー */}
      <div className="w-full bg-[#4dce6e] px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => onNavigate("home")}
          className="text-white font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </button>
        <span className="text-white font-bold text-lg">LINE友だち追加</span>
      </div>

      <div className="max-w-[480px] mx-auto w-full flex-1 px-6 py-10 flex flex-col items-center">
        {/* LINE ロゴ＆タイトル */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-[#4dce6e] rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
          </div>
          <div>
            <p className="text-[#3a3a3a] font-bold text-xl">美容整体サロン vivari</p>
            <p className="text-[#736357] text-sm">LINE公式アカウント</p>
          </div>
        </div>

        <p className="text-[#f39f88] text-2xl font-bold mt-6 mb-2 text-center">
          1週間で痩せ体質を作る<br />無料講座をプレゼント中🎁
        </p>
        <p className="text-[#736357] text-base text-center mb-8">
          QRコードをスキャンするか、<br />下のボタンからLINEを開いてください
        </p>

        {/* QRコード */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-neutral-100">
          <img
            src={ASSETS["line-qr"]}
            alt="LINE QRコード"
            className="w-56 h-56 object-contain"
          />
        </div>

        {/* LINEで開くボタン */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#4dce6e] text-white font-bold text-lg rounded-xl px-10 py-4 w-full max-w-[320px] hover:opacity-90 transition-opacity shadow-md"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          LINEで友だち追加
        </a>

        <p className="text-[#736357] text-sm mt-4 text-center">
          ※ LINEアプリが開きます
        </p>

        {/* 戻るボタン */}
        <button
          onClick={() => onNavigate("home")}
          className="mt-8 text-[#736357] text-sm hover:underline"
        >
          ← ランディングページに戻る
        </button>
      </div>
    </div>
  );
}

// HPBページ（ホットペッパービューティー予約）
function HpbPage({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダーバー */}
      <div className="w-full bg-[#bf1391] px-4 py-3 flex items-center gap-3 flex-shrink-0">
        <button
          onClick={() => onNavigate("home")}
          className="text-white font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </button>
        <span className="text-white font-bold text-lg">ホットペッパービューティーで予約</span>
        <a
          href={HPB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-white/80 text-xs hover:text-white flex items-center gap-1"
        >
          別タブで開く
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* iFrame */}
      <iframe
        src={HPB_URL}
        title="ホットペッパービューティー 予約"
        className="w-full flex-1"
        style={{ border: "none", minHeight: "calc(100vh - 52px)" }}
        loading="lazy"
      />
    </div>
  );
}

// Main App component
export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
      {currentPage === "line" && <LinePage onNavigate={handleNavigate} />}
      {currentPage === "hpb" && <HpbPage onNavigate={handleNavigate} />}
    </>
  );
}
