import { Injectable } from '@nestjs/common';

@Injectable()
export class GalleryService {
    getImages() {
        return [
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
        ]
    }
}
