import React from 'react';
import CareersSection from "@/components/careers/careersSection";
import Call from "@/components/careers/call";
import JobOpenings from "@/components/careers/jobOpenings";
import PerksBenefitsSection from "@/components/careers/perksBenefitsSection";
import Project from "@/components/global/project";

function Page() {
    return (
        <>
            <CareersSection />
            <Call />
            <JobOpenings />
            <PerksBenefitsSection />
            <Project />
        </>
    );
}

export default Page;