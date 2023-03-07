import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./onramper.css";
function Onramper() {
  return (
    <>
      <Popup
        trigger={<button className="onramper-button"> Buy with INR</button>}
        position="center top"
      >
        <div className="onramper-div">
          <iframe
            className="onramper-iframe"
            src="https://widget.onramper.com?color=266677&apiKey=pk_prod_J0lpwkmUHJfr0f02N2lfDJe_wDsnSuIiRs0e7r9R2vo0"
            height="660px"
            width="482px"
            title="Onramper widget"
            frameborder="0"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
          ></iframe>
        </div>
      </Popup>
    </>
  );
}
export default Onramper;
