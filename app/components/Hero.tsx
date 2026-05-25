import Link from "next/link";
import DiagonalStripe from "./DiagonalStripe";

export default function Hero() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        {/* Text content */}
        <div className="flex flex-col justify-center py-20 lg:py-28 px-6 lg:pl-[max(48px,calc((100vw-1280px)/2+48px))] lg:pr-16">
          <h1 className="text-[48px] lg:text-[58px] font-light text-navy leading-[1.15] tracking-[-0.5px] mb-6">
            真心を込めた、
            <br />
            水まわりの
            <br />
            リフォーム。
          </h1>
          <p className="text-sm text-ash leading-relaxed mb-8 max-w-sm">
            寝屋川市・大阪市・門真市エリアの水まわりリフォーム・修理・メンテナンスをお任せください。現地調査・お見積もりは無料です。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-6 py-3 rounded transition-colors hover:bg-navy/85 tracking-wide"
            >
              無料お見積もりへ →
            </Link>
            <a
              href="tel:090-5153-4046"
              className="inline-flex items-center gap-2 border border-navy text-navy text-sm font-medium px-6 py-3 rounded transition-colors hover:bg-navy/5 tracking-wide"
            >
              お電話でのお問い合わせ
            </a>
          </div>
        </div>

        {/* Diagonal stripe — full height right column */}
        <div className="relative hidden lg:block">
          <DiagonalStripe
            variant="coral"
            className="absolute inset-0 w-full h-full"
            label="RENOVATION PHOTO"
          />
          {/* Free estimate badge */}
          <div className="absolute bottom-8 left-8 bg-white/90 px-4 py-3 rounded shadow-sm">
            <p className="text-[10px] tracking-widest text-sand uppercase mb-0.5">
              無料
            </p>
            <p className="text-xs font-medium text-navy">現地調査・お見積もり</p>
          </div>
        </div>
      </div>
    </section>
  );
}
