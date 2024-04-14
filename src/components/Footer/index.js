import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/yukitoshi12345" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.instagram.com/yukitoshi32/" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/yukitoshi-imaizumi-zhou/"
            target="blank"
          >
            <li>
              <FaLinkedin />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
