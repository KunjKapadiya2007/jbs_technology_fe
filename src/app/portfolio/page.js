import React from 'react';
import CompletedProjects from "@/components/portfolio/completedProjects";
import HeroSection from '@/components/global/heroSection';

const heroData = {
    backgroundImage: "/images/connect/background.jpg",
    title: "Bridging Tech & Dreams: Our Portfolio",
    description: `We proudly present a curated collection of our most transformative software solutions and
                            applications. Explore our portfolio to witness how we've partnered with businesses, both big
                            and small, to translate their visions into reality. Join us on this journey of code,
                            creativity, and collaboration.`,
    image: "/images/portfolio/sectionimg.webp",
};

function Page(props) {
    return (
        <>
             <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                image={heroData.image} />
            <CompletedProjects/>
        </>
    );
}

export default Page;