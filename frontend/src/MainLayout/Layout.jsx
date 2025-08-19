import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="px-4 py-4 sm:px-28 sm:py-10 md:px-28 md:py-10 lg:px-28 lg:py-10">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
