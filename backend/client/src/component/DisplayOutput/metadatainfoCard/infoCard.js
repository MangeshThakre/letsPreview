import React from "react";
import "./infocard.css";
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

        <p>Title :{metaTags?.title ? "yes" : "no"} </p>
        <p>Description :{metaTags?.description ? "yes" : "no"}</p>
        <p>og:title :{metaTags?.og.title ? "yes" : "no"} </p>
        <p>og:description :{metaTags?.og.description ? "yes" : "no"}</p>
        <p>og:image :{metaTags?.og.image ? "yes" : "no"}</p>
        <p>twitter:title :{metaTags?.tw.title ? "yes" : "no"}</p>
        <p>twitter:description :{metaTags?.tw.description ? "yes" : "no"}</p>
        <p>twitter:image {metaTags?.tw.image ? "yes" : "no"}</p>
      </div>
    </div>
  );
}
export default InfoCard;
