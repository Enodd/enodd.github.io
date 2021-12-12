import * as React from "react"
import Head from "../components/head"
import HeroSection from "../components/heroSection"
import Layout from "../components/layout"

const IndexPage = () => {
 
  return (
    <Layout>
      <Head title="Home" />
      <HeroSection />
      <main className="core-main" id="main">
        hello
      </main>
    </Layout>
  )
}

export default IndexPage
