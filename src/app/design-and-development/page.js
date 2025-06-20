import TextandDesign from "@/components/designDevlopment/textandDesign";
import OurBranding from "@/components/designDevlopment/ourBranding";
import HeroSection from "@/components/global/heroSection";

const heroData = {
    backgroundImage: "/images/connect/background.jpg",
    title: "Join Our Team! Where Growth & Fun Awaits You!",
    description: `Our company culture is the heartbeat of who we are and how we operate, driving our shared vision and guiding our actions every day. We support maintaining a healthy balance between work and personal life. We support flexible work arrangements and provide resources that promote overall well-being.`,
    image: "/images/careers/sectionimg.png",
};

export default function Home() {
    return (
        <>
         <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                image={heroData.image} />
           <TextandDesign/>
            <OurBranding/>
        </>
    );
}
