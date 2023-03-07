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
          <h1>1</h1>
        </div>
        <div className="rectangular-div">
          <p className="roadmap-text">Website Development</p>
          <p className="roadmap-text">Create NFT Collection</p>
          <p className="roadmap-text">Private Sale Open</p>
          <p className="roadmap-text">Mint NFTs</p>
          <p className="roadmap-text">Build Community</p>
        </div>
      </div>
      <div className="main-div">
        <div className="circular-div">
          <h1>2</h1>
        </div>
        <div className="rectangular-div">
          <p className="roadmap-text">Marketplace Listings</p>
          <p className="roadmap-text">Airdrop NFTs of New Collections</p>
          <p className="roadmap-text">Exclusive Portal for Collaboration</p>
        </div>
      </div>
      <div className="main-div">
        <div className="circular-div">
          <h1>3</h1>
        </div>
        <div className="rectangular-div">
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
