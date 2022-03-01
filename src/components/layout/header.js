import React, { useEffect, useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../../images/icons/enoddlogo.svg";
import "../../styles/header/header.scss";
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
      name: "Blog",
      destination: "#blog",
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
  const [show, setShow] = useState(false);
  const [men, setMen] = useState(false);
  const HeaderRef = useRef(null);
  const ReturnButtonRef = useRef(null);
  const MenuRef = useRef(null);
  const MenuListRef = useRef(null);
  const onClickHandler = () => {
    men
      ? (MenuRef.current.className = "fas fa-bars")
      : (MenuRef.current.className = "fas fa-times");
    if (MenuListRef.current != null) {
      MenuListRef.current.style.animation = "500ms hide";
      setTimeout(() => {
        setMen(!men);
      }, 500);
    } else {
      setMen(!men);
    }
  };

  function navLogic() {
    const scrollVal = typeof window !== "undefined" ? window.scrollY : "";
    const opacityVal = 0 + scrollVal / window.innerHeight;
    HeaderRef.current.style.backgroundColor = `rgba(0, 29, 61, ${opacityVal})`;
    if (window.pageYOffset < prevScrollpos || window.scrollY <= 0) {
      HeaderRef.current.style.top = "0px";
    } else {
      HeaderRef.current.style.top = "-100%";
    }
    if (window.scrollY > window.innerHeight * 0.35) {
      ReturnButtonRef.current.style.display = "flex";
    } else {
      ReturnButtonRef.current.style.display = "none";
    }
    prevScrollpos = window.pageYOffset;
  }
  function resizeMen() {
    const windowWidth = window.matchMedia("(max-width: 39.9375em)");
    windowWidth.matches ? setShow(true) : setShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", navLogic);
    return () => window.removeEventListener("scroll", navLogic);
  });

  useEffect(() => {
    resizeMen();
    window.addEventListener("resize", resizeMen);
    return () => window.removeEventListener("resize", resizeMen);
  });

  return (
    <header className="core-header" ref={HeaderRef}>
      <nav className="navigation">
        <div className="core-header__titlewrapper">
          <img src={logo} alt="logo" class="logo" />
          <h1 className="core-header__title">
            <AnchorLink to="/#top">{data.site.siteMetadata.title}</AnchorLink>
          </h1>
        </div>
        {!show ? (
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
        ) : (
          <div className="navigation__burger">
            <i
              className="fas fa-bars"
              id="menu"
              ref={MenuRef}
              onClick={onClickHandler}
            ></i>
            {men && (
              <ul className="navigation__list--vertical" ref={MenuListRef}>
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
            )}
          </div>
        )}

        <div className="return" ref={ReturnButtonRef}>
          <AnchorLink to="/#top" className="return__arrow navigation__anchor">
            <i class="fas fa-angle-up"></i>
          </AnchorLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
