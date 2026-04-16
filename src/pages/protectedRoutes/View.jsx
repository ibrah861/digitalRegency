import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// pages
import ProjectName from "../../util/ProjectName";
import { navigationState } from "../../util/Context";

const View = () => {
  // states
  const [u, t] = useState("6");

  //   end of states

  // hooks
  const { postName, setPostName } = useContext(navigationState);

  //   function
  const createpost = () => {
    setPostName(true);
  };
  return (
    <>
      <div className="main">
        {postName && <ProjectName />}
        <div className="two-col mrg-top ">
          <div className="out-boder box-property box-height">
            <p>Post created</p>
            <div className="post-desc">
              <span>0</span>
            </div>
          </div>
          <div className="out-boder box-property box-height">
            <p>Post name</p>
            <div className="post-desc">
              <div className="flex margin-top">
                <button className="butt-property " onClick={createpost}>
                  Create name +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="single-col  box-property">
          <p className="mrg-btm bold-element">About post </p>
          <hr />
          <p className="both-mrg ">
            {false
              ? "No post has been created for now."
              : `About ${u} post has been created `}
          </p>
          <p className="bold-element current">Currect post</p>

          <p className="no-post">No new post created now !</p>

          <div>
            <p className="createPost">
              New post name called
              <span className="newPostname">"{"mynewpost"}"</span> has been
              created
            </p>

            <Link to="/post">
              <p className="view-post">View post</p>
            </Link>
          </div>
        </div>

        <div className="box-property">
          <p className="bold-element">Owner's Account Details</p>
          <div className="box-property">
            <p className="both-mrg">Owner's name : juma hatibu ali</p>
            <p className="both-mrg">Email ID : juma34@gmail.com</p>
          </div>
          <p className="bold-element">Owner's Post details</p>
          <div className="box-property">
            <p className="both-mrg">Total post 6</p>
            <p className="both-mrg">Last post : "Duckthesee"</p>
          </div>

          <div className="box-property">
            <p className="bold-element">Create Post</p>
            <div className="create-postname">
              <div>
                <p className="both-mrg">Post name : "mynewpost"</p>
              </div>
              <div className="dv">
                <Link to="/create">
                  <button className="butt-property">Create</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
