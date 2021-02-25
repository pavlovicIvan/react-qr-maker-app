// React
import React from "react";

// Images
import githubImg from "../assets/images/github.svg";
import linkedinImg from "../assets/images/linkedin.svg";

// Custom components
import Logo from "../assets/images/qr_logo.png";

const Header = () => (
  <div className="containerMainCenter">
    <div>
      <a
        href="https://github.com/pavlovicIvan/react-qr-maker-app"
        target="_blank"
        rel="noreferrer"
      >
        <img className="linkImg" alt="github logo" src={githubImg} />
      </a>
      <a
        href="https://www.linkedin.com/in/ivanpavlo"
        target="_blank"
        rel="noreferrer"
      >
        <img className="linkImg" alt="github logo" src={linkedinImg} />
      </a>
    </div>
    <img className="logo" src={Logo} alt="qr generator logo" />
  </div>
);

export default Header;
