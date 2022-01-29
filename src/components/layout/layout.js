import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import LoadingPage from "../utility/loadingscreen";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Layout = ({ children, contentId }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        thresholds: 0.3,
      }
    );
    if (typeof window !== undefined) {
      const sections = document.querySelectorAll("section");
      if (sections) {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    }
  }, []);

  return (
    <div className="container" id="top">
      <AnchorLink to={`/#${contentId}`} className="secretbutton">
        Go to page's content
      </AnchorLink>
      <LoadingPage />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
