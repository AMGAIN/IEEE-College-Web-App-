import { Injectable } from '@nestjs/common';

@Injectable()
export class MembershipService {
    getMembershipBenifits() {
        return [
            { id: 1, title: "Global Network", description: "Connect with 400,000+ IEEE members across 160+ countries and access the world's largest technical professional network." },
            { id: 2, title: "IEEE Xplore Access", description: "Full access to the IEEE Xplore digital library with 5M+ technical documents, journals, and conference proceedings." },
            { id: 3, title: "Career Development", description: "Exclusive career resources, mentorship programs, certifications, and professional development opportunities tailored for engineers." },
            { id: 4, title: "Events & Workshops", description: "Priority registration for IEEE-organized technical workshops, hackathons, seminars, and industry networking events." },
            { id: 5, title: "Student Discounts", description: "Discounted or free registration for major IEEE conferences and access to student-only grants and scholarships." },
            { id: 6, title: "Publications", description: "Access to IEEE Spectrum, Technology Navigator, and a curated library of technical and professional development content." },
        ]
    }
}
