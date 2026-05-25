type Variant = "coral" | "gold" | "blue-light" | "beige";

const variants: Record<Variant, { bg: string; stripe: string }> = {
  coral: { bg: "#EF7C4A", stripe: "rgba(255,255,255,0.12)" },
  gold: { bg: "#FFD27A", stripe: "rgba(255,255,255,0.18)" },
  "blue-light": { bg: "#CDE0E2", stripe: "rgba(255,255,255,0.22)" },
  beige: { bg: "#FFF6E8", stripe: "rgba(255,255,255,0.40)" },
};

type Props = {
  variant?: Variant;
  className?: string;
  label?: string;
};

export default function DiagonalStripe({
  variant = "coral",
  className = "",
  label,
}: Props) {
  const { bg, stripe } = variants[variant];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: bg,
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 18px,
          ${stripe} 18px,
          ${stripe} 22px
        )`,
      }}
    >
      {label && (
        <span className="absolute bottom-3 left-3 text-[10px] tracking-widest text-black/25 uppercase select-none">
          — {label}
        </span>
      )}
    </div>
  );
}
