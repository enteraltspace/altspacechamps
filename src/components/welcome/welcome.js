import React from "react";
import "./welcome.css";
import Mint from "./mint/mint.js";
function Welcome() {
  return (
    <>
      <div className="welcome-div1" id="home">
        <h1 className="welcome-heading">
          <p>Enter ALT Space</p>
        </h1>
        <h2 className="welcome-heading1">
          <p>as Champs</p>
        </h2>
        <div className="welcome-text">
          <p>
            ALT Champs collection is made up of 9,999 randomly generated NFTs
            that exist on the Polygon blockchain. The holders of these NFTs can
            participate in an exclusive token-gated lounge for tech and Web3
            enthusiasts.
          </p>

          <p>
            Timeline: We are having our <strong>private sale</strong> now with
            reduced pricing.
          </p>
        </div>
        <br />
      </div>
      <div className="welcome-div2">
        <Mint />
      </div>
    </>
  );
}
export default Welcome;
