import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamService {
    getTeam() {
        return [
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
        ]
    }
}
