import "./about.css";

const About = () => {
  return (
    <>
      <h2 className="about-heading">ABOUT US</h2>
      <br />
      <div className="part1" id="about">
        <div className="img1">
          <img
            src={require("./image2.gif?auto=compress")}
            className="allimg1"
          />
          <img
            src={require("./image3.gif?auto=compress")}
            className="allimg1"
          />
        </div>
        <div className="img2">
          <img src={require("./image1.gif?auto=compress")} className="allimg" />
          <img src={require("./image4.gif?auto=compress")} className="allimg" />
        </div>
      </div>

      <div className="part2">
      <p>The Champs are the ones who are interested to explore tech products and solutions. They are technology enthusiasts willing to experiment with Web3 as well.</p>
      <p>The holders of ALT Space Champs NFTs become part of an exclusive token-gated community lounge. They enjoy the various benefits by being part of this tech community.</p>
      </div>
    </>
  );
};
export default About;
