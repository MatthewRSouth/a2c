import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
    title: "お問合せ",
    description:
        "A2C Pipemaster Osakaへのお問合せ。無料お見積もりフォームまたはお電話（090-5153-4046）にてお気軽にご相談ください。",
};

export default function ContactPage() {
    return (
        <>
            <PageHeader
                label="CONTACT"
                title="お問合せ"
                subtitle="水まわりのご相談、お気軽にどうぞ"
            />

            <section className="bg-cream py-16 lg:py-20">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
                        <ContactForm />

                        <div className="bg-ink rounded p-8 text-white lg:sticky lg:top-24">
                            <p
                                className="text-[10px] tracking-widest text-ember mb-4"
                                style={{ fontFamily: "var(--font-dm-mono)" }}
                            >
                                緊急も / EMERGENCY
                            </p>
                            <a
                                href="tel:090-5153-4046"
                                className="block text-[34px] font-medium leading-none mb-1 hover:text-ember transition-colors"
                                style={{ fontFamily: "var(--font-noto-serif)" }}
                            >
                                090-5153-4046
                            </a>
                            <p className="text-white/60 text-[13px] mb-4">
                                毎日 09:00 — 18:00
                            </p>
                            <p className="text-white/70 text-[13px] leading-relaxed mb-10">
                                緊急性を理解し、チーム一丸となって迅速に対応します。
                            </p>

                            <div className="space-y-7">
                                <div>
                                    <p
                                        className="text-[9px] tracking-widest text-white/35 mb-1.5"
                                        style={{ fontFamily: "var(--font-dm-mono)" }}
                                    >
                                        EMAIL / メール
                                    </p>
                                    <a
                                        href="mailto:a2c.makimura@gmail.com"
                                        className="text-white text-[13px] hover:text-ember transition-colors"
                                    >
                                        a2c.makimura@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p
                                        className="text-[9px] tracking-widest text-white/35 mb-1.5"
                                        style={{ fontFamily: "var(--font-dm-mono)" }}
                                    >
                                        SHOP / 所在地
                                    </p>
                                    <p className="text-white/80 text-[13px] leading-relaxed">
                                        〒572-0001
                                        <br />
                                        大阪府寝屋川市成田東町17-1
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className="text-[9px] tracking-widest text-white/35 mb-1.5"
                                        style={{ fontFamily: "var(--font-dm-mono)" }}
                                    >
                                        INSTAGRAM
                                    </p>
                                    <p className="text-white/80 text-[13px]">
                                        @a2c.pipemaster
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
