import React from 'react';
import ConnectUs from "@/components/connect/connectUs";
import HeadquarterSection from "@/components/connect/headquarterSection";
import Meeting from "@/components/global/meeting";
import Presence from "@/components/global/presence";
import QuickLinks from "@/components/connect/quickLinks";
import SocialConnect from "@/components/connect/socialConnect";
import Project from "@/components/global/project";
import ConnectSection from "@/components/connect/connectSection";

function Page(props) {
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

export default Page;