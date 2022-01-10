import { Link } from "gatsby";
import React, { useEffect } from "react";
import styled from "styled-components";
import Projects from "../data/projects";
import "../styles/displayprojects/displayprojects.scss";

const DisplayProjects = ({ direction }) => {
  useEffect(() => {
    if (direction && direction === "row") {
      const projectSection = document.querySelector("#projects");
      projectSection.className = "projectRow";
    }
  });
  return (
    <section className="section" id="portfolio">
      <h2 className="section__title">Check out my projects</h2>
      <aside>
        <p className="section__description">
          Here are my projects that I did/I'm currently working on for myself to
          learn more about Front-End Development, Javascript Frameworks, Css
          pre-processors and many more.
        </p>
      </aside>
      <main id="projects" className="projectColumn">
        {Projects.map((project) => {
          const { name, description, banner } = project;
          const Article = styled.article`
            margin-bottom: 1rem;
            position: relative;
            background: #00356640;
            backdrop-filter: blur(5px);
            transition: 0.3s ease-in-out;
            &:hover {
              transform: scale(1.1);
            }
            &::before {
              content: "";
              background-image: url(${banner});
              background-size: cover;
              border-radius: inherit;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.4;
              z-index: -2;
            }
          `;

          return (
            <Article className="project__article">
              <h3 className="project__title">{name}</h3>
              <p className="project__content">{description}</p>
              <Link to="/" className="project__link">
                Check it now
              </Link>
            </Article>
          );
        })}
      </main>
    </section>
  );
};

export default DisplayProjects;
