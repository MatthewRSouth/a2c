import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "施工事例",
  description:
    "A2C Pipemaster Osakaの施工事例。キッチンリフォーム・お風呂リフォーム・排水管メンテナンス・修理など、これまでに手がけたお仕事をご紹介します。",
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        label="施工事例"
        title="施工事例"
        subtitle="これまでに手がけたお仕事をご紹介します"
      />
      <div className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="text-sand text-sm">準備中</p>
        </div>
      </div>
    </>
  );
}
