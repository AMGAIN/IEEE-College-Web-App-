import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
    getEvent() {
        return [
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
            }
        ]
    }
}
