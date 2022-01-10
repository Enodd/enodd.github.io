import React from "react";
import AboutSection from "../components/aboutSection";
import Contact from "../components/contact";
import DisplayProjects from "../components/displayProjects";
import Head from "../components/head";
import HeroSection from "../components/heroSection";
import Layout from "../components/layout";
import MyTechStack from "../components/myTechStack";

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
