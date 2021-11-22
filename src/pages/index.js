import * as React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const IndexPage = () => {
  /*
  #projects
  #posts
  #about
  #contact
  */
  const elements = [
    "projects",
    "posts",
    "about",
    "contact"
  ]
  return (
    <Layout mainProp="tak">
      <Head />
      Hello There
      {
        elements.map((element) =>{
          return(
            <div id={element} style={{height: "100vh"}}>
              {element}
            </div>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage
