import React from 'react';
import InfrastructureSection from '@/components/infrastructure/infrastructureSection';
import InfrastructureTextSection from '@/components/infrastructure/infrastructureTextSection';
import OfficeFrameworkSection from '@/components/infrastructure/officeFrameworkSection';
import OfficeComfortSection from '@/components/infrastructure/officeComfortSection';
import Project from '@/components/global/project';

function Page(props) {
    return (
        <>
            <InfrastructureSection/>
            <InfrastructureTextSection/>
            <OfficeFrameworkSection/>
            <OfficeComfortSection/>
            <Project/>
        </>
    );
}

export default Page;