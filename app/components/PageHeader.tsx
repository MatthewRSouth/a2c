type Props = {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function PageHeader({
  label,
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <section className={`bg-beige py-20 ${className}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <p className="text-[11px] tracking-[0.18em] text-sand mb-4">— {label} —</p>
        <h1 className="text-[40px] lg:text-[48px] font-normal text-navy leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm text-sand tracking-wide">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
