import React from "react";
import NavigationBar from "../share/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../share/footer";

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="h-[calc(100vh-184px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
