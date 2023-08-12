import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HomeImage from "../components/HomeImage/HomeImage";
import Features from "../components/Features/Features";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomeImage />
      <Features />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
