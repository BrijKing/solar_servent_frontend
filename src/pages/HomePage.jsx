import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HomeImage from "../components/HomeImage/HomeImage";
import Feature from "../components/Feature/Feature";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomeImage />
      <Feature />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
