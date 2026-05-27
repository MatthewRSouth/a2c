import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import WorksGrid from "../components/WorksGrid";

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
      <WorksGrid />
    </>
  );
}
