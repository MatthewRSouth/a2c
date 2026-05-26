import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "A2C Pipemaster Osakaのサービス一覧。メンテナンス・真心プランニング・リフォーム・修理。水まわりのことはまるごとお任せください。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="SERVICES"
        title="サービス"
        subtitle="水まわりのこと、まるごとお任せください"
      />
      <div className="bg-cream py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="text-mute text-sm">準備中</p>
        </div>
      </div>
    </>
  );
}
