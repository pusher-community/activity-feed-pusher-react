var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render('index', { pusher_app_key : process.env.PUSHER_APP_KEY });
});

module.exports = router;