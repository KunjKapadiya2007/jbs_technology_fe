import HeroSection from '@/components/global/heroSection';
import DiscoverJoySection from '@/components/life/discoverJoySection';
import LifeImages from '@/components/life/lifeImages';
import React from 'react';

const heroData = {
    backgroundImage: "/images/connect/background.jpg",
    title: "Life At Budventure Technologies!",
    description: `Our company culture is the heartbeat of who we are and how we operate, driving our shared vision and guiding our actions every day. We support maintaining a healthy balance between work and personal life. We support flexible work arrangements and provide resources that promote overall well-being.`,
    image: "/images/life/sectionimg.webp",
};

function Page(props) {
    return (
        <>
             <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                image={heroData.image} />
            <DiscoverJoySection />
            <LifeImages />
        </>
    );
}

export default Page;