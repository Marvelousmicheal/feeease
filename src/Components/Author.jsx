import React from "react";
import { Link } from "react-router-dom";

function Author( props) {
    const { AuthorImg, AuthorName, AuthorTitle, } = props;
  return (
    <>
      <Link to="/" class="author">
        <div class="author-image">
          <img src={AuthorImg} alt="author-img" width="100px" />
        </div>

        <div class="author-des">
          <h5>{AuthorName}</h5>
          <span>{AuthorTitle}</span>
        </div>
      </Link>
    </>
  );
}

export default Author;
