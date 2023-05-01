import React from "react";
import NavigationBar from "../share/NavigationBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
