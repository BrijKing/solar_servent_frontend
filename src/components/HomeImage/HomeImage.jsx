import React from "react";
import "./HomePage.module.css"

const HomeImage = () => {
  return (
    <div>
      <div>
        <div
          style={{
            background: "black",
            position: "absolute",
            top: 0,
            zIndex: -1,
          }}
        >
          <img
            src="HomePage_Image.png"
            alt=""
            style={{ height: "83vh", width: "100vw", opacity: 0.7 }}
          />
        </div>

        <div
          className="absolute text-white rounded-md p-3 "
          style={{ top: "140px", left: "20px", width: "30vw" }}
        >
          <p className="text-3xl font-bold ">We Are The Solution</p>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla, orci vel suscipit feugiat, turpis tellus porttitor enim,
            placerat molestie ligula nisl imperdiet leo. Nunc euismod dignissim
            sem, molestie pulvinar lectus venenatis vitae. Sed nisl orci,
            viverra in maximus
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
