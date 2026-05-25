import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A2C Pipemaster Osaka",
  address: {
    "@type": "PostalAddress",
    streetAddress: "成田東町17-1",
    addressLocality: "寝屋川市",
    postalCode: "572-0001",
    addressCountry: "JP",
  },
  telephone: "090-5153-4046",
  openingHours: "Mo-Su 09:00-18:00",
};

export const metadata: Metadata = {
  title: {
    default: "A2C Pipemaster Osaka | 水まわりリフォーム・修理 | 寝屋川市",
    template: "%s | A2C Pipemaster Osaka",
  },
  description:
    "寝屋川市・大阪市・門真市の水まわりリフォーム・修理・メンテナンスはA2C Pipemaster Osakaへ。迅速対応、無料お見積もり。営業時間09:00-18:00。",
  openGraph: {
    siteName: "A2C Pipemaster Osaka",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${noto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream font-sans text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
