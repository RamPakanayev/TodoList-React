var express = require("express");
var router = express.router;

router.get("/", (res, req) => {
  res.render("index", { title: "Express" });
});
module.exports = router;
