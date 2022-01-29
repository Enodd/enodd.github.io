import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


const Head = ({title}) =>{

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    coreTitle
                }
            }
        }
    `)

    return(
        <Helmet>
            <title>
                {`${title} | ${data.site.siteMetadata.coreTitle}`}
            </title>
            <meta charset="UTF-8" />
            <script src="https://kit.fontawesome.com/7afa62f1bd.js" crossorigin="anonymous"></script>
        </Helmet>
    )
}

export default Head