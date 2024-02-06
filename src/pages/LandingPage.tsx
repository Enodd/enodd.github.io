import { Layout } from '@layout/Layout';
import { HeroSection } from '@views/landingPage/heroSection';
import { Process } from '@views/landingPage/process';
import React from 'react';

export const LandingPage: React.FC = () => {
    return (
        <Layout>
            <HeroSection />
            <Process />
        </Layout>
    );
};
