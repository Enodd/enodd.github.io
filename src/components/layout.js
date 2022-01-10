import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LoadingPage from "./loadingscreen";

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
    <div className="container">
      <a href={`#${contentId}`} className="secretbutton">
        Go to page's content
      </a>
      <LoadingPage />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
