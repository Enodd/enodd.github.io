import React from "react";
import styled from "styled-components";
import MyForm from "../utility/myForm";
import SocialMedia from "../utility/socialMedia";

const Contact = () => {
  const StyledWrapper = styled.div`
    display: flex;
    @media (min-width: 640px) {
      flex-direction: row;
    }
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    width: 100%;
  `;
  return (
    <section className="section" id="contact">
      <h2 className="section__title">Let's keep in touch</h2>
      <StyledWrapper>
        <MyForm />
        <SocialMedia />
      </StyledWrapper>
    </section>
  );
};

export default Contact;
