import { Tag, Zap, Clock, MapPin } from "lucide-react";

const stats = [
  { Icon: Tag, value: "無料", label: "お見積もり無料" },
  { Icon: Zap, value: "迅速", label: "迅速対応" },
  { Icon: Clock, value: "09:00–18:00", label: "営業時間" },
  { Icon: MapPin, value: "寝屋川・近隣", label: "対応エリア" },
];

export default function StatsBar() {
  return (
    <div className="bg-white border-y border-ink/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 [&>*:nth-child(odd)]:border-r [&>*:nth-child(odd)]:border-ink/10 md:[&>*:nth-child(odd)]:border-r-0 md:divide-x md:divide-ink/10">
          {stats.map(({ Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-5 px-4"
            >
              <Icon size={18} className="text-ember shrink-0" />
              <div>
                <p className="text-[15px] font-medium text-ink leading-none mb-1">
                  {value}
                </p>
                <p className="text-[11px] tracking-wider text-mute">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
