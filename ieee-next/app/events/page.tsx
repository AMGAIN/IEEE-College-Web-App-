'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { EVENTS } from "@/Data";
import PageHero from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const CATEGORIES = ["All", "Conference", "Workshop", "Seminar", "Competition"];
const FILTERS = ["All", "Upcoming", "Past"];

export default function Events() {
  const [category, setCategory] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = EVENTS.filter((e) => {
    const catMatch = category === "All" || e.category === category;
    const statusMatch = statusFilter === "All" || e.status === statusFilter.toLowerCase();
    return catMatch && statusMatch;
  });

  return (
    <>

      <section className=" bg-background">
        <PageHero
          title="Events & Workshops"
          label="Events"
          image="/images/about-hero.jpg"
          description="From technical workshops to competitive hackathons and industry conferences — explore all IEEE EEC events past, present, and upcoming."
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
          <motion.div initial="hidden" >
          </motion.div>

          {/* Filters */}
          <motion.div
            initial="hidden"
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setStatusFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${statusFilter === f
                      ? "bg-[#00629B] text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${category === c
                      ? "border-[#00629B] bg-blue-50 dark:bg-blue-950/50 text-[#00629B] dark:text-blue-400"
                      : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-[#00629B] hover:text-[#00629B]"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Events Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No events found for the selected filters.
            </div>
          ) : (
            <motion.div
              variants={stagger}
              initial="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((event) => (
                <motion.article
                  key={event.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 bg-[#00629B] text-white text-xs font-bold rounded-full">
                        {event.category}
                      </span>
                      <span
                        className={`px-2.5 py-1 text-xs font-bold rounded-full ${event.status === "upcoming"
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-white"
                          }`}
                      >
                        {event.status === "upcoming" ? "Upcoming" : "Past"}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-2">
                    <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">{event.title}</h3>
                    <div className="space-y-1.5">
                      {[
                        { Icon: Calendar, text: event.date },
                        { Icon: Clock, text: event.time },
                        { Icon: MapPin, text: event.venue },
                      ].map(({ Icon, text }) => (
                        <div key={text} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Icon className="w-3.5 h-3.5 text-[#00629B] flex-shrink-0" />
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{event.description}</p>
                    {event.status === "upcoming" && (
                      <a
                        href="https://www.ieee.org/membership/join"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-[#00629B] dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Register Now <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
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
