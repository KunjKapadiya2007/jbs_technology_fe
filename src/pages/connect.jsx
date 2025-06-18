import ConnectSection from "@/components/connect/connectSection";
import ConnectUs from "@/components/connect/connectUs";
import HeadquarterSection from "@/components/connect/headquarterSection";
import Meeting from "@/components/global/meeting";
import Presence from "@/components/global/presence";
import QuickLinks from "@/components/connect/quickLinks";
import SocialConnect from "@/components/connect/socialConnect";
import Project from "@/components/global/project";

export default function connect() {
    return (
        <>
            <ConnectSection />
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
