type Cell = {
  label: string;
  value: string;
  href?: string;
};

type Row = {
  left: Cell;
  right: Cell;
};

const rows: Row[] = [
  {
    left:  { label: "屋号",     value: "A2C Pipemaster Osaka" },
    right: { label: "代表者",   value: "牧村" },
  },
  {
    left:  { label: "所在地",   value: "大阪府寝屋川市成田東町17-1 〒572-0001" },
    right: { label: "電話番号", value: "090-5153-4046", href: "tel:090-5153-4046" },
  },
  {
    left:  { label: "メール",   value: "a2c.makimura@gmail.com", href: "mailto:a2c.makimura@gmail.com" },
    right: { label: "営業時間", value: "毎日 09:00 – 18:00" },
  },
  {
    left:  { label: "事業内容", value: "メンテナンス・真心プランニング・リフォーム・修理" },
    right: { label: "対応エリア", value: "寝屋川市・大阪市・門真市・四條畷市他" },
  },
  {
    left:  { label: "INSTAGRAM", value: "@a2c.pipemaster", href: "https://www.instagram.com/a2c.pipemaster" },
    right: { label: "設立",      value: "2019年" },
  },
];

function TableCell({ label, value, href }: Cell) {
  return (
    <div className="flex items-center justify-between px-6 py-5 gap-4">
      <span className="text-[10px] tracking-widest text-mute uppercase shrink-0">
        {label}
      </span>
      <span className="text-sm text-ink-soft text-right">
        {href ? (
          <a
            href={href}
            className="hover:text-ember transition-colors"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

export default function CompanyDetails() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-[11px] tracking-[0.18em] text-ember mb-4">— COMPANY INFO —</p>
        <h2 className="text-[36px] font-normal text-ink mb-12">会社概要</h2>

        <div className="divide-y divide-ink/15 border border-ink/15">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 divide-x divide-ink/15 ${
                i % 2 === 0 ? "bg-white/60" : "bg-cream/40"
              }`}
            >
              <TableCell {...row.left} />
              <TableCell {...row.right} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
