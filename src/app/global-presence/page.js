import React from 'react';
import PresenceSection from '@/components/presence/presenceSection';
import Services from '@/components/presence/services';
import Presence from '@/components/global/presence';
import Project from '@/components/global/project';

function Page(props) {
    return (
        <>
            <PresenceSection/>
            <Services/>
            <Presence/>
            <Project/>
        </>
    );
}

export default Page;