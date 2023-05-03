import React from "react";
import GAuth from "../Components/GAuth";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <section className="signPage">
        <div className="container">
          <div className="main-page">
            <main className="img-sect"></main>
            <main className="login-sect">
              <h3>Account</h3>
              <h1>Log in to Continue</h1>

              <p>
                Don't have an account?{" "}
                <Link to="/Sign-up">
                  <span>Sign-up</span>
                </Link>
              </p>

              <form>
                <label htmlFor="email"> Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                />
                <label htmlFor="password"> Your Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                />
                <button className="btn btn-color">Login</button>

                <Link to="/Sign-up">
                  <p>Forgot Password</p>
                </Link>
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

export default SignIn;
