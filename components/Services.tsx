"use client";

import { motion } from "framer-motion";
import { TrendingUp, Key, Calculator } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Vente",
    subtitle: "Valorisez votre patrimoine",
    description:
      "Nous mettons en valeur votre bien avec une stratégie marketing premium : photographies professionnelles, visites 3D, diffusion sélective. Nos conseillers négocient au meilleur prix.",
    cta: "Mettre en vente",
    highlight: true,
  },
  {
    icon: Key,
    title: "Location",
    subtitle: "Gérez sereinement",
    description:
      "De la mise en location à la gestion locative complète, nous sélectionnons rigoureusement vos locataires et assurons le suivi administratif de votre investissement.",
    cta: "Mettre en location",
    highlight: false,
  },
  {
    icon: Calculator,
    title: "Estimation",
    subtitle: "Connaissez votre valeur",
    description:
      "Bénéficiez d'une estimation précise et argumentée par nos experts du marché local. Rapport détaillé remis sous 48h, entièrement gratuit et sans engagement.",
    cta: "Estimer gratuitement",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
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
              Notre expertise
            </span>
            <span className="w-8 h-px bg-[#B8960C]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#1E3A5F] mb-4"
          >
            Nos services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            Un accompagnement sur-mesure à chaque étape de votre projet immobilier, avec la discrétion et l&apos;exigence que vous méritez.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  service.highlight
                    ? "bg-[#1E3A5F] text-white shadow-card-hover"
                    : "bg-gray-50 hover:bg-white hover:shadow-card-hover border border-transparent hover:border-gray-100"
                }`}
              >
                {/* Gold accent line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-0.5 rounded-full ${
                    service.highlight ? "bg-[#B8960C]" : "bg-[#B8960C]/30"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    service.highlight
                      ? "bg-white/10"
                      : "bg-[#1E3A5F]/5"
                  }`}
                >
                  <Icon
                    size={22}
                    className={service.highlight ? "text-[#B8960C]" : "text-[#1E3A5F]"}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-serif text-2xl mb-1 ${
                    service.highlight ? "text-white" : "text-[#1E3A5F]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-4 ${
                    service.highlight ? "text-[#B8960C]" : "text-[#B8960C]"
                  }`}
                >
                  {service.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    service.highlight ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    service.highlight
                      ? "text-[#B8960C] hover:text-white"
                      : "text-[#1E3A5F] hover:text-[#B8960C]"
                  }`}
                >
                  {service.cta}
                  <span>→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
