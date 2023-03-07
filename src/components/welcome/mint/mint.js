import React, { useState } from "react";
import "./mint.css";
import { MintButton } from "./mintButton";
import Timer from "./timer";
function Mint() {
  const [launchText, setLaunchText] = useState("Launch Day-30 Nov 2022");

  return (
    <>
      <div className="mint-container">
        <img
          src={require("./image1.gif?auto=compress")}
          className="mint-image"
        />
        <h4>{launchText}</h4>
        <br />
        <Timer setLaunchText={setLaunchText} />
        <br />

        <br />
        <h5 className="current-price-text">Current-Price=15MATIC</h5>
        <MintButton />
      </div>
    </>
  );
}
export default Mint;
