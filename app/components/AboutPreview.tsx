import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-beige py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <p className="text-[11px] tracking-[0.18em] text-sand mb-12">— ABOUT —</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-[36px] font-normal text-navy leading-snug">
              私たちについて
            </h2>
            <p className="mt-2 text-sm text-sand tracking-wide">
              過去から先へ、そして未来へ
            </p>
          </div>
          <div>
            <p className="text-base text-ash leading-relaxed mb-5">
              現在から未来の幸せな生活、暮らしの安心を支える水まわりのサービスをお届けしています。
            </p>
            <p className="text-sm text-ash leading-relaxed mb-8">
              どんな未来を描いて生活を送りたいか、お客様によって違います。一人ひとり違うからこそ共に考え、全ての業務に心を込め、真心を込めたサービスを提供いたします。
            </p>
            <Link
              href="/about"
              className="text-sm text-coral hover:underline tracking-wide"
            >
              もっと見る →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
