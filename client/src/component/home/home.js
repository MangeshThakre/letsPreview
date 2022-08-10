import React from "react";
import "./home.css";
import { useState } from "react";
import axios from "axios";
import loadingSvg from "../../assets/loading.svg";
import arrow from "../../assets/arrow.svg";

function Home({ setMetaTegs, setShowInfo, url, setUrl }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsVallid] = useState(true);
  const [warning, setWarning] = useState("");
  const URL = process.env.REACT_APP_Base_url;

  function urlValidator() {
    const expression =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    if (url.match(regex)) return true;
    else return false;
  }

  async function check() {
    if (!url) {
      setWarning("This field is required");
      setIsVallid(url);
    } else if (urlValidator(url)) {
      setIsLoading(true);
      try {
        const response = await axios({
          method: "get",
          url: URL + "/api/url?url=" + url,
          headers: { "content-type": "applicaation/json" },
        });
        const data = await response.data;
        setIsLoading(false);
        setIsVallid(true);
        setMetaTegs(data);
        setShowInfo(true);
        document
          .querySelector(".container")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (error) {
        console.log(error);
        setWarning("Plese enter valid url");
        setIsVallid(false);
        setIsLoading(false);
        console.log(error);
      }
    } else {
      setIsLoading(false);
      setIsVallid(false);
      setWarning("plese enter valid url");
    }
  }

  return (
    <div className="sectionOne">
      <div className="sectionOneContent">
        <h1>
          Preview your <span>Meta Tag</span> Here
          <img src={arrow} alt="arrow" />
        </h1>
        <span>
          <input
            value={url}
            type="text"
            name="url"
            id="url"
            onChange={(e) => {
              setUrl(e.target.value);
              setIsVallid(true);
            }}
          />
          <button onClick={() => check()}>Click 👆</button>
        </span>
        <div className="warning-loading">
          <p
            className="warning"
            style={{
              fontStyle: "italic",
              position: "relative",
              top: "-17px",
              left: "35px",
            }}
          >
            {!isValid ? warning : null}
          </p>
          <div className="loading">
            {isLoading ? <img src={loadingSvg} alt="loading" /> : null}
          </div>
        </div>
      </div>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          link="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use
              href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use href="#gentle-wave" x="48" y="7" fill="#F9FBFD" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Home;
