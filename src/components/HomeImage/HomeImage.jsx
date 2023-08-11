import React from "react";

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
            style={{
              height: "100vh",
              width: "100vw",
              opacity: 0.7,
              transform: "rotateY(180deg)",
            }}
          />
        </div>

        <div
          className="absolute text-white rounded-md p-3 "
          style={{
            top: "85px",
            left: "20px",
            height: "85vh",
            width: "39vw",
            backgroundColor: "#001C30",
          }}
        >
         <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:"0 10px"}}> 
         <p className="text-6xl font-bold" > <span style={{color:"orange"}}>We Are The </span> <span >Solution</span></p>
         
          <p className="text-lg mt-4 " style={{textAlign:"justify"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla, orci vel suscipit feugiat, turpis tellus porttitor enim,
            placerat molestie ligula nisl imperdiet leo. Nunc euismod dignissim
            sem, molestie pulvinar lectus venenatis vitae. Sed nisl orci,
            viverra in maximus
          </p>
         </div>
        </div>
        <div
          style={{
            width: "400px",
            background: " rgb(0, 28, 48)",
            position: "absolute",
            top: "181px",
            left: "244px",
            /* z-index: 4, */
            height: "400px",
            transform: " rotate(45deg)",
            zIndex: "-1",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomeImage;
