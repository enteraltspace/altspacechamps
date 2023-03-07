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
        <p>
          The holders of ALT Space Champs NFTs can participate in an exclusive
          forum that is designed to connect Web3 builders from all around the
          globe. This is a great opportunity to network and collaborate with
          others who are passionate about the same things that you are!
        </p>

        <p>
          Whether you manage a Web3 product, a service startup, a blockchain
          company, or a de-fi solution, you can grab our Champs NFT to engage
          with similar players in the ALT Space.
        </p>

        <p>
          Doing so will allow you to discuss commonalities and learn from one
          another in order to continue driving the industry forward!
        </p>
      </div>
    </>
  );
};
export default About;
