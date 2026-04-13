import React from "react";

// images
import image1 from "../assets/water.svg";

const Landpage = () => {
  return (
    <>
      <div className="main">
        <div className="hero">
          <h1>
            Integrated Water Service and property Tax Administration System
          </h1>
          <p className="p1">This system designed to track unpaid payment</p>
          <p className="p2">
            Service beneficiaries are highly recommed to pay early to avoid any
            inconvenience its nows
          </p>

          <img src={image1} alt="water" className="water-img" />
        </div>
      </div>
    </>
  );
};

export default Landpage;
