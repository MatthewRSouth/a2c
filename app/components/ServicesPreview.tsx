import Link from "next/link";
import DiagonalStripe from "./DiagonalStripe";

type ServiceVariant = "coral" | "gold" | "blue-light" | "beige";

const services: {
  num: string;
  en: string;
  name: string;
  slug: string;
  desc: string;
  bullets: string[];
  variant: ServiceVariant;
}[] = [
  {
    num: "01",
    en: "MAINTENANCE",
    name: "メンテナンス",
    slug: "maintenance",
    desc: "排水管の詰まりを未然に防ぎ、水漏れの予防をして大切な住宅を守ります。高圧洗浄による加工で、つまり・臭気・漏水・床下調査なども丁寧に行います。",
    bullets: ["排水管の高圧洗浄", "詰まり予防", "定期点検", "貯水槽検査"],
    variant: "blue-light",
  },
  {
    num: "02",
    en: "HEARTFELT PLANNING",
    name: "真心プランニング",
    slug: "planning",
    desc: "工事施工のみでなく、お客様が「どんな未来の暮らしを手に入れたいか」を一緒に見つけ、その望み・理想を形にしていく事を大切にご提案します。",
    bullets: ["ヒアリング", "プラン提案", "未来の暮らし設計", "お見積もり"],
    variant: "gold",
  },
  {
    num: "03",
    en: "RENOVATION",
    name: "リフォーム",
    slug: "renovation",
    desc: "キッチン・お風呂・トイレ・洗面所のリフォームを提供します。設備を新しくするだけでなく、ご要望・ご事情に合わせた最適なプランをご提案します。",
    bullets: ["キッチン", "浴室", "洗面所", "トイレ"],
    variant: "coral",
  },
  {
    num: "04",
    en: "REPAIR",
    name: "修理",
    slug: "repair",
    desc: "小さな不具合や老化も、修繕する事で長く使い続けられます。お客様の暮らしや思い出を大切にしながら最適な修繕方法をご提案します。",
    bullets: ["蛇口・水栓", "パッキン交換", "排水管修繕", "緊急対応"],
    variant: "beige",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <p className="text-[11px] tracking-[0.18em] text-sand mb-4">— SERVICES —</p>
        <h2 className="text-[36px] font-normal text-navy mb-12">サービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.slug}
              className="bg-white overflow-hidden flex flex-col md:flex-row"
            >
              {/* Text */}
              <div className="flex-1 p-6 lg:p-8 flex flex-col min-w-0">
                <p className="text-[10px] tracking-widest text-sand mb-3">
                  {s.num} / 04 — {s.en}
                </p>
                <h3 className="text-[22px] font-medium text-navy mb-3">{s.name}</h3>
                <p className="text-[13px] text-ash leading-relaxed mb-4 flex-1">
                  {s.desc}
                </p>
                <ul className="grid grid-cols-2 gap-y-1.5 mb-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-1.5 text-[12px] text-ash">
                      <span className="w-1 h-1 rounded-full bg-coral shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-[12px] text-navy hover:text-coral transition-colors tracking-wide"
                >
                  — {s.en}
                </Link>
              </div>
              {/* Stripe */}
              <DiagonalStripe
                variant={s.variant}
                className="w-full h-36 md:w-[160px] md:h-auto shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
