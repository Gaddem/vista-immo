"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const links = {
  Agence: ["À propos", "Notre équipe", "Actualités", "Rejoindre l\u2019équipe"],
  Services: ["Vente", "Location", "Gestion locative", "Estimation gratuite"],
  Villes: ["Paris", "Lyon", "Nice", "Bordeaux", "Aix-en-Provence", "Gordes"],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0F2440] text-white">
      {/* Main footer */}
      <div className="px-8 md:px-16 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-baseline gap-1 mb-5">
              <span className="font-serif text-2xl text-white tracking-tight">VISTA</span>
              <span className="font-serif text-2xl text-[#B8960C] tracking-tight">IMMO</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Votre partenaire de confiance pour l&apos;immobilier de prestige depuis 2012. Discrétion, excellence et résultats.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href="tel:+33142000000" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={15} className="text-[#B8960C]" />
                +33 (0)1 42 00 00 00
              </a>
              <a href="mailto:contact@vistaimmo.fr" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail size={15} className="text-[#B8960C]" />
                contact@vistaimmo.fr
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={15} className="text-[#B8960C] shrink-0" />
                8 Avenue Montaigne, 75008 Paris
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#B8960C]/20 border border-white/10 hover:border-[#B8960C]/30 flex items-center justify-center text-white/40 hover:text-[#B8960C] transition-colors"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest text-[#B8960C] uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 md:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 VISTA IMMO. Tous droits réservés. — Carte professionnelle T n°CPI 7501 2023 000 048 421
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "CGV"].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
