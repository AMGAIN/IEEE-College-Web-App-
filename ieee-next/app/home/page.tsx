import React from 'react'
import Hero from '@/components/homePageComponents/Hero';
import UpcomingEvents from '@/components/homePageComponents/UpcomingEvents';

const page = () => {
    return (
        <div>
            <Hero />
            <UpcomingEvents />
            {/* <MembershipSection />
            <CTA /> */}
        </div>
    )
}

export default page