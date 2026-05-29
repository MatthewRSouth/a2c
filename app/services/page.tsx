import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import DiagonalStripe from "../components/DiagonalStripe";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "A2C Pipemaster Osakaのサービス一覧。メンテナンス・真心プランニング・リフォーム・修理。水まわりのことはまるごとお任せください。",
};

type ServiceVariant = "ember" | "sun" | "sky" | "paper";

const services: {
  num: string;
  en: string;
  slug: string;
  name: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  variant: ServiceVariant;
  bg: string;
}[] = [
  {
    num: "01",
    en: "Maintenance",
    slug: "maintenance",
    name: "メンテナンス",
    subtitle: "定期メンテナンス",
    desc: "排水管の詰まりを未然に防ぎ、水漏れの予防をして大切な住宅を守ります。高圧洗浄による加工で、つまり・臭気・漏水・床下調査なども丁寧に行います。",
    bullets: ["排水管の高圧洗浄", "詰まり予防", "定期点検", "貯水槽検査"],
    variant: "sky",
    bg: "bg-cream",
  },
  {
    num: "02",
    en: "Heartfelt Planning",
    slug: "planning",
    name: "真心プランニング",
    subtitle: "暮らしの未来をデザイン",
    desc: "工事施工のみでなく、お客様が「どんな未来の暮らしを手に入れたいか」を一緒に見つけ、その望み・理想を形にしていく事を大切にご提案します。",
    bullets: ["ヒアリング", "プラン提案", "工事管理", "未来の暮らし設計", "お見積もり", "アフターケア"],
    variant: "sun",
    bg: "bg-paper",
  },
  {
    num: "03",
    en: "Renovation",
    slug: "renovation",
    name: "リフォーム",
    subtitle: "住まいへの愛着をアップデート",
    desc: "キッチン・お風呂・トイレ・洗面所のリフォームを提供します。設備を新しくするだけでなく、ご要望・ご事情に合わせた最適なプランをご提案します。",
    bullets: ["キッチン", "浴室", "洗面所", "トイレ"],
    variant: "ember",
    bg: "bg-cream",
  },
  {
    num: "04",
    en: "Repair",
    slug: "repair",
    name: "修理",
    subtitle: "あるものを大切に、長く使うために",
    desc: "小さな不具合や老化も、修繕する事で長く使い続けられます。お客様の暮らしや思い出を大切にしながら最適な修繕方法をご提案します。",
    bullets: ["蛇口・水栓", "排水管修繕", "部品交換", "パッキン交換", "トイレ修理", "緊急対応"],
    variant: "paper",
    bg: "bg-paper",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="SERVICES"
        title="サービス"
        subtitle="水まわりのこと、まるごとお任せください"
      />

      {services.map((s) => (
        <section key={s.slug} id={s.slug} className={s.bg}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14 lg:mb-20">
              <div className="flex flex-col justify-center">
                <p
                  className="text-[11px] tracking-widest text-mute mb-5"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {s.num} / 04 — {s.en}
                </p>
                <h2
                  className="font-medium text-ink leading-tight mb-3 text-[32px] lg:text-[60px]"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {s.name}
                </h2>
                <p className="text-[13px] text-mute">{s.subtitle}</p>
              </div>

              <DiagonalStripe
                variant={s.variant}
                className="h-[220px] lg:h-[320px]"
                label={`— ${s.en.toUpperCase()} PHOTO`}
              />
            </div>

            <p
              className="text-[15px] text-ink-soft leading-relaxed mb-10"
              style={{ maxWidth: "680px" }}
            >
              {s.desc}
            </p>

            <ul
              className="grid grid-cols-2 gap-y-3 mb-10"
              style={{ maxWidth: "480px" }}
            >
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-[13px] text-ink-soft"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-ember text-white text-[13px] font-semibold px-6 py-3 rounded transition-colors hover:bg-ember/85"
            >
              {s.name}についてご相談 →
            </Link>
          </div>
        </section>
      ))}
    </>
  );
}
