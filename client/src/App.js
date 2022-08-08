import "./App.css";
import Home from "./component/home/home.js";
import { useState, useEffect } from "react";
import Preview from "./component/DisplayOutput/preview/preview";
import InfoCard from "./component/DisplayOutput/metadatainfoCard/infoCard.js";
import axios from "axios";
function App() {
  const [metaTags, setMetaTegs] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setTitle(metaTags.title ? metaTags?.title : metaTags?.og?.title);
     if (metaTags?.og?.image && !metaTags?.og?.image.includes("http")) {
       setImage(metaTags?.url?.join("//") + metaTags?.og?.image);
     } else {
       setImage(metaTags?.og?.image);
     }
    setDescription(
      metaTags?.description
        ? metaTags?.og?.description
        : metaTags?.og?.description
    );
  }, [metaTags]);

  // useEffect(() => {
  //   async function fun() {
  //     const response = await axios("https://metatags.io/");
  //     const data = await response.data;
  //     const parser = new DOMParser();
  //     const window = parser.parseFromString(data, "text/html");
  //     // console.log(window.querySelectorAll("meta"));
  //   }

  //   fun();
  // });

  return (
    <div className="App">
      <Home
        setMetaTegs={setMetaTegs}
        setShowInfo={setShowInfo}
        url={url}
        setUrl={setUrl}
      />
      <div className="container">
        {showInfo ? (
          <>
            <InfoCard
              setImage={setImage}
              metaTags={metaTags}
              image={image}
              setDescription={setDescription}
              description={description}
              setTitle={setTitle}
              title={title}
            />
            <Preview
              image={image}
              description={description}
              title={title}
              url={metaTags.url}
              fullUrl={url}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
