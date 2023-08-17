import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardComponent({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="cards"
      style={{
        padding: "50px 50px",
        display: "flex",
      }}
    >
      <div
        className="card feature-card text-2xl shadow-2xl"
        style={{
          width: "300px",
          height: "250px",
          background: isHovered ? "#1E3A8A" : "white", 
          transition:"0.5s",
          opacity: "0.9",
          borderRadius: "10px",
          color : isHovered ? 'white' : "#1E3A8A",
          scale : isHovered ? "1.1":"1"
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div style={{ padding: "25% 3%" }}>
          <div style={{ fontWeight: "" }}>
            <FontAwesomeIcon className="w-full h-9" icon={icon } />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className=" text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
