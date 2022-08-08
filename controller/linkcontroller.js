import axios from "axios";
import { JSDOM } from "jsdom";
class linkConstructor {
  static async url(req, res) {
    const url = req.query.url;

    function metaTags(og, key, value) {
      const obj = {};
      // console.log(key);
      for (const e of og) {
        obj[e.getAttribute(key)?.split(value)[1]] = e.getAttribute("content");
      }
      return obj;
    }

    try {
      const response = await axios(url);
      const data = await response.data;
      const { document } = new JSDOM(data).window;
      const fbOg = document.querySelectorAll(`meta[property^="og:"]`);
      const TwitterOg = document.querySelectorAll(`meta[name^="twitter:"]`);

      const Tags = {
        url: [url.split("/")[0], url.split("/")[2]],
        og: metaTags(fbOg, "property", "og:"),
        tw: metaTags(TwitterOg, "name", "twitter:"),
        title: document
          .querySelector(`meta[name="title"]`)
          ?.getAttribute("content"),
        description: document
          .querySelector(`meta[name="description"]`)
          ?.getAttribute("content"),
      };

      res.status(200).json(Tags);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default linkConstructor;
