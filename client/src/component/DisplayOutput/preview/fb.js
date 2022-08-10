import React from "react";
import info from "../../../assets/Info-Button.svg";
function Fb({ image, title, description, url, fullUrl }) {
  const URL = process.env.url;
  let Newurl = url[1];
  if (url[1]?.includes("www")) {
    Newurl = url[1].split("www.")[1];
  }
  const previewImg = image ? image : info;
  return (
    <a href={fullUrl} target="_blank">
      <div className="facebook">
        <div style={{ backgroundColor: "#F9FBFD", margin: "0" }}>
          <img src={previewImg} alt=" facebook" />
        </div>
        <div>
          <p class="fbBaseUrl" style={{ fontSize: "13px", margin: "6px  0" }}>
            {Newurl.toUpperCase()}
          </p>
          <h4 className="fbTitle" style={{ color: "black", fontWeight: "600" }}>
            {title}
          </h4>
          <p className="fbTitle"> {description?.slice(0, 100)}...</p>
        </div>
      </div>
    </a>
  );
}

export default Fb;
