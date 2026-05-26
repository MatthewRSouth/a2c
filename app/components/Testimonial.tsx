"use client";

import { useState, useEffect } from "react";
import DiagonalStripe from "./DiagonalStripe";

const testimonials = [
  {
    quote:
      "急な水漏れで困っていたところ、すぐに駆けつけてくださいました。説明も丁寧で、料金も明朗、本当に助かりました。",
    name: "N様",
    location: "寝屋川市",
  },
  {
    quote:
      "キッチンのリフォームをお願いしました。細かい要望にも丁寧に対応していただき、仕上がりに大変満足しています。",
    name: "M様",
    location: "大阪市",
  },
  {
    quote:
      "排水管の詰まりで困っていたところ、すぐに対応していただきました。作業も丁寧で、また何かあればお願いしたいです。",
    name: "K様",
    location: "門真市",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current];

  return (
    <section className="bg-sun py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <p className="text-[11px] tracking-[0.18em] text-ember mb-10">
          — TESTIMONIALS —
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <DiagonalStripe
            variant="paper"
            className="w-full aspect-square lg:aspect-4/3"
          />
          <div>
            <span
              className="block text-[72px] leading-none text-ember font-serif select-none -mb-2"
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="text-[18px] lg:text-[22px] font-light text-ink leading-relaxed">
              {t.quote}
            </blockquote>
            <footer className="mt-6 text-sm text-ink-soft">
              {t.name} — {t.location}
            </footer>

            <div className="flex gap-2 mt-8" aria-hidden>
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`block w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === current ? "bg-ember" : "bg-ink/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
