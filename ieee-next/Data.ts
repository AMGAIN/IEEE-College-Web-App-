// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Membership", href: "/membership" },
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  { id: 1, label: "Members", value: 36, suffix: "+" },
  { id: 2, label: "Events Held", value: 50, suffix: "+" },
  { id: 3, label: "Workshops", value: 20, suffix: "+" },
  { id: 4, label: "Competitions", value: 10, suffix: "+" },
  { id: 5, label: "Years Active", value: 5, suffix: "+" },
];

// ─── Committee ────────────────────────────────────────────────
export const COMMITTEE = [
  {
    id: 1,
    name: "Prabhakar Singh",
    position: "Faculty Advisor",
    department: "Department of Computer",
    email: "rpsharma@eec.edu.np",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Neha Pal",
    position: "Chair",
    department: "BE IT, 6th Sem",
    email: "chair.ieee.eec@gmail.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Rubika ",
    position: "Co-Chair",
    department: "B.E. IT, 4th Sem",
    email: "cochair.ieee.eec@gmail.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Pranit Mishra",
    position: "Secretary",
    department: "B.E. Computer, 4th Sem",
    email: "secretary.ieee.eec@gmail.com",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Rohan Shrestha",
    position: "Treasurer",
    department: "B.E. Electronics, 3rd Year",
    email: "treasurer.ieee.eec@gmail.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 6,
    name: "Anisha Poudel",
    position: "Technical Head",
    department: "B.E. Computer, 3rd Year",
    email: "tech.ieee.eec@gmail.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 7,
    name: "Bikash Tamang",
    position: "Event Coordinator",
    department: "B.E. Electronics, 2nd Year",
    email: "events.ieee.eec@gmail.com",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 8,
    name: "Suraj Amgain",
    position: "Webmaster",
    department: "B.E. Software, 4th Sem",
    email: "web.ieee.eec@gmail.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format",
  },
];

// ─── Events ───────────────────────────────────────────────────
export const EVENTS = [
  {
    id: 1,
    title: "Demo Event",
    date: "August 15, 2025",
    time: "9:00 AM – 5:00 PM",
    venue: "EEC Main Auditorium, Sanepa",
    description:
      "Annual technology summit bringing together engineers, researchers, and students to explore the latest breakthroughs in electrical and computer engineering. The summit features keynote addresses, panel discussions, and student paper presentations.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&h=360&fit=crop&auto=format",
    category: "Conference",
    status: "upcoming",
  },
  // {
  //   id: 2,
  //   title: "PCB Design Workshop",
  //   date: "July 28, 2025",
  //   time: "10:00 AM – 3:00 PM",
  //   venue: "Electronics Lab, Block C",
  //   description:
  //     "Hands-on workshop covering schematic capture, PCB layout, and manufacturing considerations using industry-standard EDA tools. Participants will design and simulate a real circuit board from scratch.",
  //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=360&fit=crop&auto=format",
  //   category: "Workshop",
  //   status: "upcoming",
  // },
  // {
  //   id: 3,
  //   title: "Robo-Wars 2025",
  //   date: "September 5, 2025",
  //   time: "11:00 AM – 6:00 PM",
  //   venue: "Sports Complex, EEC Campus",
  //   description:
  //     "Inter-college robotics competition challenging teams to design, build, and battle autonomous and semi-autonomous robots. Teams of 2–4 students compete across multiple categories.",
  //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=360&fit=crop&auto=format",
  //   category: "Competition",
  //   status: "upcoming",
  // },
  // {
  //   id: 4,
  //   title: "IoT Bootcamp",
  //   date: "June 20, 2025",
  //   time: "9:00 AM – 4:00 PM",
  //   venue: "Computer Lab, Block B",
  //   description:
  //     "Intensive two-day bootcamp on Internet of Things fundamentals. Participants learned ESP32 programming, sensor integration, cloud connectivity, and built a working smart home prototype.",
  //   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&h=360&fit=crop&auto=format",
  //   category: "Workshop",
  //   status: "past",
  // },
  // {
  //   id: 5,
  //   title: "AI & ML Seminar",
  //   date: "May 10, 2025",
  //   time: "2:00 PM – 5:00 PM",
  //   venue: "EEC Seminar Hall",
  //   description:
  //     "Expert-led seminar on recent advances in artificial intelligence and machine learning, featuring talks by industry professionals from leading tech companies operating in Nepal.",
  //   image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&h=360&fit=crop&auto=format",
  //   category: "Seminar",
  //   status: "past",
  // },
  // {
  //   id: 6,
  //   title: "Code Sprint 2025",
  //   date: "April 12, 2025",
  //   time: "8:00 AM – 8:00 PM",
  //   venue: "EEC Computer Labs",
  //   description:
  //     "12-hour competitive programming contest open to all EEC students. Problems ranged across data structures, algorithms, and real-world engineering problem solving.",
  //   image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=640&h=360&fit=crop&auto=format",
  //   category: "Competition",
  //   status: "past",
  // },
];

