import React from "react";
import "../styles/heroSection/hero.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <h1 className="heroSection__title">
        Damian <span>"Enodd"</span> Nowak
      </h1>
      <h2 className="heroSection__subtitle">Front-End Developer</h2>
      <AnchorLink to="/#main">
        <i class="fas fa-angle-down" id="arrow"></i>
      </AnchorLink>
    </section>
  );
};

export default HeroSection;
