import React, { useEffect } from 'react'
import "../styles/about/about.scss"
import { StaticImage} from "gatsby-plugin-image"
import { Link } from 'gatsby'

const AboutSection = () =>{
    
    useEffect(()=>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry=>{
                entry.target.classList.toggle("show", entry.isIntersecting)
                if(entry.isIntersecting) observer.unobserve(entry.target)
            })
         },{
             thresholds: 0.3,
         })
         if(typeof window !== undefined){
             const section = document.querySelector("#about")
             if(section){
                 observer.observe(section)
             }
         }
    },[])
    
    return(
        <section className="about" id="about">
            <div className="about__wrapper">
                <header className="about__header">
                    <div className="about__header--wrapper">
                    <h2>Damian "<span>Enodd</span>" Nowak</h2>
                    <p>Developer <span>/</span> Designer <span>/</span> Geek</p>
                    </div>
                    <div className="about__header--image">
                        <StaticImage src='../images/me.png' alt="me" />
                    </div>
                </header>
                <main className="about__main">
                    <p>
                        My name is Damian, I'm also known as Enodd <br /> and I'm selftaught <span>Front-end Developer</span>, that's trying his best in this industry
                    </p>
                </main>
                <footer className="about__footer">
                    <Link to="/portfolio" className="about__button">
                        Check out my portfolio!
                    </Link>
                </footer>
            </div>
        </section>
    )
}

export default AboutSection