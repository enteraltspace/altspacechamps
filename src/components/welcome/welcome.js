import React from "react";
import "./welcome.css";
import Mint from "./mint/mint.js";
function Welcome() {
  return (
    <>
      <div className="welcome-div1" id="home">
        <h1 className="welcome-heading">Enter ALT Space </h1>
        <h2 className="welcome-heading1">as Champs</h2>
        <div className="welcome-text">
          <p>
            ALT Space Champs collection is made up of 9,999 randomly generated
            NFTs that exist on the Polygon blockchain. The holders of Champs
            NFTs can participate in an exclusive token-gated lounge for tech and Web3 enthusiasts.
          </p>

          <p>
            Timeline: We are having our <strong>private sale</strong> now with
            reduced pricing. The <strong>public launch</strong> will be on Mar
            23, 2023.
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
