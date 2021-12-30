import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Projects from '../data/projects'


const DisplayProjects = ({ direction }) =>{
    useEffect(()=>{
        if(direction){
            const projectSection = document.querySelector("#projects")
            if(direction === 'row'){
                projectSection.className = "projectRow"
            }   
        }
    })
    return(
        <section id="projects" className="projectColumn">
            {
                Projects.map((project) =>{
                    const {name, description, banner} = project
                    const Article = styled.article`
                        background-image: url(${banner});
                        margin-bottom: 1rem;
                    `

                    return(
                        <Article>
                            <header>
                                <h2 className="project__title">
                                    {name}
                                </h2>
                            </header>
                            <main>
                                <p className="project__content">
                                    {description}
                                </p>
                            </main>
                            <footer>
                                <Link to="/">{name}</Link>
                            </footer>
                        </Article>
                    )
                })
            }
        </section>
    )
}

export default DisplayProjects
