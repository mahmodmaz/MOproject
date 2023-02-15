import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <div
        style={{
          minHeight: `calc(100vh - 170px)`,
          marginTop: "70px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
