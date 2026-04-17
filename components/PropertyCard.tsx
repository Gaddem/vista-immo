"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Maximize2, BedDouble, Bath } from "lucide-react";
import type { Property } from "@/data/properties";

interface Props {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: Props) {
  const formattedPrice =
    property.type === "Location"
      ? `${property.price.toLocaleString("fr-FR")} €/mois`
      : `${property.price.toLocaleString("fr-FR")} €`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <Link href={`/bien/${property.id}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden h-56">
          <motion.img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Type badge */}
          <span
            className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${
              property.type === "Vente"
                ? "bg-[#1E3A5F] text-white"
                : "bg-[#B8960C] text-white"
            }`}
          >
            {property.type}
          </span>
          {/* DPE badge */}
          <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#1E3A5F]">
            DPE {property.dpe}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
            <MapPin size={12} />
            <span>{property.city}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg text-[#1E3A5F] leading-snug mb-3 group-hover:text-[#162e4d] transition-colors line-clamp-2">
            {property.title}
          </h3>

          {/* Features row */}
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
            <span className="flex items-center gap-1.5">
              <Maximize2 size={14} className="text-[#B8960C]" />
              {property.surface} m²
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={14} className="text-[#B8960C]" />
              {property.bedrooms} ch.
            </span>
            <span className="flex items-center gap-1.5">
              <Bath size={14} className="text-[#B8960C]" />
              {property.bathrooms} sdb.
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-4" />

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <p className="font-serif text-xl font-semibold text-[#1E3A5F]">
              {formattedPrice}
            </p>
            <motion.span
              whileHover={{ x: 4 }}
              className="text-xs font-medium text-[#B8960C] flex items-center gap-1"
            >
              Voir le bien →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
