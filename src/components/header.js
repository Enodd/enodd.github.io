import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../images/icons/enoddlogo.svg";
import "../styles/header/header.scss";

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
      name: "Home",
      destination: "",
    },
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
  const win = typeof window !== "undefined" ? window.location.pathname : "";

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

  useEffect(() => {
    window.addEventListener("scroll", navLogic);
    return () => window.removeEventListener("scroll", navLogic);
  });

  return (
    <header className="core-header">
      <nav className="navigation">
        <div className="core-header__titlewrapper">
          <img src={logo} alt="logo" class="logo" />
          <h1 className="core-header__title">{data.site.siteMetadata.title}</h1>
        </div>
        <ul className="navigation__list">
          {anchors.map((anchor) => {
            const { name, destination } = anchor;
            if (`/${destination}` !== win) {
              return (
                <li className="navigation__element">
                  <a href={destination} className="navigation__anchor">
                    {name}
                  </a>
                </li>
              );
            }
          })}
        </ul>
        <div className="return">
          <a href="#" className="return__arrow">
            <i class="fas fa-angle-up"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
