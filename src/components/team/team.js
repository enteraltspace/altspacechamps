import React from "react";
import "./team.css";
function Team() {
  return (
    <div className="team" id="team">
      <h1 className="team-heading">Meet our Team</h1>
      <span className="team-span">
        <img
          src={require("./image1.png?auto=compress")}
          className="team-image"
        />
        <span className="team-name">
          <h3 className="team-text">Seshu Karthick</h3>
          <h5 className="team-text">Founder</h5>
          <a href="https://www.linkedin.com/in/seshukarthick/" target="_blank">
            <img
              src={require("./linkedinlogo.png?auto=compress")}
              className="linkedin-logo"
            />
          </a>
        </span>
      </span>
      <span className="team-span">
        <img
          src={require("./image2.png?auto=compress")}
          className="team-image"
        />
        <span className="team-name">
          <h3 className="team-text">T.N.Rao</h3>
          <h5 className="team-text">Investor</h5>
          <a href="#" target="_blank">
            <img
              src={require("./linkedinlogo.png?auto=compress")}
              className="linkedin-logo"
            />
          </a>
        </span>
      </span>
      <span className="team-span">
        <img
          src={require("./image3.png?auto=compress")}
          className="team-image"
        />
        <span className="team-name">
          <h3 className="team-text">Gireesh</h3>
          <h5 className="team-text">Developer</h5>
          <a
            href="https://www.linkedin.com/in/gireeshredy
"
            target="_blank"
          >
            <img
              src={require("./linkedinlogo.png?auto=compress")}
              className="linkedin-logo"
            />
          </a>
        </span>
      </span>
      <br />
      <span className="team-span">
        <img
          src={require("./imageg4.png?auto=compress")}
          className="team-image"
        />
        <span className="team-name">
          <h3 className="team-text">Dhanush Waran</h3>
          <h5 className="team-text">Designer</h5>
          <a href="#" target="_blank">
            <img
              src={require("./linkedinlogo.png?auto=compress")}
              className="linkedin-logo"
            />{" "}
          </a>
        </span>
      </span>
      <span className="team-span">
        <img
          src={require("./image4.png?auto=compress")}
          className="team-image"
        />
        <span className="team-name">
          <h3 className="team-text">Sachin</h3>
          <h5 className="team-text">Commu coo. </h5>

          <a
            href="https://www.linkedin.com/in/sachin-s-5724841b4/"
            target="_blank"
          >
            <img
              src={require("./linkedinlogo.png")}
              className="linkedin-logo"
            />
          </a>
        </span>
      </span>

      <span className="team-span">
        <img
          src={require("./image6.png?auto=compress")}
          className="team-image"
        />
        <span className="team-name">
          <h3 className="team-text">Kiran</h3>
          <h5 className="team-text">Web3 Mar.</h5>
          <a href="https://www.linkedin.com/in/kirangowtham/" target="_blank">
            <img
              src={require("./linkedinlogo.png?auto=compress")}
              className="linkedin-logo"
            />
          </a>
        </span>
      </span>
    </div>
  );
}
export default Team;
