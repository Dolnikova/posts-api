const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.end("Hello from home page!");
});

router.post("/posts", (req, res, next) => {
  res.end("Response from /posts");
});
// router.post("/", (req, res, next) => {
//   console.log("Hello, from router");
//   next();
// });

module.exports = { router };
