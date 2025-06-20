import DiscoverJoySection from '@/components/life/discoverJoySection';
import LifeImages from '@/components/life/lifeImages';
import LifeSection from '@/components/life/lifeSection';
import React from 'react';

function Page(props) {
    return (
        <>
            <LifeSection />
            <DiscoverJoySection />
            <LifeImages />
        </>
    );
}

export default Page;