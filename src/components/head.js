import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


const Head = () =>{

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
                {data.site.siteMetadata.coreTitle}
            </title>
        </Helmet>
    )
}

export default Head