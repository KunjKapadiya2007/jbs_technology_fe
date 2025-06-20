import React from 'react';
import ConnectUs from "@/components/connect/connectUs";
import HeadquarterSection from "@/components/connect/headquarterSection";
import Meeting from "@/components/global/meeting";
import Presence from "@/components/global/presence";
import QuickLinks from "@/components/connect/quickLinks";
import SocialConnect from "@/components/connect/socialConnect";
import Project from "@/components/global/project";
import HeroSection from '@/components/global/heroSection';

const heroData = {
    backgroundImage: "/images/connect/background.jpg",
    title: "Connect with Us!",
    description: `We're thrilled to hear from you and eager to assist with any inquiries,
                            feedback, or concerns you might have. Our team is here to ensure you have
                            the best possible experience with our services.`,
    image: "/images/connect/sectionimg.png",
};

function Page(props) {
    return (
        <>
            <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                image={heroData.image} />
            <ConnectUs />
            <HeadquarterSection />
            <Meeting />
            <Presence />
            <QuickLinks />
            <SocialConnect />
            <Project />
        </>
    );
}

export default Page;