import React from "react";
import "./community.css";
function Community() {
  return (
    <>
      <div className="community-div1">
        <h1 className="community-text">JOIN OUR COMMUNITY</h1>
        <a href=" https://discord.gg/ru6g942RKe" target="_blank">
          <button class="community-button">JOIN DISCORD</button>
        </a>
      </div>
      <div className="community-div1">
        <img src={require("./circles.png")} className="community-img1" />
      </div>
    </>
  );
}
export default Community;
