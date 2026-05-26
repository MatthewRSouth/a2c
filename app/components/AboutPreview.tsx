import Link from "next/link";
import DiagonalStripe from "./DiagonalStripe";

export default function AboutPreview() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <p className="text-[11px] tracking-[0.18em] text-ember mb-4">— ABOUT —</p>
        <h2 className="text-[36px] font-normal text-ink leading-snug">
          私たちについて
        </h2>
        <p className="mt-2 text-sm text-mute tracking-wide mb-12">
          過去から先へ、そして未来へ
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <DiagonalStripe
            variant="sand"
            className="w-full aspect-4/3 lg:aspect-auto lg:min-h-100"
            label="ABOUT PHOTO"
          />
          <div className="flex flex-col justify-center">
            <p className="text-base text-ink-soft leading-relaxed mb-5">
              現在から未来の幸せな生活、暮らしの安心を支える水まわりのサービスをお届けしています。
            </p>
            <p className="text-sm text-ink-soft leading-relaxed mb-8">
              どんな未来を描いて生活を送りたいか、お客様によって違います。一人ひとり違うからこそ共に考え、全ての業務に心を込め、真心を込めたサービスを提供いたします。
            </p>
            <Link
              href="/about"
              className="text-sm text-ember hover:underline tracking-wide"
            >
              もっと見る →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
