import * as React from "react"
import AboutSection from "../components/aboutSection"
import Head from "../components/head"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"

const IndexPage = () => {
 
  return (
    <Layout>
      <Head title="Home" />
      <HeroSection />
      <main className="core-main" id="main">
        {
          /*
            TODO About me component
          */
        }
        <AboutSection />
      </main>
    </Layout>
  )
}

export default IndexPage
