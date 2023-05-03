import React from "react";

function Lilheader(props) {
  const { h5, h1, quote } = props;
  return (
    <>
      <div className="lilheader">
        <h5>{h5}</h5>
        <h1>{h1}</h1>
        <p>{quote}</p>
      </div>
    </>
  );
}

export default Lilheader;
