import React from "react";
import "./infocard.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
function InfoCard({
  title,
  setTitle,
  setDescription,
  description,
  image,
  setImage,
  metaTags,
}) {
  return (
    <div className="infoCard">
      <div>
        <h1 className="heading-title">Meta Tags Info</h1>
        <p>This informateion will be displayed on other platform</p>
        <div className="title">
          <p htmlFor="title">Title</p>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="description">
          <p htmlFor="description">Descrioteion</p>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="image">
          <p>Image</p>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
      <div className="tags">
        <h1 className="heading-title">Meta Tags</h1>

        <p>
          Title :
          {metaTags?.title ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
        <p>
          Description :
          {metaTags?.description ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
        <p>
          og:title :
          {metaTags?.og.title ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
        <p>
          og:description :
          {metaTags?.og.description ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
        <p>
          og:image :
          {metaTags?.og.image ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
        <p>
          twitter:title :
          {metaTags?.tw.title ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
        <p>
          twitter:description :
          {metaTags?.tw.description ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
        <p>
          twitter:image
          {metaTags?.tw.image ? (
            <DoneIcon sx={{ color: "green" }} />
          ) : (
            <CloseIcon sx={{ color: "red" }} />
          )}
        </p>
      </div>
    </div>
  );
}
export default InfoCard;
