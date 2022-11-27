const express = require("express");
const url = require("../controller/linkcontroller.js");
const router = express.Router();
router.get("/url", url);

module.exports = router;
