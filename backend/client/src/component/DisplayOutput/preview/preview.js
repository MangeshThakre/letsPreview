import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./preview.css";
import Fb from "./fb.js";
import In from "./In.js";
import Tw from "./tw.js";
import { display } from "@mui/system";

function Preview({ image, title, description, url, fullUrl }) {
  return (
    <div className="preview">
      <div>
        <h1 className="heading-title">Preview</h1>
        <div className="googlePreview">
          <p style={{ margin: "1rem 0" }}>Google (Desktop view)</p>
          <div>
            <a
              href={fullUrl}
              target="_blank"
              style={{ color: "#2114ad", fontSize: "16px" }}
            >
              {title}
            </a>
            <p
              style={{
                color: "#006621",
                display: "flex",
                alignItems: "center",
              }}
            >
              {url?.join("//")} <ArrowDropDownIcon />
            </p>
            <div style={{ color: "gray" }}>{description?.slice(0, 200)} </div>
          </div>
        </div>
        <div className="facebookPreview">
          <p style={{ margin: "1rem 0" }}>Facebook</p>
          <Fb
            url={url}
            fullUrl={fullUrl}
            image={image}
            title={title}
            description={description}
          />
        </div>
        <div className="Twitterpreview">
          <p style={{ margin: "1rem 0" }}>Twitter</p>
          <Tw
            url={url}
            fullUrl={fullUrl}
            image={image}
            title={title}
            description={description}
          />
        </div>
        <div className="linkedInPreview">
          <p style={{ margin: "1rem 0" }}>LinkedIn</p>
          <In
            url={url}
            fullUrl={fullUrl}
            image={image}
            title={title}
            description={description}
          />
        </div>
      </div>
    </div>
  );
}

export default Preview;
