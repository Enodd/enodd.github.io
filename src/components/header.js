import React, {useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import logo from "../images/icons/enoddlogo.svg"
import "../styles/header/header.scss"

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
    let prevScrollpos = typeof window !== 'undefined' ? window.pageYOffset : ""

    function navLogic(){
        const head = document.querySelector(".core-header")
        const scrollVal = typeof window !== 'undefined' ? window.scrollY : ""
        const opacityVal = (0 + (scrollVal / window.innerHeight))
        head.style.backgroundColor = `rgba(0, 29, 61, ${opacityVal})`

        if(window.pageYOffset < prevScrollpos){
            head.style.top = "0px"
        } else {
            head.style.top = "-100%"
        }
        prevScrollpos = window.pageYOffset
    }

    useEffect(()=>{
        window.addEventListener('scroll', navLogic)
        return () => window.removeEventListener('scroll', navLogic)
    })

    return(
        <header className="core-header">
            <nav className="navigation">
            <div className="core-header__titlewrapper">
                <img src={logo} alt="logo" class="logo"/>
                <h1 className="core-header__title">
                   {data.site.siteMetadata.title}
                </h1>    
            </div>
                <ul className="navigation__list">
                    {
                        anchors.map((anchor) => {
                            const {name, destination} = anchor
                            return(
                                <li className="navigation__element">
                                    <a href={destination} alt={name} className="navigation__anchor">
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