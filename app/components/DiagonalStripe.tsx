type Variant = "ember" | "sun" | "sky" | "paper" | "sand";

const variants: Record<Variant, { bg: string; stripe: string }> = {
  ember: { bg: "#EF7C4A", stripe: "rgba(255,255,255,0.12)" },
  sun:   { bg: "#FFD27A", stripe: "rgba(255,255,255,0.18)" },
  sky:   { bg: "#D8E8E9", stripe: "rgba(255,255,255,0.22)" },
  paper: { bg: "#FEF7E4", stripe: "rgba(255,255,255,0.40)" },
  sand:  { bg: "#F3E6CF", stripe: "rgba(255,255,255,0.30)" },
};

type Props = {
  variant?: Variant;
  className?: string;
  label?: string;
};

export default function DiagonalStripe({
  variant = "ember",
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
