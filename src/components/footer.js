import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import "../styles/footer/footer.scss"

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
        <footer className="core-footer">
            <h3 className="core-footer__author">
                <a href="https://github.com/Enodd">Made by {data.site.siteMetadata.author}</a>
            </h3>
        </footer>
    )
}

export default Footer