import React from "react";

// images
import image1 from "../assets/water.svg";

const Landpage = () => {
  return (
    <>
      <div className="main">
        <div className="hero">
          <h1>
            Welcome to web blog site. Tell us what do you want to create today
          </h1>
          <p className="p1">
            Here you can Build, Update, and Delete your post with in a second
            for completely free. no charges will be deducted{" "}
          </p>
          <p className="p2">
            <button className="butt-property">Create blog</button>
          </p>

          <img src={image1} alt="water" className="water-img" />
        </div>
      </div>
    </>
  );
};

export default Landpage;
