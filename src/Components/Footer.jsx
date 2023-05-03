import React from "react";
import Newletter from "./Newletter";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <Newletter />
          <div className="footer-main">
            <div className="footer-links">
              <div className="link-footer">
                <Link to="/About-us">About us</Link>
                <Link to="/contact-us">Contact us</Link>
                <Link to="/">Fee</Link>
              </div>
              <div className="social-links">
                <Link to="">
                  <span>
                    <BsInstagram />
                  </span>
                </Link>
                <Link to="">
                  <span>
                    <BsFacebook />
                  </span>
                </Link>
                <Link to="">
                  <span>
                    <BsTwitter />
                  </span>
                </Link>
                <Link to="">
                  <span>
                    <BsLinkedin />
                  </span>
                </Link>
              </div>
            </div>
            <div className="copy-write">
              <p>Copyright © 2023 Paylio. All Rights Reserved.</p>

              <div className="terms-privacy">
                <Link to="">Terms</Link>
                <Link to="">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
