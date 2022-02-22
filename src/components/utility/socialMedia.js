import React from "react";
import MySocials from "../../data/socials";
import "../../styles/socials/socials.scss";

const SocialMedia = () => {
  return (
    <div className="socials">
      <h3 className="socials__header">My Socialmedia</h3>
      {MySocials.map((social) => {
        const { name, icon, link } = social;
        return (
          <a href={link} className="socials__contact">
            <img src={icon} alt={name} className="socials__icon" />
            <p className="socials__name">{name}</p>
          </a>
        );
      })}
    </div>
  );
};
export default SocialMedia;
