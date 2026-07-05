'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/Data";
import PageHero from "@/components/PageHero";

const CATEGORIES = ["All", "IEEE Events", "Students", "Workshops", "Coding Competitions"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof GALLERY_IMAGES)[0]>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="py-20 lg:py-0 bg-background">
        <PageHero
          title="Gallery"
          label="Gallery"
          image="/images/about-hero.jpg"
          description="A visual journey through IEEE EEC's workshops, events, competitions, and community moments."
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                  ? "bg-[#00629B] text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                onClick={() => setLightbox(img)}
                className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video group cursor-pointer"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <div>
                    <p className="text-white text-xs font-semibold">{img.alt}</p>
                    <p className="text-white/70 text-xs">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full rounded-2xl overflow-hidden bg-gray-900"
          >
            <img src={lightbox.src.replace("w=600&h=420", "w=1200&h=800")} alt={lightbox.alt} className="w-full" />
            <div className="p-4">
              <p className="text-white font-semibold">{lightbox.alt}</p>
              <p className="text-gray-400 text-sm">{lightbox.category}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
