import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import { NavigationModel } from "../../../models/navigationModel/navigationModel";
import styled from "styled-components";

const NavigationList = styled.ul`
  display: flex;
  gap: 2rem;
  grid-column: 4 / 10;
`
const StyledAnchorLink = styled(AnchorLink)`
  color: ${props => props.theme.colors.background.dark};
  font-size: ${props => props.theme.fonts.fontSizes.s500};
  text-decoration: none;
`


export const NavigationBar = (props: { navData: Array<NavigationModel> }) => {

  return (
    <nav>
        <NavigationList>
          {props.navData.map((anchor) => {
            const { name, path } = anchor;
            return <StyledAnchorLink to={path}>{name}</StyledAnchorLink>;
          })}
        </NavigationList>
    </nav>
  );
};
