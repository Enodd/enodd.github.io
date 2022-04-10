import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
