import { React, useContext } from "react";

// states

// hooks

// components
import { navigationState } from "./Context";

const ProjectName = () => {
  const { setPostName } = useContext(navigationState);

  // function
  const closePostMenu = () => {
    setPostName(false);
  };

  return (
    <div className="project-name">
      <>
        <div className="main">
          <div className="create-postname">
            <p className="bold-element p-name">Create post name </p>
            <div>
              <span className="closer" onClick={closePostMenu}>
                &times;
              </span>
            </div>
          </div>

          <div className="flex-row ">
            <input
              type="text"
              className="both-mrg input-project "
              placeholder="Enter post name"
            />
            <button className="butt-property">
              {true ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectName;
