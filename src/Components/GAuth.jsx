import React from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";

function GAuth() {
  return (
    <>
      <btn type="button" className="googlebtn">
        <span>
          <AiFillGoogleCircle />
        </span>
        Log in with Google
      </btn>
    </>
  );
}

export default GAuth