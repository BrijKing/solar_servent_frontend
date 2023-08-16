import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HomeImage from "../components/HomeImage/HomeImage";
import Features from "../components/Features/Features";
import FooterBar from "../components/Footer/FooterBar";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomeImage />
      {/* <Feature /> */}
      <Features />
      <FooterBar />
    </div>
  );
};

export default HomePage;
