import React from 'react';
import CareersSection from "@/components/careers/careersSection";
import Call from "@/components/careers/call";
import JobOpenings from "@/components/careers/jobOpenings";
import PerksBenefitsSection from "@/components/careers/perksBenefitsSection";
import Project from "@/components/global/project";
import LifeSection from '@/components/life/lifeSection';
import DiscoverJoySection from '@/components/life/discoverJoySection';
import LifeImages from '@/components/life/lifeImages';

function Page(props) {
    return (
        <>
        <LifeSection/>
        <DiscoverJoySection/>
        <LifeImages/>
            <CareersSection />
            <Call />
            <JobOpenings />
            <PerksBenefitsSection />
            <Project />
        </>
    );
}

export default Page;