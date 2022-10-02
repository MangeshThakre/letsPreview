import "dotenv/config";
import express from "express";
const app = express();
import router from "./router/router.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __dirname1 = path.resolve();

const port = process.env.PORT || 8081;
-app.use(bodyParser.json());
app.use(cors());
app.use("/api/", router);
// serve static image
app.use("/static", express.static(path.join(__dirname1, "assets")));
// prodiction
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("app is runing successfully");
  });
}
/////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
