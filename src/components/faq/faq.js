import React, { useEffect, useState } from "react";
import "./faq.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Faq() {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");
    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");
      console.log(itemToggle);
      for (var i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  });

  return (
    <>
      <h1 className="faq-heading" id="faq">
        FAQ's
      </h1>
      <details open>
        <summary> What is ALT Space Champs NFT?</summary>
        <div className="faq__content">
          <p>
            It is 1 of unique 10,000 NFTs on the Polygon blockchain that will
            have future utilities for Web3 Builders.
          </p>
        </div>
      </details>
      <details>
        <summary>What is the story or ALT Space?</summary>
        <div className="faq__content">
          <p>
            ALT Space is a parallel universe that has unique characters called
            Captains, Champs, Cartoons and more. You can unlock characters by
            minting them, and start collaborating for your Web3 initiatives in
            multiple ways.
          </p>
        </div>
      </details>
      <details>
        <summary> How do I mint?</summary>
        <div className="faq__content">
          <p>
            Download the metamask.io extension for the Chrome/Brave browser or
            app on mobile. This will allow you to make purchases with MATIC and
            can be found in the extensions tab. You can purchase MATIC through
            the Metamask Wallet using Onramper.
          </p>
        </div>
      </details>
      <details>
        <summary> What type of wallet do I need to mint this NFT?</summary>
        <div className="faq__content">
          <p>
            One of the most common wallets that is compatible with Polygon MATIC
            is MetaMask.
          </p>
        </div>
      </details>
      <details>
        <summary>Where we can buy and sell NFTs?</summary>
        <div className="faq__content">
          <p>
            You can mint an ALT Space NFT from this website or purchase it from
            our verified collections on secondary marketplaces.
          </p>
        </div>
      </details>
      <details>
        <summary> Who is behind ALT Space?</summary>
        <div className="faq__content">
          <p>
            The ALT Space is founded by Seshu along with its investor T.N.Rao.
            Dhanush and Gireesh are our young & dynamic souls taking charge of
            design & development, while Sachin and Kiran handle the last mile.
          </p>
          <p>
            Seshu is an alumnus of University of Texas at Dallas, and Stanford
            Graduate School of Business. He is a parallel entrepreneur who is
            bullish about technology and works primarily on Marketing-tech,
            Edu-tech, and Web 3.0.
          </p>
        </div>
      </details>
      <details>
        <summary> Why is Transaction failing?</summary>
        <div className="faq__content">
          <p>
            <a
              href="https://metamask.zendesk.com/hc/en-us/articles/4402538041869-Error-ethjs-query-while-formatting-outputs-from-RPC-transaction-underpriced-error-"
              target="_blank"
              rel="noreferrer"
            >
              Follow this link
            </a>
          </p>
        </div>
      </details>
    </>
  );
}
export default Faq;
