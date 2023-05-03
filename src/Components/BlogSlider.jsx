import React from "react";
import { Link } from "react-router-dom";


function BlogSlider(props) {
  const{thumbline,date,header ,displayText, children }=props
  return (
    <>
      <div class="main-content main-slider">
        <div class="image">
          <img src={thumbline} alt="thumbline" />
        </div>
        <div class="content">
          <h6>
            <span class="date">{date}</span>
          </h6>
          <Link to="/">
            <h2>{header}</h2>
          </Link>
          <p>{displayText}</p>
          {children}
        </div>
      </div>
    </>
  );
}

export default BlogSlider;
