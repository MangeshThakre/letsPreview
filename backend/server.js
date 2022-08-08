import express from "express";
const app = express();
import router from "./router/router.js";
import cors from "cors";
const port = 8081;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/", router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
