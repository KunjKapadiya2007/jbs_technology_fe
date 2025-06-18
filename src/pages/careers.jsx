import React from 'react'
import CareersSection from "@/components/careers/careersSection";
import Call from "@/components/careers/call";
import PerksBenefitsSection from "@/components/careers/perksBenefitsSection";
import Project from "@/components/global/project";
import JobOpenings from "@/components/careers/jobOpenings";

const Careers = () => {
    return (
        <>
            <CareersSection/>
            <Call/>
            <JobOpenings/>
            <PerksBenefitsSection/>
            <Project/>
        </>
    )
}
export default Careers