// ─── News ─────────────────────────────────────────────────────
export const NEWS = [
  {
    id: 1,
    title: "IEEE EEC Wins Best Student Branch Award at Nepal Section",
    category: "Achievement",
    date: "June 10, 2025",
    excerpt:
      "The IEEE EEC Student Branch has been recognized as the Best Student Branch at the IEEE Nepal Section Annual Meeting, honoring its outstanding contributions to technical education and community outreach.",
    content:
      "In a proud moment for Everest Engineering College, the IEEE EEC Student Branch was awarded the Best Student Branch recognition at the IEEE Nepal Section Annual Meeting held in Kathmandu. The award acknowledges the branch's year-round technical activities, record membership growth, and meaningful community engagement programs.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&h=420&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Inaugural AI & ML Seminar Draws Record Attendance",
    category: "Event Recap",
    date: "May 22, 2025",
    excerpt:
      "Over 200 students and faculty attended IEEE EEC's inaugural seminar on Artificial Intelligence and Machine Learning, featuring keynote speakers from leading tech companies in Kathmandu.",
    content:
      "The inaugural AI and Machine Learning seminar organized by IEEE EEC Student Branch broke all attendance records, drawing over 200 participants from engineering colleges across the Kathmandu Valley. The event featured presentations from data scientists at Fusemachines, Leapfrog Technology, and CloudFactory.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&h=420&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "New MoU Signed with Industry Partners for Student Internships",
    category: "Announcement",
    date: "April 30, 2025",
    excerpt:
      "IEEE EEC Student Branch has formalized partnerships with three leading engineering firms in Nepal, creating internship and mentorship opportunities for undergraduate members.",
    content:
      "Everest Engineering College's IEEE Student Branch signed formal Memoranda of Understanding with three leading technology companies in Nepal, establishing structured internship pathways and mentorship programs for current members. The partnerships open doors to summer internships in hardware design, embedded systems, and software engineering.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=420&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "IEEE EEC Hosts Its First 12-Hour Code Sprint",
    category: "Event Recap",
    date: "April 14, 2025",
    excerpt:
      "More than 80 students competed in IEEE EEC's first-ever Code Sprint, a high-intensity competitive programming marathon spanning 12 continuous hours.",
    content:
      "IEEE EEC Student Branch organized its inaugural Code Sprint — a 12-hour competitive programming marathon that drew over 80 participants across 25 teams. The contest featured problems of varying difficulty, from foundational algorithms to complex real-world engineering challenges. Team 'ByteCraft' from B.E. Computer 3rd year took the top prize.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=700&h=420&fit=crop&auto=format",
  },
];

// ─── Gallery ──────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=420&fit=crop&auto=format", alt: "IEEE Tech Summit", category: "IEEE Events" },
  { id: 2, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=420&fit=crop&auto=format", alt: "PCB Design Workshop", category: "Workshops" },
  { id: 3, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=420&fit=crop&auto=format", alt: "Students collaborating", category: "Students" },
  { id: 4, src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=420&fit=crop&auto=format", alt: "Robotics Competition", category: "Coding Competitions" },
  { id: 5, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=420&fit=crop&auto=format", alt: "Team project", category: "Students" },
  { id: 6, src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=420&fit=crop&auto=format", alt: "Code Sprint", category: "Coding Competitions" },
  { id: 7, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=420&fit=crop&auto=format", alt: "IoT Bootcamp", category: "Workshops" },
  { id: 8, src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=420&fit=crop&auto=format", alt: "AI Seminar", category: "IEEE Events" },
  { id: 9, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=420&fit=crop&auto=format", alt: "Award Ceremony", category: "IEEE Events" },
  { id: 10, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=420&fit=crop&auto=format", alt: "EEC Campus", category: "Students" },
  { id: 11, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=420&fit=crop&auto=format", alt: "MoU Signing", category: "IEEE Events" },
  { id: 12, src: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=420&fit=crop&auto=format", alt: "Hackathon night", category: "Coding Competitions" },
];

// ─── Membership Benefits ──────────────────────────────────────
export const BENEFITS = [
  { id: 1, title: "Global Network", description: "Connect with 400,000+ IEEE members across 160+ countries and access the world's largest technical professional network." },
  { id: 2, title: "IEEE Xplore Access", description: "Full access to the IEEE Xplore digital library with 5M+ technical documents, journals, and conference proceedings." },
  { id: 3, title: "Career Development", description: "Exclusive career resources, mentorship programs, certifications, and professional development opportunities tailored for engineers." },
  { id: 4, title: "Events & Workshops", description: "Priority registration for IEEE-organized technical workshops, hackathons, seminars, and industry networking events." },
  { id: 5, title: "Student Discounts", description: "Discounted or free registration for major IEEE conferences and access to student-only grants and scholarships." },
  { id: 6, title: "Publications", description: "Access to IEEE Spectrum, Technology Navigator, and a curated library of technical and professional development content." },
];
