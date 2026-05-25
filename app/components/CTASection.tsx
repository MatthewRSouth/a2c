import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gold py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-[11px] tracking-[0.18em] text-navy/40 mb-8">
          — GET IN TOUCH —
        </p>
        <h2 className="text-[40px] lg:text-[56px] font-light leading-tight mb-6">
          <span className="text-navy">お気軽に、</span>
          <br />
          <span className="text-coral">ご相談ください。</span>
        </h2>
        <p className="text-sm text-navy/60 mb-10 leading-relaxed">
          出張お見積もりは無料です。
          <br />
          水まわりの小さな気になることから、お気軽にどうぞ。
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-8 py-4 rounded transition-colors hover:bg-navy/85 tracking-wide"
          >
            お問合せフォームへ →
          </Link>
          <a
            href="tel:090-5153-4046"
            className="inline-flex items-center gap-2 border border-navy text-navy text-sm font-medium px-8 py-4 rounded transition-colors hover:bg-navy/5 tracking-wide"
          >
            090-5153-4046
          </a>
        </div>
      </div>
    </section>
  );
}
