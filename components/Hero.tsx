"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-serif text-2xl text-[#1E3A5F] tracking-tight">VISTA</span>
            <span className="font-serif text-2xl text-[#B8960C] tracking-tight">IMMO</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {["Acheter", "Louer", "Estimer", "À propos"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#1E3A5F] transition-colors"
            >
              {item}
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#162e4d] transition-colors"
          >
            Nous contacter
          </Link>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 md:px-16 pt-8 pb-20 items-center">
        {/* Left – Text */}
        <div className="flex flex-col justify-center max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 w-fit"
          >
            <span className="w-8 h-px bg-[#B8960C]" />
            <span className="text-xs font-medium tracking-widest text-[#B8960C] uppercase">
              Immobilier de Prestige
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-5xl md:text-6xl xl:text-7xl text-[#1E3A5F] leading-[1.1] mb-6"
          >
            Votre bien
            <br />
            <span className="italic">d&apos;exception</span>
            <br />
            vous attend.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md"
          >
            Découvrez notre sélection exclusive de propriétés d&apos;exception — villas, appartements de prestige et mas provençaux soigneusement sélectionnés.
          </motion.p>

          {/* Search */}
          <SearchBar />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {["Paris", "Lyon", "Nice", "Bordeaux", "Aix-en-Provence"].map((city) => (
              <button
                key={city}
                className="text-xs font-medium text-gray-500 hover:text-[#1E3A5F] hover:bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#1E3A5F]/20 transition-all"
              >
                {city}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Right – Asymmetric image collage */}
        <div className="relative h-[560px] hidden lg:block">
          {/* Main image – offset top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[72%] h-[75%] rounded-2xl overflow-hidden shadow-card-hover"
          >
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80"
              alt="Villa de prestige"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Secondary image – offset bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30, y: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-[52%] h-[50%] rounded-2xl overflow-hidden shadow-card-hover border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80"
              alt="Appartement de luxe"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-[62%] right-[24%] bg-white rounded-xl shadow-card px-5 py-4 z-10"
          >
            <p className="text-2xl font-serif font-bold text-[#1E3A5F]">500+</p>
            <p className="text-xs text-gray-500 mt-0.5">Biens vendus cette année</p>
          </motion.div>

          {/* Gold accent dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="absolute top-[15%] left-[8%] w-14 h-14 rounded-full bg-[#B8960C]/10 border border-[#B8960C]/20 flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#B8960C]" />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave / divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
