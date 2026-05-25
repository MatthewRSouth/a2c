import Link from "next/link";

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "私たちについて" },
  { href: "/services", label: "サービス" },
  { href: "/works", label: "WORKS" },
  { href: "/contact", label: "お問合せ" },
];

const services = [
  { href: "/services#maintenance", label: "メンテナンス" },
  { href: "/services#planning", label: "真心プランニング" },
  { href: "/services#renovation", label: "リフォーム" },
  { href: "/services#repair", label: "修理" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-full shrink-0"
                style={{
                  background: "linear-gradient(135deg, #FFD27A 0%, #EF7C4A 100%)",
                }}
              />
              <div>
                <span className="block text-sm font-bold text-white">
                  A2C Pipemaster Osaka
                </span>
                <span className="block text-[10px] tracking-wider text-white/40">
                  SINCE 2019
                </span>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-white/50">
              大阪府寝屋川市で、真心を込めた水まわりリフォーム・水道修繕工事をご提供しています。お客様の大切な思い出を、リフォームを通してつないでいく存在でありたい。
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[11px] tracking-widest text-white/30 uppercase mb-5">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {pages.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] tracking-widest text-white/30 uppercase mb-5">
              Services / サービス
            </h3>
            <ul className="space-y-2.5">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] tracking-widest text-white/30 uppercase mb-5">
              Contact / お問合せ
            </h3>
            <ul className="space-y-3 text-[13px] text-white/50">
              <li>090-5153-4046</li>
              <li>a2c.makimura@gmail.com</li>
              <li>
                〒572-0001
                <br />
                大阪府寝屋川市成田東町17-1
              </li>
              <li>毎日 09:00 – 18:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright strip */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-white/25">
          <span>© 2026 A2C PIPEMASTER OSAKA</span>
          <span>— NEYAGAWA, OSAKA — 地域に仲立ち、真心を込めて</span>
        </div>
      </div>
    </footer>
  );
}
