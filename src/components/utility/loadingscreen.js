import React, { useEffect } from "react";
import anim from "../../images/animation.svg";
import "../../styles/loading/loading.scss";

const LoadingPage = () => {
  const start = typeof window !== "undefined" ? Date.now() : "";
  const handleLoading = () => {
    const loadScreen = document.querySelector(".loading");
    if (loadScreen) {
      const spinner = document.querySelector(".loading__spinner");
      const pageTitle = document.querySelector(".heroSection__title");
      const pageSubTitle = document.querySelector(".heroSection__subtitle");
      let loadTime = Date.now() - start;
      if (loadTime < 500) loadScreen.remove();
      spinner.style.animationDuration =
        loadTime + 1000 < 2000 ? loadTime + 1000 : 2000;
      loadScreen.style.animationDuration =
        loadTime + 100 < 600 ? loadTime + 100 : 600;
      loadScreen.style.animationDelay = loadTime + 900;
      setTimeout(() => {
        loadScreen.remove();
        if (pageTitle) pageTitle.style.animation = "fadeIn 1s ease-in-out";
        if (pageSubTitle)
          pageSubTitle.style.animation = "fadeIn 1s ease-in-out";
      }, loadTime + 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading());
    return () => window.removeEventListener("load", handleLoading());
  });

  return (
    <div className="loading">
      <div className="loading__spinner">
        <img src={anim} alt="loading animation" />
        <p id="load">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
