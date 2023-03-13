import React from "react";
import './team.css'
function Team(){
    return(<div className="team" id="team">
    <h2 className="team-heading">Meet our Team</h2>
    <span className="team-span">
    <img src={require("./image1.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        Seshu Karthick
        </ h3 >
        <div className="team-text">Founder</div>
        <a href="https://www.linkedin.com/in/seshukarthick/" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    
    </span>
    <span className="team-span">
    <img src={require("./image5.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        T.N.Rao
        </h3 >
        <div className="team-text">Investor</div>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./image3.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Gireesh
        </h3>
        <div className="team-text">Developer</div>
        <a href="https://www.linkedin.com/in/gireeshredy/" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    </span><br/>
    <span className="team-span">
    <img src={require("./image2.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Dhanush Waran
        </h3>
        <div className="team-text">Designer</div>
        <a href="https://www.linkedin.com/in/dhanush-waran-143537228/" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./image4.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Anusha
        </h3>
        <div className="team-text">Community</div>
        <a href="https://www.linkedin.com/in/anusha-karthick-547bb051/" target="_blank"><img src={require('./linkedinlogo.png?auto=compress')} className="linkedin-logo"/></a>
    </span>
    </span>

    <span className="team-span">
    <img src={require("./image7.png?auto=compress")} className="team-image"/>
    <span className="team-name">
        <h3 className="team-text">
        Krishna
        </h3>
        <div className="team-text">Marketer</div>
    </span>
    </span>
    
    </div>)
}
export default Team
