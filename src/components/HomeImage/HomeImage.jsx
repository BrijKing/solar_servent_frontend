import React from "react";
import HomeDescription from "./HomeDescription";

const HomeImage = () => {
  return (
    <div>
      <div
        style={{
          background: "black",
          top: 0,
          zIndex: -1,
        }}
      >
        <img
          src="HomePage_Image.png"
          alt=""
          style={{
            height: "88vh",
            width: "100vw",
            opacity: 0.7,
            transform: "rotateY(180deg)",
          }}
        />
      </div>
      <HomeDescription />
    </div>
  );
};

export default HomeImage;
