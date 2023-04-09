import React from "react";
import "./roadmap.css";
function Roadmap() {
  return (
    <>
      <h1 className="roadmap-heading" id="roadmap">
        ROADMAP
      </h1>
      <div className="main-div">
        <div className="circular-div">
          <h2>1</h2>
        </div>
        <div className="rectangular-div">
          <p className="roadmap-text"><strong>PHASE 1 - Completed in Q2 2023</strong></p>
          <p className="roadmap-text">✓ Website Development</p>
          <p className="roadmap-text">✓ Create NFT Collection</p>
          <p className="roadmap-text">✓ Private Sale Open</p>
          <p className="roadmap-text">✓ Website to Mint NFTs</p>
        </div>
      </div>
      <div className="main-div">
        <div className="circular-div">
          <h2>2</h2>
        </div>
        <div className="rectangular-div">
          <p className="roadmap-text"><strong>PHASE 2 - Q3 2023</strong></p>
          <p className="roadmap-text">Exclusive Portal for Collaboration</p>
          <p className="roadmap-text">Free-Mint New NFTs</p>
          <p className="roadmap-text">Early invites & coupons to get NFTees</p>
        </div>
      </div>
      <div className="main-div">
        <div className="circular-div">
          <h2>3</h2>
        </div>
        <div className="rectangular-div">
          <p className="roadmap-text"><strong>PHASE 3 - Q4 2023</strong></p>
          <p className="roadmap-text">NFT Staking</p>
          <p className="roadmap-text">New Utilities for NFT holders</p>
          <p className="roadmap-text">Interact in NFT Game / Metaverse</p>
        </div>
      </div>
    </>
  );
}
export default Roadmap;
