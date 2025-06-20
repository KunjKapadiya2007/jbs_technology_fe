import React from 'react';
import Services from '@/components/presence/services';
import Presence from '@/components/global/presence';
import Project from '@/components/global/project';
import HeroSection from '@/components/global/heroSection';

const heroData = {
    backgroundImage: "/images/connect/background.jpg",
    title: "Delivering Exceptional IT Solutions Globally",
    description: `With offices and partners strategically located across the globe, we have cultivated a truly international network. This network not only enhances our ability to understand local markets but also empowers us to leverage the best practices and insights from various corners of the globe.`,
    image: "/images/presence/sectionimg.png",
};

function Page(props) {
    return (
        <>
             <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                image={heroData.image} />
            <Services/>
            <Presence/>
            <Project/>
        </>
    );
}

export default Page;