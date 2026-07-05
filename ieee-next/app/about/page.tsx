'use client'
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Users, Zap, BookOpen } from "lucide-react";
import { STATS } from "@/Data";
import PageHero from '@/components/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeLeft = { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const fadeRight = { hidden: { opacity: 0, x: 36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const ACTIVITIES = [
  "Technical workshops and hands-on labs",
  "Guest lectures from industry professionals",
  "Competitive programming and hackathons",
  "Research seminars and paper presentations",
  "Industry visits and internship facilitation",
  "Community outreach and STEM awareness programs",
];

const PILLARS = [
  { icon: Zap, title: "Technical Excellence", description: "Hands-on workshops, competitions, and labs that build real engineering skills beyond the classroom." },
  { icon: Globe, title: "Global Connectivity", description: "Direct access to IEEE's worldwide network of 400,000+ professionals and researchers across 160+ countries." },
  { icon: Users, title: "Community & Collaboration", description: "A vibrant student community that thrives on peer learning, teamwork, and mutual growth." },
  { icon: BookOpen, title: "Knowledge Resources", description: "IEEE Xplore access, technical journals, and curated learning materials for every level of student." },
];
const PageHeroData = [
  { title: 'About IEEE EEC', image: 'as', description: 'asl', label: 'asldfj' }
]
export default function About() {
  return (
    <>
      {/* About IEEE */}
      <section className="bg-background">

        <PageHero
          title="About IEEE EEC"
          label="About"
          image="/images/about-hero.jpg"
          description="Learn more about IEEE Everest Engineering College Student Branch."
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
            <motion.div
              initial="hidden"
            >
              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-[#00629B] dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                The Organization
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-5">
                About IEEE
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  The <strong className="text-gray-900 dark:text-white">Institute of Electrical and Electronics Engineers (IEEE)</strong>, pronounced "Eye-triple-E," is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                </p>
                <p>
                  Founded in 1963 through the merger of the American Institute of Electrical Engineers (AIEE) and the Institute of Radio Engineers (IRE), IEEE today commands a global membership exceeding 400,000 professionals across 160+ countries.
                </p>
                <p>
                  IEEE publishes nearly a third of the world's technical literature in electrical engineering, electronics, and computing. The IEEE Xplore digital library provides access to over 5 million documents including journals, conference papers, and standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=525&fit=crop&auto=format"
                alt="IEEE conference and global community"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* About EEC Branch */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/3] order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&h=525&fit=crop&auto=format"
                alt="IEEE EEC Student Branch members"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-[#00629B] dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                Our Branch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-5">
                IEEE EEC Student Branch
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                <p>
                  Established at <strong className="text-gray-900 dark:text-white">Everest Engineering College</strong> in Sanepa-02, Lalitpur, the IEEE EEC Student Branch has grown into one of Nepal's most active IEEE chapters since its founding.
                </p>
                <p>
                  We bridge the gap between academic theory and industry practice by organizing technical workshops, research seminars, competitive events, and industry collaborations — all designed to prepare students for globally competitive engineering careers.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {ACTIVITIES.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#00629B] flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.ieee.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00629B] hover:bg-[#004f7c] text-white font-semibold rounded-lg transition-all hover:gap-3"
              >
                Join Our Branch <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#00629B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {STATS.map((s) => (
              <motion.div key={s.id} className="text-center">
                <div className="text-4xl font-black text-white mb-1">
                </div>
                <div className="text-white/65 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" >

          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  <div className="w-11 h-11 bg-blue-50 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00629B]" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
