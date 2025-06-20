import React from 'react';
import OurStorySection from '@/components/aboutus/ourStorySection';
import LeadershipSection from '@/components/aboutus/leadershipSection';
import VisionMissionSection from '@/components/aboutus/visionMissionSection';
import CoreValuesSection from '@/components/aboutus/coreValuesSection';
import QuickLinksSection from '@/components/aboutus/quickLinksSection';
import Project from '@/components/global/project';
import HeroSection from '@/components/global/heroSection';

const heroData = {
    backgroundImage: "/images/connect/background.jpg",
    title: "About Budventure Technologies!",
    description: `Budventure Technologies is the architect of your digital dreams, crafting IT solutions that turn imagination into innovation. With years of expertise, we offer specialised solutions that support your business objectives. We assist companies of all sizes in providing value to their business operatives, outpacing the competition, and experiencing rapid growth.`,
    image: "/images/about/sectionimg.webp",
};

function Page(props) {
    return (
        <>
            <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                image={heroData.image} />
            <OurStorySection />
            <LeadershipSection />
            <VisionMissionSection />
            <CoreValuesSection />
            <QuickLinksSection />
            <Project />
        </>
    );
}

export default Page;