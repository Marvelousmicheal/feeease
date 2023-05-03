import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Newletter() {
  return (
    <>
      <div className="newletter">
<div className="left-img">
<img src="/image/footer-bg-left.png" alt="nothing-here"/>
</div>


        <div className="newletter-main">
          <h1>Subscribe to our newletter</h1>

        <form>
          <input type="email"  placeholder="Enter Your Email Address"/>
          <button>
            <AiOutlineArrowRight />
          </button>
        </form>
        </div>
      </div>
    </>
  );
}

export default Newletter;
