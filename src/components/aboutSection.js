import React from 'react'
import me from '../images/me.png'

const AboutSection = () =>{
    return(
        <section className="about">
            <header className="about__header">
                <div className="about__header--wrapper">
                <h2>Damian "<span>Enodd</span>" Nowak</h2>
                <p>Developer <span>/</span> Designer <span>/</span> Geek <span>/</span> Mountain Guys</p>
                </div>
                <div className="about__header--image">
                    {
                        /*
                            TODO Gatsby image optimization, to include it into profile pic
                        */
                    }
                    <img src={me} alt="me" />
                </div>
            </header>
            <main className="about__main">
                <p>
                    My name is Damian, I'm also known as Enodd and I'm selftaught <span>Front-end Developer</span>, that's trying his best in this industry
                </p>
            </main>
        </section>
    )
}

export default AboutSection