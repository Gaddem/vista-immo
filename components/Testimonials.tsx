"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophie & Antoine Marchand",
    role: "Acheteurs – Villa à Aix-en-Provence",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "Une expérience absolument remarquable. L'équipe VISTA IMMO a su cerner nos attentes dès le premier entretien. La villa que nous avons acquise dépasse toutes nos espérances. La discrétion et le professionnalisme ont été au rendez-vous du début à la fin.",
  },
  {
    id: 2,
    name: "Pierre-Henri Durand",
    role: "Investisseur – Penthouse à Nice",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "Troisième acquisition avec VISTA IMMO, et toujours le même niveau d'excellence. Leur connaissance du marché premium niçois est incomparable. Ils ont négocié un prix très en deçà de mes attentes. Je les recommande sans réserve pour tout investissement immobilier haut de gamme.",
  },
  {
    id: 3,
    name: "Camille Fontaine",
    role: "Propriétaire – Location Loft Lyon",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "J'ai confié la gestion de mon loft lyonnais à VISTA IMMO et je ne le regrette pas un instant. Locataire sérieux trouvé en 5 jours, suivi rigoureux des paiements et réactivité exemplaire pour les petits travaux. Un service de gestion vraiment premium.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-[#B8960C]" />
              <span className="text-xs font-medium tracking-widest text-[#B8960C] uppercase">
                Témoignages
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-[#1E3A5F] mb-6 leading-tight"
            >
              Ce que disent
              <br />
              <span className="italic">nos clients</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 leading-relaxed mb-10 max-w-md"
            >
              La confiance de nos clients est notre plus belle récompense. Découvrez leurs expériences avec VISTA IMMO.
            </motion.p>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white text-gray-400 transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white hover:bg-[#162e4d] transition-colors"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? "w-6 h-2 bg-[#B8960C]" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right – Testimonial card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-xl bg-[#B8960C] flex items-center justify-center shadow-md">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#B8960C] text-[#B8960C]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed text-base italic mb-8">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1E3A5F] text-sm">{testimonials[current].name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative shadow card behind */}
            <div className="absolute inset-0 rounded-2xl bg-[#1E3A5F]/5 translate-x-3 translate-y-3 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
