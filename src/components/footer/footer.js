import React from "react";
import "./footer.css";
import { HashLink } from "react-router-hash-link";
function Footer() {
  return (
    <>
      <footer className="footer-basic">
        <div className="social">
          <a
            href="https://discord.gg/ru6g942RKe"
            target="_blank"
            className="socialsLogo"
          >
            <img src={require("./discord.png")} />
          </a>
          <a
            href="https://twitter.com/enteraltspace"
            target="_blank"
            className="socialsLogo"
          >
            {" "}
            <img src={require("./twitter.png")} />
          </a>
        </div>
        <ul className="list-inline">
          <li>
            <a
              href="http://enteraltspace.com/"
              target="_blank"
              className="link"
            >
              Company
            </a>
          </li>

          <li>
            <HashLink smooth to="/#faq" className="link">
              FAQ
            </HashLink>{" "}
          </li>
          <li>
            <HashLink smooth to="/#team" className="link">
              Team
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="link">
              About
            </HashLink>{" "}
          </li>
          <li>
            <HashLink smooth to="/#home" className="link">
              Home
            </HashLink>
          </li>
        </ul>
        <p className="copyright">Alt Space © 2022</p>
      </footer>
    </>
  );
}
export default Footer;
