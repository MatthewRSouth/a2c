import Link from "next/link";
import DiagonalStripe from "./DiagonalStripe";

type Variant = "coral" | "gold" | "blue-light" | "beige";

type Work = {
  variant: Variant;
  enLabel: string;
  date: string;
  category: string;
  title: string;
  location: string;
};

const works: Work[] = [
  {
    variant: "beige",
    enLabel: "Kitchen Renovation",
    date: "2025.10",
    category: "リフォーム",
    title: "キッチンリフォーム",
    location: "寝屋川市・N棟",
  },
  {
    variant: "blue-light",
    enLabel: "Bath Renovation",
    date: "2025.09",
    category: "リフォーム",
    title: "お風呂リフォーム",
    location: "大阪市・1棟",
  },
  {
    variant: "gold",
    enLabel: "Drain Maintenance",
    date: "2025.09",
    category: "メンテナンス",
    title: "排水管メンテナンス",
    location: "門真市・飲食店",
  },
  {
    variant: "coral",
    enLabel: "Bathroom Remodel",
    date: "2025.08",
    category: "リフォーム",
    title: "洗面所一新",
    location: "寝屋川市・N邸",
  },
];

function WorkCard({ variant, enLabel, date, category, title, location }: Work) {
  return (
    <div className="group cursor-pointer">
      <DiagonalStripe
        variant={variant}
        className="w-full aspect-square mb-3 transition-shadow duration-200 group-hover:shadow-lg"
        label={enLabel.toUpperCase()}
      />
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] tracking-widest text-coral uppercase">
          {enLabel}
        </span>
        <span className="text-[10px] text-sand">{date}</span>
      </div>
      <div className="mb-1">
        <span className="text-[10px] border border-sand/40 text-sand px-2 py-0.5 rounded-full">
          {category}
        </span>
      </div>
      <p className="text-[14px] font-medium text-navy mt-1.5">{title}</p>
      <p className="text-[12px] text-sand">{location}</p>
    </div>
  );
}

export default function WorksPreview() {
  return (
    <section className="bg-beige py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] tracking-[0.18em] text-sand mb-3">
              — 施工事例 —
            </p>
            <h2 className="text-[36px] font-normal text-navy">施工事例</h2>
          </div>
          <Link
            href="/works"
            className="text-sm text-sand hover:text-navy transition-colors tracking-wide hidden sm:block"
          >
            事例をすべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {works.map((w) => (
            <WorkCard key={w.title} {...w} />
          ))}
        </div>
        <div className="sm:hidden text-center">
          <Link
            href="/works"
            className="text-sm text-sand hover:text-navy transition-colors"
          >
            事例をすべて見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
