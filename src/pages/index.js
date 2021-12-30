import React, { useEffect } from "react"
import AboutSection from "../components/aboutSection"
import DisplayProjects from "../components/displayProjects"
import Head from "../components/head"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout contentId="main">
      <Head title="Home"/>
      <HeroSection />
      <main className="core-main" id="main">
        <AboutSection />
        <DisplayProjects />
      </main>
    </Layout>
  )
}

export default IndexPage
