import * as React from "react"
import Head from "../components/head"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"

const IndexPage = () => {
 
  return (
    <Layout mainProp="tak" hero={HeroSection}>
      <Head title="Home" />
      <HeroSection />
      <main className="core-main">
        hello
      </main>
    </Layout>
  )
}

export default IndexPage
