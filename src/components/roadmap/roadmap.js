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
          <p className="roadmap-text"><strong>PHASE 1 - Completed in Q1 2023</strong></p>
          <p className="roadmap-text">✓ Website Development</p>
          <p className="roadmap-text">✓ Create NFT Collection</p>
          <p className="roadmap-text">✓ Private Sale Open</p>
          <p className="roadmap-text">✓ Mint NFTs</p>
          <p className="roadmap-text">✓ Build Community</p>
        </div>
      </div>
      <div className="main-div">
        <div className="circular-div">
          <h2>2</h2>
        </div>
        <div className="rectangular-div">
          <p className="roadmap-text"><strong>PHASE 2 - Q2 2023</strong></p>
          <p className="roadmap-text">Exclusive Portal for Collaboration</p>
          <p className="roadmap-text">Free Mint NFTs of New Collections</p>
          <p className="roadmap-text"></p>
        </div>
      </div>
      <div className="main-div">
        <div className="circular-div">
          <h2>3</h2>
        </div>
        <div className="rectangular-div">
          <p className="roadmap-text"><strong>PHASE 3 - Q3 2023</strong></p>
          <p className="roadmap-text">NFT Staking</p>
          <p className="roadmap-text">NFT Passive incomes</p>
          <p className="roadmap-text">New Utilities for NFT holders</p>
          <p className="roadmap-text">Interact in Metaverse</p>
        </div>
      </div>
    </>
  );
}
export default Roadmap;
