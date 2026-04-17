"use client";

import { motion } from "framer-motion";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid() {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50/50">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-8 h-px bg-[#B8960C]" />
              <span className="text-xs font-medium tracking-widest text-[#B8960C] uppercase">
                Sélection Exclusive
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-[#1E3A5F]"
            >
              Nos biens en vedette
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium text-[#1E3A5F] hover:text-[#B8960C] transition-colors flex items-center gap-2 shrink-0"
          >
            Voir tous les biens
            <span className="text-[#B8960C]">→</span>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
