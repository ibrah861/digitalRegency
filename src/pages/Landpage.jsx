import React from "react";
import { Link } from "react-router-dom";

// images
import image1 from "../assets/water.svg";
import mindset from "../assets/mindset.png";

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
            <Link to="/create">
              <button className="butt-property">Create blog</button>
            </Link>
          </p>

          <div className="flex-around">
            <div className="mind-text">
              <p>Smart mindset</p>
              <p>
                The way you think about yourself, your abilities, and the world
                around you.
              </p>
            </div>
            <div className="mind-img">
              <img src={mindset} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landpage;
