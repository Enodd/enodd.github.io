import React from "react";
import styled from "styled-components";
import { NavigationBar } from "./headerNav";
import { NavigationModel } from "../../../models/navigationModel/navigationModel";

const StyledHeader = styled.header`
  display: grid;
  grid-template-column: repeat(1fr, 10);
  justify-content: right;
  padding: 2rem 3rem;
  width: 100%;
  *{
    font-family: ${(props)=> props.theme.fonts.main};
  }
`;
const anchors: Array<NavigationModel> = [
  {
    name: "About me",
    path: "/#about",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "About me",
    path: "/#about",
  },
  {
    name: "About",
    path: "/#about",
  },
];
export const Header = () => {
  return (
    <StyledHeader>
      <NavigationBar navData={anchors} />
    </StyledHeader>
  );
};
