import React from "react";
import "../../styles/about/about.scss";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

const AboutSection = () => {
  return (
    <section className="about section" id="about">
      <div className="about__wrapper">
        <header className="about__header">
          <div className="about__header--wrapper">
            <h2>
              Damian <span className="highlight--yellow">"Enodd"</span> Nowak
            </h2>
            <p>
              Developer <span className="highlight--yellow">/</span> Designer{" "}
              <span className="highlight--yellow">/</span> Geek
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
            <span className="highlight--yellow">Front-end Developer</span>,
            that's trying his best in this industry
          </p>
          <p>
            That would be some "catchy phrase" to describe myself as accurate as
            possible, but it's oversimplified. In reality I'm learning overall
            front-end development, because it fulfils me in terms of creation.
            Right now I still go to school, but that doesn't stop me from doing
            things I love.
          </p>
        </main>
        <footer className="about__footer">
          <AnchorLink
            to="/#portfolio"
            className="about__button about__button--primary"
          >
            Check out my portfolio!
          </AnchorLink>
          <Link
            to="/blog/introduction"
            className="about__button about__button--secondary"
          >
            Learn more about me!
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default AboutSection;
