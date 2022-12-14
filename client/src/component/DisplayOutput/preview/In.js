import React from "react";
import info from "../../../assets/Info-Button.svg";

function In({ image, title, description, url, fullUrl }) {
  let Newurl = url[1];
  if (url[1]?.includes("www")) {
    Newurl = url[1].split("www.")[1];
  }
  const previewImg = image ? image : info;
  //
  return (
    <a href={fullUrl} target="_blank">
      <div className="linkedin">
        <div>
          <img src={previewImg} alt="linkedin" />
        </div>
        <div>
          <h4 className="InTitle" style={{ color: "black", fontWeight: "600" }}>
            {title}
          </h4>
          <p
            className="url"
            style={{ color: "gray", fontSize: "14px", margin: "6px 0" }}
          >
            {Newurl}
          </p>
        </div>
      </div>
    </a>
  );
}

export default In;
