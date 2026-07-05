'use client'
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { COMMITTEE } from "@/Data";
import PageHero from "@/components/PageHero";
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const ROLES_ORDER = ["Faculty Advisor", "Chair", "Co-Chair", "Secretary", "Treasurer", "Technical Head", "Event Coordinator", "Webmaster"];

export default function Committee() {
  const sorted = [...COMMITTEE].sort(
    (a, b) => ROLES_ORDER.indexOf(a.position) - ROLES_ORDER.indexOf(b.position)
  );
  const [advisor, ...rest] = sorted;

  return (
    <>
      <section className="py-20 lg:py-0 bg-background">
        <PageHero
          title="Our Team"
          label="Team"
          image="/images/about-hero.jpg"
          description="Meet the dedicated students and faculty who lead the IEEE EEC Student Branch, organizing events, driving initiatives, and representing our community."
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10">
          <motion.div initial="hidden" >

          </motion.div>

          {/* Faculty Advisor — featured card */}
          {advisor && (
            <motion.div
              initial="hidden"
              className="max-w-sm mx-auto mb-14"
            >
              <div className="bg-[#00629B] rounded-2xl overflow-hidden shadow-xl shadow-[#00629B]/20 text-center">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-0.5 bg-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                    {advisor.position}
                  </span>
                  <h3 className="font-black text-white text-xl mb-1">{advisor.name}</h3>
                  <p className="text-white/70 text-sm mb-3">{advisor.department}</p>
                  <a
                    href={`mailto:${advisor.email}`}
                    className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {advisor.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Student Officers */}
          <motion.div
            variants={stagger}
            initial="hidden"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {rest.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm text-center group"
              >
                <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-0.5 bg-blue-50 dark:bg-blue-950/50 text-[#00629B] dark:text-blue-400 text-xs font-bold rounded-full mb-1.5">
                    {member.position}
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-xs leading-tight mb-2">{member.department}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1 text-[#00629B] dark:text-blue-400 text-xs hover:underline"
                  >
                    <Mail className="w-3 h-3" />
                    Contact
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
