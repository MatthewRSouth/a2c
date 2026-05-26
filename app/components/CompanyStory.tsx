import DiagonalStripe from './DiagonalStripe';

export default function CompanyStory() {
    return (
        <section className="bg-paper py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <DiagonalStripe
                    variant="ember"
                    className="w-full h-90 lg:h-110 mb-16 lg:mb-20"
                    label="COMPANY PHOTO"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <p className="text-[11px]  tracking-[0.18em] text-ember mb-4">
                            — SINCE 2019 —
                        </p>
                        <h2 className="text-[36px] font-normal text-ink leading-snug mb-8">
                            地域密着で、<br />真心を込めて。
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end gap-6">
                        <p className="text-base text-ink-soft leading-relaxed">
                            2019年、大阪府寝屋川市にてA2C Pipemaster
                            Osakaを創業しました。水まわりのプロとして、地域のみなさまの暮らしに寄り添い、小さな修理から大きなリフォームまで真心を込めてお応えしてきました。
                        </p>
                        <p className="text-sm text-ink-soft leading-relaxed">
                            私たちが大切にしているのは、施工の質だけではありません。お客様がどんな暮らしを望んでいるか、何に困っているか。その想いを丁寧に聞き取り、一緒に最善の方法を考えることを仕事の中心に置いています。
                        </p>
                        <p className="text-sm text-ink-soft leading-relaxed">
                            地域に根ざした小さな会社だからこそ、一件一件に向き合える。そのことを誇りに、これからも寝屋川市・大阪市・門真市を拠点に、皆様の水まわりを支え続けてまいります。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
