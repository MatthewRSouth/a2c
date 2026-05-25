import type { Metadata } from "next";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import AboutPreview from "./components/AboutPreview";
import ServicesPreview from "./components/ServicesPreview";
import WorksPreview from "./components/WorksPreview";
import Testimonial from "./components/Testimonial";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "A2C Pipemaster Osaka | 水まわりリフォーム・修理 | 寝屋川市",
  description:
    "寝屋川市・大阪市・門真市の水まわりリフォーム・修理・メンテナンスはA2C Pipemaster Osakaへ。迅速対応、無料お見積もり。営業時間09:00-18:00。",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesPreview />
      <WorksPreview />
      <Testimonial />
      <CTASection />
    </>
  );
}
