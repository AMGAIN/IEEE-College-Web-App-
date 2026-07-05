'use client'
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-[#001220]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="Engineering circuit board background"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#001220]/95 via-[#00629B]/55 to-[#001220]/90" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {[
            { code: "IEEE", sub: "Institute of Electrical and Electronic Engineering" },
            { code: "EEC", sub: "Everest Engineering College" },
          ].map((item, i) => (
            <div key={item.code} className="flex items-center gap-6">
              {i === 1 && <div className="w-px h-14 bg-white/20" />}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 border border-white/25 rounded-xl flex items-center justify-center backdrop-blur-sm mb-1.5">
                  <span className="text-white font-black text-base tracking-tight">{item.code}</span>
                </div>
                <span className="text-white/50 text-xs tracking-wide">{item.sub}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-6"
        >
          Welcome to IEEE
          <br />
          <span className="text-[#4db8ff]">EEC Student Branch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg sm:text-xl text-white/72 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fostering innovation, engineering excellence, and research collaboration at Everest Engineering College — connecting students with global opportunities in technology and professional development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.ieee.org/membership/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00629B] hover:bg-[#004f7c] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-xl shadow-[#00629B]/30"
          >
            Join IEEE <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-all hover:scale-105 backdrop-blur-sm"
          >
            Explore Events <Calendar className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
    </div>
  )
}

export default Hero