'use client'
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, BookOpen, Award, Star, Users, Zap } from "lucide-react";
import { BENEFITS } from "@/Data";
import PageHero from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const BENEFIT_ICONS = [Globe, BookOpen, Award, Star, Users, Zap];

const STEPS = [
  {
    step: "01",
    title: "Create an IEEE Account",
    description: "Visit ieee.org and create a free account to begin the membership application process.",
  },
  {
    step: "02",
    title: "Choose Student Membership",
    description: "Select the IEEE Student Membership plan — significantly discounted for full-time students at accredited institutions.",
  },
  {
    step: "03",
    title: "Complete the Application",
    description: "Fill in your academic details, program of study, and institution information to verify student status.",
  },
  {
    step: "04",
    title: "Join the EEC Branch",
    description: "Once your IEEE membership is active, connect with us at ieee.eec.studentchapter@gmail.com to join the EEC Student Branch.",
  },
];

const FAQS = [
  {
    q: "How much does IEEE student membership cost?",
    a: "IEEE Student Membership is approximately USD 32/year for students in developing countries. Contact us for the exact current rate and available fee waivers.",
  },
  {
    q: "Do I need to be an IEEE member to attend EEC events?",
    a: "Most of our events are open to all EEC students. However, IEEE members get priority registration, discounts, and exclusive access to some workshops.",
  },
  {
    q: "What is the difference between IEEE membership and branch membership?",
    a: "IEEE membership is the global paid subscription. Branch membership refers to actively participating in IEEE EEC activities. You can participate locally without a paid global membership, but we encourage joining IEEE for the full benefits.",
  },
  {
    q: "Can I get financial assistance to join IEEE?",
    a: "Yes. IEEE offers fee waivers for students in financial need. Additionally, IEEE EEC periodically arranges subsidized memberships for active branch participants. Contact us to learn more.",
  },
];

export default function Membership() {
  return (
    <>

      {/* Benefits */}
      <section className="py-20 lg:py-0 bg-background">
        <PageHero
          title="Join IEEE"
          label="Membership"
          image="/images/about-hero.jpg"
          description="Become part of the world's largest technical professional organization and unlock a lifetime of opportunities, resources, and global connections."
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
          <motion.div initial="hidden" >

          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {BENEFITS.map((b, i) => {
              const Icon = BENEFIT_ICONS[i] || Globe;

              return (
                <motion.div
                  key={b.id}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.25 },
                  }}
                  className="
        group
        relative
        overflow-hidden
        rounded-2xl
        p-6
        bg-gradient-to-br
        from-[#062B52]
        via-[#0A3D73]
        to-[#00629B]
        border border-blue-700/40
        shadow-lg
        hover:shadow-blue-900/40
        transition-all
        duration-300
      "
                >
                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl group-hover:bg-blue-400/20 transition-all duration-300" />

                  {/* Icon */}
                  <div
                    className="
          relative
          z-10
          w-14
          h-14
          rounded-xl
          bg-white/10
          backdrop-blur-sm
          border border-white/10
          flex
          items-center
          justify-center
          mb-5
          group-hover:bg-white
          transition-all
          duration-300
        "
                  >
                    <Icon className="w-7 h-7 text-white group-hover:text-[#00629B]" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                    {b.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-blue-100 leading-relaxed text-sm">
                    {b.description}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-white
          group-hover:w-full
          transition-all
          duration-300
        "
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden">
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            className="space-y-6"
          >
            {STEPS.map((s, i) => (
  <motion.div
    key={s.step}
    whileHover={{
      y: -8,
      scale: 1.02,
      transition: { duration: 0.25 },
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      p-6
      bg-gradient-to-br
      from-[#062B52]
      via-[#0A3D73]
      to-[#00629B]
      border border-blue-700/40
      shadow-lg
      hover:shadow-blue-900/40
      transition-all
      duration-300
      flex
      gap-5
      items-start
    "
  >
    {/* Background Glow */}
    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl group-hover:bg-blue-400/20 transition-all duration-300" />

    {/* Step Number */}
    <div
      className="
        relative
        z-10
        w-14
        h-14
        rounded-xl
        bg-white/10
        backdrop-blur-sm
        border border-white/10
        flex
        items-center
        justify-center
        flex-shrink-0
        transition-all
        duration-300
        group-hover:bg-white
      "
    >
      <span className="text-lg font-black text-white group-hover:text-[#00629B]">
        {s.step}
      </span>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-white mb-2">
        {s.title}
      </h3>

      <p className="text-blue-100 text-sm leading-relaxed">
        {s.description}
      </p>
    </div>

    {/* Bottom Accent */}
    <div
      className="
        absolute
        bottom-0
        left-0
        h-1
        w-0
        bg-white
        group-hover:w-full
        transition-all
        duration-300
      "
    />
  </motion.div>
))}
          </motion.div>

          <motion.div
            initial="hidden"
            className="text-center mt-10"
          >
            <a
              href="https://www.ieee.org/membership/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00629B] hover:bg-[#004f7c] text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-[#00629B]/25"
            >
              Start Your Application <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" >
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            className="space-y-4"
          >
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00629B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{faq.q}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
