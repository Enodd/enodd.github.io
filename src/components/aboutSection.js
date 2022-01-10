import React from "react";
import "../styles/about/about.scss";
import { StaticImage } from "gatsby-plugin-image";

const AboutSection = () => {
  return (
    <section className="about section" id="about">
      <div className="about__wrapper">
        <header className="about__header">
          <div className="about__header--wrapper">
            <h2>
              Damian "<span>Enodd</span>" Nowak
            </h2>
            <p>
              Developer <span>/</span> Designer <span>/</span> Geek
            </p>
          </div>
          <div className="about__header--image">
            <StaticImage
              src="../images/enoddavatar.png"
              alt="Damian Nowak author of website"
            />
          </div>
        </header>
        <main className="about__main">
          <p>
            My name is Damian, I'm also known as Enodd <br /> and I'm selftaught{" "}
            <span>Front-end Developer</span>, that's trying his best in this
            industry
          </p>
        </main>
        <footer className="about__footer">
          <a href="#portfolio" className="about__button">
            Check out my portfolio!
          </a>
        </footer>
      </div>
    </section>
  );
};

export default AboutSection;
