import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GAuth from "../Components/GAuth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  //////////////////////////////////
  // to handle the formdata/////
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
  });
  const { username, email, password, confirmPassword } = formdata;
  function onchange(e) {
    setformdata((prevstate) => ({
      ...prevstate,
      [e.target.id]: e.target.value,
    }));
  }
  console.log(formdata.password);
  return (
    <>
      <section className="signPage">
        <div className="container">
          <div className="main-page">
            <main className="img-sect"></main>
            <main className="login-sect">
              <h3>Account</h3>
              <h1>
                Welcome to
                <div className="logo-main" onClick={() => navigate("/")}>
                  <span className="lightblue">F</span>
                  <span>E</span>
                  <span className="lightblue">E</span>
                  <span>E</span>
                  <span className="lightblue">A</span>
                  <span>S</span>
                  <span className="lightblue">E</span>
                </div>
              </h1>

              <p>
                Already have an account?{" "}
                <Link to="/Sign-in">
                  <span>Login</span>
                </Link>
              </p>

              <form>
                <label htmlFor="name"> Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  name="username"
                  id="username"
                  value={username}
                  onChange={onchange}
                  required
                />
                <label htmlFor="email"> Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onchange}
                  required
                />
                <label htmlFor="password"> Your Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={onchange}
                  required
                />
                <label htmlFor=" confirmPassword"> Confirm Your Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={onchange}
                />
                <button className="btn btn-color">Submit</button>
              </form>

              <p className="contiune">Or Continue With</p>
              <GAuth />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
