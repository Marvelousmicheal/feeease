import React from "react";
import { Link } from "react-router-dom";

function FeatureNews(props) {
  const { thumbline, date, header, displayText, children } = props;
  return (
    <>
      <div>
        <div class="thumbline one">
          <img src={thumbline} alt="thumbline" />
        </div>
        <div class="news-content">
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

export default FeatureNews;
