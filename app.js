const express = require("express");
const app = express();
const router = require("./router/router.js");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(express.json());
app.use(cors());

// serve static image

// prodiction
app.use(express.static(path.join(__dirname, "/client/build")));
if (process.env.NODE_ENV === "production") {
  app.use("/api", router);
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use("/api", router);
  app.get("/", (req, res) => {
    res.status(200).json({ success: true, data: "app is runing successfully" });
  });
}

module.exports = app;
