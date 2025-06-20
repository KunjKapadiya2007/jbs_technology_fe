import React from 'react';
import AboutSection from '@/components/aboutus/aboutSection';
import OurStorySection from '@/components/aboutus/ourStorySection';
import LeadershipSection from '@/components/aboutus/leadershipSection';
import VisionMissionSection from '@/components/aboutus/visionMissionSection';
import CoreValuesSection from '@/components/aboutus/coreValuesSection';
import QuickLinksSection from '@/components/aboutus/quickLinksSection';
import Project from '@/components/global/project';

function Page(props) {
    return (
        <>
            <AboutSection/>
            <OurStorySection/>
            <LeadershipSection/>
            <VisionMissionSection/>
            <CoreValuesSection/>
            <QuickLinksSection/>
            <Project/>
        </>
    );
}

export default Page;