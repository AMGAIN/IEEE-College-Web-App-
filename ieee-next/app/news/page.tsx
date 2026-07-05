'use client'
import { useState } from "react";
import { motion } from "framer-motion"; 
import { ArrowRight } from "lucide-react";
import { NEWS } from "@/Data";
import PageHero from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const CATEGORIES = ["All", ...Array.from(new Set(NEWS.map((n) => n.category)))];

export default function News() {
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = category === "All" ? NEWS : NEWS.filter((n) => n.category === category);

  return (
    <>
      <section className="py-20 lg:py-0 bg-background">
        <PageHero
          title="Latest News"
          label="News"
          image="/images/about-hero.jpg"
          description="Stay up to date with the latest achievements, announcements, and event recaps from the IEEE EEC Student Branch."
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
          <motion.div initial="hidden" >
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial="hidden"
            className="flex flex-wrap gap-2 justify-center mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === cat
                    ? "bg-[#00629B] text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured Article */}
          {filtered[0] && (
            <motion.article
              initial="hidden"
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm grid md:grid-cols-2"
            >
              <div className="aspect-video md:aspect-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={filtered[0].image}
                  alt={filtered[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/60 text-[#00629B] dark:text-blue-400 text-xs font-bold rounded-full">
                    {filtered[0].category}
                  </span>
                  <span className="text-gray-400 text-xs">{filtered[0].date}</span>
                </div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white mb-3 leading-snug">{filtered[0].title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {expanded === filtered[0].id ? filtered[0].content : filtered[0].excerpt}
                </p>
                <button
                  onClick={() => setExpanded(expanded === filtered[0].id ? null : filtered[0].id)}
                  className="inline-flex items-center gap-1.5 text-[#00629B] dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all w-fit"
                >
                  {expanded === filtered[0].id ? "Show Less" : "Read More"}{" "}
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${expanded === filtered[0].id ? "rotate-180" : ""}`} />
                </button>
              </div>
            </motion.article>
          )}

          {/* Remaining Articles */}
          {filtered.length > 1 && (
            <motion.div
              variants={stagger}
              initial="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.slice(1).map((article) => (
                <motion.article
                  key={article.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
                >
                  <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/60 text-[#00629B] dark:text-blue-400 text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug text-sm">{article.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">
                      {expanded === article.id ? article.content : article.excerpt}
                    </p>
                    <button
                      onClick={() => setExpanded(expanded === article.id ? null : article.id)}
                      className="inline-flex items-center gap-1.5 mt-4 text-[#00629B] dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      {expanded === article.id ? "Show Less" : "Read More"}{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
