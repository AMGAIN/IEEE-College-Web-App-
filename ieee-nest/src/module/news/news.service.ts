import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getNews() {
        return [
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
        ]
    }
}
