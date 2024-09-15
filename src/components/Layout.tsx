import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 py-16">
        <Navigation />
        <main className="flex-1 ml-64 p-4 overflow-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
