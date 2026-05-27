import Link from 'next/link';
import DiagonalStripe from './DiagonalStripe';

export default function Hero() {
    return (
        <section className="bg-paper overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-140">
                {/* Left: content */}
                <div className="flex flex-col justify-center py-16 lg:py-24 px-6 lg:pl-[max(48px,calc((100vw-1280px)/2+48px))] lg:pr-16">
                    {/* Eyebrow pill */}
                    <div className="inline-flex items-center gap-2 self-start mb-8 px-3 py-1.5 rounded-full border border-ember">
                        <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                        <span
                            className="text-[10px] uppercase text-ember"
                            style={{
                                fontFamily: 'var(--font-dm-mono)',
                                letterSpacing: '1.6px',
                            }}
                        >
                            地域密着 · 大阪府寝屋川市
                        </span>
                    </div>

                    {/* H1 — Noto Serif JP 500 */}
                    <h1
                        className="font-medium leading-[1.3] mb-6 text-[38px] lg:text-[60px]"
                        style={{
                            fontFamily: 'var(--font-noto-serif)',
                            letterSpacing: '2px',
                        }}
                    >
                        <span className="text-ink">真心を込めた、</span>
                        <br />
                        <span className="text-ink">水まわりの</span>
                        <br />
                        <span className="text-ember">リフォーム。</span>
                    </h1>

                    {/* Subhead — ember left border quote-bar */}
                    <p
                        className="text-ink-soft leading-loose mb-8 border-l-2 border-ember pl-4"
                        style={{ fontSize: '15px', maxWidth: '460px' }}
                    >
                        暮らしに笑顔を、明るい未来を。
                        <br />
                        寝屋川市から、お客様の大切な思い出を
                        <br />
                        リフォームを通じてつないでいきます。
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-ink-soft text-white text-[14px] font-semibold px-6 py-3.5 rounded transition-colors hover:bg-ink"
                            style={{ letterSpacing: '1px' }}
                        >
                            無料お見積もりへ →
                        </Link>
                        <a
                            href="/works"
                            className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded transition-colors hover:bg-ink/5 text-ink"
                            style={{ border: '1.5px solid rgba(6,40,61,0.18)' }}
                        >
                            施工事例を見る
                        </a>
                    </div>
                </div>

                {/* Right: ember stripe */}
                <div className="relative hidden lg:block">
                    <DiagonalStripe
                        variant="ember"
                        className="absolute inset-0 w-full h-full"
                        label="RENOVATION PHOTO"
                    />

                    {/* Vertical accent label — Noto Serif JP */}
                    <div
                        className="absolute top-1/2 right-8 -translate-y-1/2 text-[12px] text-ink/50"
                        style={{
                            fontFamily: 'var(--font-noto-serif)',
                            writingMode: 'vertical-rl',
                            letterSpacing: '8px',
                        }}
                    >
                        過去から、現在、そして未来へ
                    </div>

                    {/* Stat callout card */}
                    <div className="absolute bottom-8 left-8 bg-white/90 px-4 py-3 rounded shadow-sm">
                        <p
                            className="leading-none text-ink mb-0.5"
                            style={{
                                fontFamily: 'var(--font-dm-serif)',
                                fontSize: '28px',
                            }}
                        >
                            無料
                        </p>
                        <p className="text-[12px] text-ink-soft">
                            出張お見積もり・現地調査
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
