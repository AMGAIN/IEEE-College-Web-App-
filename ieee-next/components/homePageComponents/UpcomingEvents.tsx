import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

import {EVENTS} from '@/Data'
// import { SectionTitle, useScrollTrigger } from "../shared";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
};

export default function UpcomingEvents() {
  const upcoming = EVENTS.filter((event) => event.status === "upcoming");

  return (
    // <section  className="py-20 lg:py-28 bg-background">
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <motion.div
    //       initial="hidden"
    //     >

    //     </motion.div>

    //     <motion.div
    //       variants={stagger}
    //       initial="hidden"
    //       className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
    //     >
    //       {upcoming.map((event) => (
    //         <motion.article
    //           key={event.id}
    //           whileHover={{
    //             y: -5,
    //             transition: { duration: 0.2 },
    //           }}
    //           className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col"
    //         >
    //           <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
    //             <img
    //               src={event.image}
    //               alt={event.title}
    //               className="w-full h-full object-cover"
    //               loading="lazy"
    //             />

    //             <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#00629B] text-white text-xs font-bold rounded-full">
    //               {event.category}
    //             </span>
    //           </div>

    //           <div className="p-5 flex flex-col flex-1 gap-2">
    //             <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
    //               {event.title}
    //             </h3>

    //             <div className="space-y-1.5">
    //               <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    //                 <Calendar className="w-3.5 h-3.5 text-[#00629B]" />
    //                 <span>{event.date}</span>
    //               </div>

    //               <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    //                 <Clock className="w-3.5 h-3.5 text-[#00629B]" />
    //                 <span>{event.time}</span>
    //               </div>

    //               <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    //                 <MapPin className="w-3.5 h-3.5 text-[#00629B]" />
    //                 <span>{event.venue}</span>
    //               </div>
    //             </div>

    //             <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
    //               {event.description}
    //             </p>

    //             <Link
    //               href="/events"
    //               className="inline-flex items-center gap-1.5 mt-2 text-[#00629B] dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
    //             >
    //               Learn More
    //               <ArrowRight className="w-3.5 h-3.5" />
    //             </Link>
    //           </div>
    //         </motion.article>
    //       ))}
    //     </motion.div>

    //     <div className="text-center">
    //       <Link
    //         href="/events"
    //         className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00629B] text-[#00629B] hover:bg-[#00629B] hover:text-white font-semibold rounded-lg transition-all"
    //       >
    //         View All Events
    //         <ArrowRight className="w-4 h-4" />
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <>
    <h1></h1>
    </>
  );
}