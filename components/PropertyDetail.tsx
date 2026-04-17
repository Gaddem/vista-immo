"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Maximize2,
  BedDouble,
  Bath,
  Home,
  Check,
  Phone,
  Mail,
  Send,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import type { Property } from "@/data/properties";

export default function PropertyDetail({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const formattedPrice =
    property.type === "Location"
      ? `${property.price.toLocaleString("fr-FR")} €/mois`
      : `${property.price.toLocaleString("fr-FR")} €`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const prevImage = () => setActiveImage((i) => (i === 0 ? property.images.length - 1 : i - 1));
  const nextImage = () => setActiveImage((i) => (i === property.images.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-serif text-xl text-[#1E3A5F] tracking-tight">VISTA</span>
            <span className="font-serif text-xl text-[#B8960C] tracking-tight">IMMO</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1E3A5F] transition-colors"
          >
            <ArrowLeft size={15} />
            Retour aux annonces
          </Link>
        </div>
      </nav>

      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-[#1E3A5F] transition-colors">Accueil</Link>
            <span>/</span>
            <span>Annonces</span>
            <span>/</span>
            <span className="text-[#1E3A5F] font-medium">{property.title}</span>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    property.type === "Vente"
                      ? "bg-[#1E3A5F] text-white"
                      : "bg-[#B8960C] text-white"
                  }`}
                >
                  {property.type}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-[#1E3A5F]">
                  DPE {property.dpe}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1E3A5F] leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 mt-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="font-serif text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                {formattedPrice}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {property.type === "Location" ? "Charges non incluses" : "Prix net vendeur"}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden h-80 md:h-[480px] bg-gray-100 mb-3 group cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={property.images[activeImage]}
                      alt={`${property.title} – photo ${activeImage + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#1E3A5F] hover:bg-white transition-colors shadow-md opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#1E3A5F] hover:bg-white transition-colors shadow-md opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#1E3A5F] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <ZoomIn size={16} />
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                    {activeImage + 1} / {property.images.length}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative rounded-xl overflow-hidden h-20 transition-all duration-200 ${
                        i === activeImage
                          ? "ring-2 ring-[#B8960C] ring-offset-2"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Characteristics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl text-[#1E3A5F] mb-6">Caractéristiques</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Maximize2, label: "Surface", value: `${property.surface} m²` },
                    { icon: Home, label: "Pièces", value: `${property.rooms} pièces` },
                    { icon: BedDouble, label: "Chambres", value: `${property.bedrooms} ch.` },
                    { icon: Bath, label: "Salles de bain", value: `${property.bathrooms} sdb.` },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-gray-50 rounded-xl p-4 flex flex-col items-center text-center gap-2"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1E3A5F]/5 flex items-center justify-center">
                        <Icon size={18} className="text-[#B8960C]" />
                      </div>
                      <p className="font-semibold text-[#1E3A5F] text-base">{value}</p>
                      <p className="text-gray-400 text-xs">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <h2 className="font-serif text-2xl text-[#1E3A5F] mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="font-serif text-2xl text-[#1E3A5F] mb-6">Équipements & Prestations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-[#B8960C]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h2 className="font-serif text-2xl text-[#1E3A5F] mb-4">Localisation</h2>
                <div className="rounded-2xl overflow-hidden h-64 bg-gray-100 relative border border-gray-200">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                      backgroundColor: "#f9fafb",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-1/2 left-0 right-0 h-6 bg-white/80 -translate-y-1/2" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-5 bg-white/80" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-4 bg-white/60" />
                    <div className="absolute top-1/3 left-0 right-0 h-4 bg-white/60" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center shadow-lg">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1E3A5F]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-xl px-4 py-2.5 shadow-md inline-flex items-center gap-2 text-sm">
                      <MapPin size={13} className="text-[#B8960C]" />
                      <span className="text-[#1E3A5F] font-medium">{property.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right column – contact form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-7">
                  <h3 className="font-serif text-xl text-[#1E3A5F] mb-1">Contacter l&apos;agence</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Notre conseiller vous répondra sous 24h.
                  </p>

                  {!sent ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">
                          Nom complet *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jean Dupont"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8960C]/30 focus:border-[#B8960C]/60 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jean@exemple.fr"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8960C]/30 focus:border-[#B8960C]/60 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+33 6 00 00 00 00"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8960C]/30 focus:border-[#B8960C]/60 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder={`Bonjour, je suis intéressé(e) par "${property.title}"...`}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8960C]/30 focus:border-[#B8960C]/60 transition-all resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-[#1E3A5F] text-white rounded-xl py-3.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#162e4d] transition-colors"
                      >
                        <Send size={15} />
                        Envoyer ma demande
                      </motion.button>

                      <p className="text-xs text-gray-400 text-center">
                        En envoyant ce formulaire, vous acceptez notre{" "}
                        <a href="#" className="text-[#B8960C] hover:underline">politique de confidentialité</a>.
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#B8960C]/10 flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="text-[#B8960C]" />
                      </div>
                      <h4 className="font-serif text-lg text-[#1E3A5F] mb-2">Message envoyé !</h4>
                      <p className="text-gray-400 text-sm">
                        Notre conseiller vous contactera dans les plus brefs délais.
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Quick contact */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="tel:+33142000000"
                    className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#1E3A5F] text-sm font-medium px-4 py-3 rounded-xl hover:border-[#1E3A5F]/30 hover:bg-gray-50 transition-all"
                  >
                    <Phone size={15} className="text-[#B8960C]" />
                    Appeler
                  </a>
                  <a
                    href="mailto:contact@vistaimmo.fr"
                    className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#1E3A5F] text-sm font-medium px-4 py-3 rounded-xl hover:border-[#1E3A5F]/30 hover:bg-gray-50 transition-all"
                  >
                    <Mail size={15} className="text-[#B8960C]" />
                    Email
                  </a>
                </div>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Réf. VISTA-{property.id.padStart(4, "0")} · Mis à jour le {new Date().toLocaleDateString("fr-FR")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={18} />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={22} />
            </button>

            <motion.img
              key={activeImage}
              src={property.images[activeImage]}
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                  className={`transition-all rounded-full ${
                    i === activeImage ? "w-6 h-2 bg-[#B8960C]" : "w-2 h-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
