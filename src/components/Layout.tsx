import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
