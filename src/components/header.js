import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../images/icons/enoddlogo.svg";
import "../styles/header/header.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const anchors = [
    {
      name: "About",
      destination: "#about",
    },
    {
      name: "Technologies",
      destination: "#technologies",
    },
    {
      name: "Projects",
      destination: "#portfolio",
    },
    {
      name: "Contact",
      destination: "#contact",
    },
  ];
  let prevScrollpos = typeof window !== "undefined" ? window.pageYOffset : "";

  function navLogic() {
    const head = document.querySelector(".core-header");
    const returnToTop = document.querySelector(".return");
    const scrollVal = typeof window !== "undefined" ? window.scrollY : "";
    const opacityVal = 0 + scrollVal / window.innerHeight;
    head.style.backgroundColor = `rgba(0, 29, 61, ${opacityVal})`;
    if (window.pageYOffset < prevScrollpos || window.scrollY <= 0) {
      head.style.top = "0px";
    } else {
      head.style.top = "-100%";
    }
    if (window.scrollY > window.pageYOffset * 0.1) {
      returnToTop.style.display = "flex";
    } else {
      returnToTop.style.display = "none";
    }
    prevScrollpos = window.pageYOffset;
  }

  // !TODO create working smooth scrolling

  useEffect(() => {
    window.addEventListener("scroll", navLogic);
    return () => window.removeEventListener("scroll", navLogic);
  });

  return (
    <header className="core-header">
      <nav className="navigation">
        <div className="core-header__titlewrapper">
          <img src={logo} alt="logo" class="logo" />
          <h1 className="core-header__title">
            <a href="#top">{data.site.siteMetadata.title}</a>
          </h1>
        </div>
        <ul className="navigation__list">
          {anchors.map((anchor) => {
            const { name, destination } = anchor;
            return (
              <li className="navigation__element">
                <AnchorLink
                  to={`/${destination}`}
                  title={name}
                  className="navigation__anchor"
                  stripHash
                >
                  {name}
                </AnchorLink>
              </li>
            );
          })}
        </ul>
        <div className="return">
          <AnchorLink to="/#top" className="return__arrow navigation__anchor">
            <i class="fas fa-angle-up"></i>
          </AnchorLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
