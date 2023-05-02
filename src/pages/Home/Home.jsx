import React from "react";
import NavigationBar from "../share/NavigationBar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../share/footer";
import Loader from "../loader/Loader";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
