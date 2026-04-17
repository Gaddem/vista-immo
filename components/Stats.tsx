"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 500,
    suffix: "+",
    label: "Biens vendus",
    description: "Transactions réussies cette année",
  },
  {
    value: 98,
    suffix: "%",
    label: "Clients satisfaits",
    description: "Taux de satisfaction client",
  },
  {
    value: 12,
    suffix: " ans",
    label: "D'expérience",
    description: "Au service de l'immobilier premium",
  },
  {
    value: 2_4,
    suffix: "h",
    label: "Réactivité",
    description: "Délai moyen de réponse garanti",
  },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#1E3A5F] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#B8960C]/[0.06] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-[#B8960C]" />
            <span className="text-xs font-medium tracking-widest text-[#B8960C] uppercase">
              En chiffres
            </span>
            <span className="w-8 h-px bg-[#B8960C]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white"
          >
            L&apos;excellence, <span className="italic text-[#B8960C]">mesurée</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Number */}
              <div className="font-serif text-5xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2 + index * 0.3} />
              </div>

              {/* Gold divider */}
              <div className="w-8 h-0.5 bg-[#B8960C] mx-auto mb-3" />

              {/* Label */}
              <p className="font-medium text-white text-sm mb-1">{stat.label}</p>
              <p className="text-white/50 text-xs">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
