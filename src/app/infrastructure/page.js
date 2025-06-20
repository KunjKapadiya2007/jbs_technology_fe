import React from 'react';
import InfrastructureTextSection from '@/components/infrastructure/infrastructureTextSection';
import OfficeFrameworkSection from '@/components/infrastructure/officeFrameworkSection';
import OfficeComfortSection from '@/components/infrastructure/officeComfortSection';
import Project from '@/components/global/project';
import HeroSection from '@/components/global/heroSection';

const heroData = {
    backgroundImage: "/images/connect/background.jpg",
    title: "Our Infrastructure",
    description: `Have a glimpse at our modernised infrastructural patterns with the latest amenities. Our office is a meticulously crafted environment that fosters creativity and collaboration for our talented workforce to work efficiently and comfortably.`,
    image: "/images/infrastructure/sectionimg.png",
};

function Page(props) {
    return (
        <>
             <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                image={heroData.image} />
            <InfrastructureTextSection/>
            <OfficeFrameworkSection/>
            <OfficeComfortSection/>
            <Project/>
        </>
    );
}

export default Page;