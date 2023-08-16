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
            <span style={{ color: "orange" }}>We Are The </span>{" "}
            <span>Solution</span>
          </p>

          <p className="text-lg mt-4 " style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla, orci vel suscipit feugiat, turpis tellus porttitor enim,
            placerat molestie ligula nisl imperdiet leo. Nunc euismod dignissim
            sem, molestie pulvinar lectus venenatis vitae. Sed nisl orci,
            viverra in maximus
          </p>
        </div>
      </div>
      <div
        className={`${styles.infoDiv} ${styles.infoDiv2}`}
      ></div>
    </div>
  );
};

export default HomeDescription;
