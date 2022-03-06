import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const BlogPostHero = ({ banner, postTitle }) => {
  const StyledHero = styled.section`
    width: 100%;
    height: 35vh;
    display: block;
    position: relative;
    text-align: center;
  `;
  const StyledTextHeader = styled.h2`
    margin-top: 6rem;
    color: white;
    font-size: clamp(2.67rem, 2.07rem + 3vw, 4.21rem);
  `;
  const StyledImage = styled(GatsbyImage)`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.35;
    z-index: -1;
  `;
  return (
    <StyledHero>
      <StyledTextHeader>{postTitle}</StyledTextHeader>
      <StyledImage image={banner} alt={postTitle} />
    </StyledHero>
  );
};
export default BlogPostHero;
