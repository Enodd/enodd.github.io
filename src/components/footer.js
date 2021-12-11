import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () =>{
    
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)

    return(
        <footer>
            <h3>
                Made by{data.site.siteMetadata.author}
            </h3>
        </footer>
    )
}

export default Footer