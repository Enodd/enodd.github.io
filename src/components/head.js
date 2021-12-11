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
        </Helmet>
    )
}

export default Head