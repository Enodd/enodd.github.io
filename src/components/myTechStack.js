import React from "react";
import techstack from "../data/techstack";
import "../styles/techstack/techstack.scss";

const MyTechStack = () => {
  return (
    <section className="technologies section" id="technologies">
      <h2 className="section__title">
        Things I know and feel comfortable with.
      </h2>
      <p className="section__description">
        Here are things that I'm good at, or I have certain knowledge to feel
        comfortable with using it.
      </p>
      <div className="technologies__showcase">
        {techstack.map((tech) => {
          const { name, icon } = tech;
          return (
            <article className="technologies__showcase__element">
              <img src={`${icon}`} alt={name} />
              <p>{name}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MyTechStack;
