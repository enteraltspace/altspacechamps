import React from"react"
import "./community.css"
function Community(){
    return(<>
    <div className="community-div1">
        <h2 className="community-heading">
            Tokenomics
        </h2>
        <a href="#"><button className="community-button">Start Minting</button></a>
        <img src={require("./tokenomics.png")} className="community-img1"/>
    </div>
    <div className="community-div1">
        <img src={require("./circles.png")} className="community-img1"/>
    </div>
    </>)
}
export default Community
