import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () =>{

    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
        }
      }
    }
    `)
    const anchors = [
        {
            name: "Projects",
            destination: "#projects"
        },
        {
            name: "Posts",
            destination: "#posts"
        },
        {
            name: "About",
            destination: "#about"
        },
        {
            name: "Contact",
            destination: "#contact"
        }
    ]
    function smoothNav(){
        const coreHeader = document.querySelector("header")
        const links = coreHeader.querySelectorAll("a")
        links.forEach(link=>{
            link.addEventListener("click", function(e){
                e.preventDefault();
                const target = document.querySelector(`[href="${this.getAttribute("href")}"]`)
                target.scrollIntoView({ behavior: "smooth"})
            })
        })
    }

    useEffect(()=>{
        smoothNav();
    },[])
    return(
        <header>
            <img src="#" alt="logo"/>
            <h1>
                {data.site.siteMetadata.title}
            </h1>
            <nav>
                <ul>
                    {
                        anchors.map((anchor) => {
                            const {name, destination} = anchor
                            return(
                                <li>
                                    <a href={destination}>
                                        {name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header