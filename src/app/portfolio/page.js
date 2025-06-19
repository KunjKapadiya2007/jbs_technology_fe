import React from 'react';
import ProtfolioSection from "@/components/portfolio/protfolioSection";
import CompletedProject from "@/components/home/completedProject";
import CompletedProjects from "@/components/portfolio/completedProjects";

function Page(props) {
    return (
        <>
            <ProtfolioSection/>
            <CompletedProjects/>
        </>
    );
}

export default Page;