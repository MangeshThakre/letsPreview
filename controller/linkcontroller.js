const axios = require("axios");
const { JSDOM } = require("jsdom");
const urlValidator = require("../Helper/urlValidator.js");

async function url(req, res) {
  const url = req.query.url;
  if (!url) {
  } else if (!urlValidator(url)) {
    return res.status(400).json({ success: false, message: "Invalid URL" });
  }

  function metaTags(og, key, value) {
    const obj = {};
    for (const e of og) {
      obj[e.getAttribute(key)?.split(value)[1]] = e.getAttribute("content");
    }
    return obj;
  }

  function favIcon(document) {
    let favIconHref = "";
    // target both icon and store in icon variable  and target shortcut icon and store href in shortIcon variable
    const icon = document.querySelector(`link[rel="icon"]`)
      ? document.querySelector(`link[rel="icon"]`).href
      : "";
    const shortIcon = document.querySelector(`link[rel="shortcut icon"]`)
      ? document.querySelector(`link[rel="shortcut icon"]`).href
      : "";
    // check if icon/shorIcon is not empty the store in favIcon href
    if (icon) favIconHref = icon;
    if (shortIcon) favIconHref = shortIcon;
    // if favIconHref dont full link then concate the favincon with base url and return
    if (favIconHref == "") {
      return "https://i.ibb.co/nsydfK7/favicon-Not-Found.png";
    } else if (favIconHref.indexOf("/") == 0) {
      return url.split("/")[0] + url.split("/")[2] + favIconHref;
    } else return favIconHref;
  }

  try {
    const response = await axios.get(url);
    const data = await response.data;
    const { document } = new JSDOM(data).window;
    const fbOg = document.querySelectorAll(`meta[property^="og:"]`);
    const TwitterOg = document.querySelectorAll(`meta[name^="twitter:"]`);
    const Icon = favIcon(document);
    const Tags = {
      url: [url.split("/")[0], url.split("/")[2]],
      favIcon: Icon,
      og: metaTags(fbOg, "property", "og:"),
      tw: metaTags(TwitterOg, "name", "twitter:"),
      title: document
        .querySelector(`meta[name="title"]`)
        ?.getAttribute("content"),
      description: document
        .querySelector(`meta[name="description"]`)
        ?.getAttribute("content"),
    };

    res.status(200).json({ success: true, data: Tags });
  } catch (error) {
    res.status(500).json({ success: "false", message: error.message });
  }
}

module.exports = url;
