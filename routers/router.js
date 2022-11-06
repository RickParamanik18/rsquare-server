const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("API WORKING FINE");
});

module.exports = router;
