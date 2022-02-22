import React from "react";
import AboutSection from "../components/sections/aboutSection";
import Contact from "../components/sections/contact";
import DisplayProjects from "../components/sections/displayProjects";
import Head from "../components/utility/head";
import HeroSection from "../components/sections/heroSection";
import Layout from "../components/layout/layout";
import MyTechStack from "../components/sections/myTechStack";

const IndexPage = () => {
  return (
    <Layout contentId="main">
      <Head title="Home" />
      <HeroSection />
      <main className="core-main" id="main">
        <AboutSection />
        <MyTechStack />
        <DisplayProjects direction="row" />
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;
