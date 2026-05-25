import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

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
      <div className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="text-sand text-sm">準備中</p>
        </div>
      </div>
    </>
  );
}
