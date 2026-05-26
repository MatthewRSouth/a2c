import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CompanyStory from "../components/CompanyStory";
import CompanyDetails from "../components/CompanyDetails";

export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "A2C Pipemaster Osakaについて。2019年創業、寝屋川市を拠点に地域密着で水まわりリフォーム・修理を行っています。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="ABOUT"
        title="私たちについて"
        subtitle="過去から先へ、そして未来へ"
      />
      <CompanyStory />
      <CompanyDetails />
    </>
  );
}
