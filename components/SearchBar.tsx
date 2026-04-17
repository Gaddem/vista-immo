"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Home, Banknote } from "lucide-react";

const cities = ["Toutes les villes", "Paris", "Lyon", "Bordeaux", "Nice", "Aix-en-Provence", "Gordes"];
const types = ["Tous types", "Vente", "Location"];
const budgets = ["Tout budget", "< 500 000 €", "500 000 – 1 M€", "1 M€ – 2 M€", "> 2 M€", "< 2 000 €/mois", "2 000 – 5 000 €/mois"];

export default function SearchBar() {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full bg-white rounded-2xl shadow-card p-2 flex flex-col md:flex-row gap-2"
    >
      {/* City */}
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
        <MapPin size={18} className="text-[#B8960C] shrink-0" />
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-400 mb-0.5">Ville</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-[#1E3A5F] outline-none cursor-pointer appearance-none"
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden md:block w-px bg-gray-100 my-2" />

      {/* Type */}
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
        <Home size={18} className="text-[#B8960C] shrink-0" />
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-400 mb-0.5">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-[#1E3A5F] outline-none cursor-pointer appearance-none"
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden md:block w-px bg-gray-100 my-2" />

      {/* Budget */}
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
        <Banknote size={18} className="text-[#B8960C] shrink-0" />
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-400 mb-0.5">Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-[#1E3A5F] outline-none cursor-pointer appearance-none"
          >
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-[#162e4d] transition-colors shrink-0"
      >
        <Search size={16} />
        Rechercher
      </motion.button>
    </motion.div>
  );
}
