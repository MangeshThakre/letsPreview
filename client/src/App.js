import "./App.css";
import Home from "./component/home/home.js";
import { useState, useEffect } from "react";
import Preview from "./component/DisplayOutput/preview/preview";
import InfoCard from "./component/DisplayOutput/metadatainfoCard/infoCard.js";
import { ToastContainer, toast } from "react-toastify";
import githubicon from "./assets/GitHub.png";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
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

  const notify = (message, type) =>
    toast[type](message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div className="App">
      <Home
        setMetaTegs={setMetaTegs}
        setShowInfo={setShowInfo}
        url={url}
        setUrl={setUrl}
        notify={notify}
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
        <div target="_blank" className="footerDiv">
          <a
            className="socials"
            href="https://mangeshthakre.cyclic.app/"
            target="_blank"
          >
            Build by <span>Mangesh Thakre 🤖</span>
          </a>
          <a
            target="_blank"
            href="https://github.com/MangeshThakre/letsPreview"
            className="socials"
          >
            <img src={githubicon} alt="git" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
