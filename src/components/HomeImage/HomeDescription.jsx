import React from "react";
import styles from "./HomePage.module.css";

const HomeDescription = () => {
  return (
    <div>
      <div
        className={`absolute text-white rounded-md p-3 ${styles.infoDiv}`}
        style={{
          top: "85px",
          left: "20px",
          height: "85vh",
          width: "39vw",
          backgroundColor: "#001C30",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 10px",
          }}
        >
          <p className="text-6xl font-bold">
            {" "}
            <span style={{ color: "orange" }}>Solar is the </span>{" "}
            <span>Solution</span>
          </p>

          <p className="text-lg mt-4 " style={{ textAlign: "justify" }}>
            Dive into the world of renewable energy with our cutting-edge Solar
            WebApp. Discover the immense potential of solar power, right at your
            fingertips. From real-time solar data and personalized energy
            simulations to step-by-step installation guides and expert insights,
            our WebApp is designed to empower you to make informed decisions
            about harnessing the sun's energy. Join us in the journey towards a
            brighter and more sustainable future.
          </p>
        </div>
      </div>
      <div className={`${styles.infoDiv} ${styles.infoDiv2}`}></div>
    </div>
  );
};

export default HomeDescription;
