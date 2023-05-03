import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Header() {
  //for the routering//
  //import uselocation

  const Location = useLocation();

  //this is the function that is proudly brought to us by react fucking router for navigating within the website
  const navigate = useNavigate();
  function PathMatchRoute(route) {
    if (route === Location.pathname) {
      return true;
    }
  }
  ////////////////////////////////

  return (
    <>
      <header>
        <div className="logo-main" onClick={() => navigate("/")}>
          <span className="lightblue">F</span>
          <span>E</span>
          <span className="lightblue">E</span>
          <span>E</span>
          <span className="lightblue">A</span>
          <span>S</span>
          <span className="lightblue">E</span>
        </div>
        <nav>
          <div className="nav-links">
            <ul>
              <li
                onClick={() => navigate("/")}
                className={`${PathMatchRoute("/") && "activelink"}`}
              >
                Home
              </li>
              <li
                onClick={() => navigate("/About-us")}
                className={`${PathMatchRoute("/About-us") && "activelink"}`}
              >
                About Us
              </li>
              <li
                onClick={() => navigate("/Blog")}
                className={`${PathMatchRoute("/Blog") && "activelink"}`}
              >
                Blog
              </li>
              <li
                onClick={() => navigate("/contact-us")}
                className={`${PathMatchRoute("/contact-us") && "activelink"}`}
              >
                Contact Us
              </li>
            </ul>
            <div className="auth-link">
              <li
                onClick={() => navigate("/sign-in")}
                className={`${PathMatchRoute("/sign-in") && "activelink"}`}
              >
                Login
              </li>
              <li className="signbtn" onClick={() => navigate("/Sign-up")}>
                Sign-up
                <span>
                  <AiOutlineArrowRight />
                </span>
              </li>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
