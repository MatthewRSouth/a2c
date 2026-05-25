"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "急な水漏れで困っていたところ、すぐに駆けつけてくださいました。説明も丁寧で、料金も明朗、本当に助かりました。",
    name: "N様",
    location: "寝屋川市",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const t = testimonials[current];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <p className="text-[11px] tracking-[0.18em] text-sand mb-10">
          — TESTIMONIALS —
        </p>
        <div>
          <span
            className="block text-[72px] leading-none text-coral font-serif select-none -mb-2"
            aria-hidden
          >
            &ldquo;
          </span>
          <blockquote className="text-[18px] lg:text-[22px] font-light text-navy leading-relaxed max-w-3xl">
            {t.quote}
          </blockquote>
          <footer className="mt-6 text-sm text-sand">
            {t.name} — {t.location}
          </footer>

          {total > 1 && (
            <div className="flex gap-2 mt-8">
              <button
                onClick={() => setCurrent((c) => (c - 1 + total) % total)}
                className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:border-navy transition-colors"
                aria-label="前へ"
              >
                <ChevronLeft size={16} className="text-navy" />
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 1) % total)}
                className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center hover:border-navy transition-colors"
                aria-label="次へ"
              >
                <ChevronRight size={16} className="text-navy" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
