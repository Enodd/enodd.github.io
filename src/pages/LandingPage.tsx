import { Layout } from "@layout/Layout";
import { HeroSection } from "@views/landingPage/heroSection";
import React from "react";

export const LandingPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};
