var express = require("express");
var app = express();
var router = express.router;

router.get("/", (res, req) => {
  res.render("index", { title: "Express" });
});
module.exports = router;

app.listen(3000);
console.log("listen on port 3000");
