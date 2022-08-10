import info from "../../../assets/Info-Button.svg";

import React from "react";
function Tw({ image, title, description, url, fullUrl }) {
  let Newurl = url[1];
  if (url[1]?.includes("www")) {
    Newurl = url[1].split("www.")[1];
  }
  const previewImg = image ? image : info;

  return (
    <a href={fullUrl} target="_blank">
      <div className="twitter">
        <div>
          <img src={previewImg} alt="twitter" />
        </div>
        <div>
          <h4
            className="twitterTitle"
            style={{ color: "black", fontWeight: "600" }}
          >
            {title}
          </h4>
          <p
            className="twitterDescription"
            style={{ fontSize: "13px", margin: "5px 0" }}
          >
            {description?.slice(0, 150)}...
          </p>
          <p className="twitterDomain" style={{ color: "gray" }}>
            {Newurl}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Tw;
