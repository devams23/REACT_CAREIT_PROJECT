import { Outlet } from "react-router";
import Home from "./Home/Home";
import Footer from "./Footer";
import React from "react";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
