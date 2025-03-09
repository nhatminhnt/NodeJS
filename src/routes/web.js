const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
} = require("../controllers/homeController");
const router = express.Router();

// router.Method('/route', handler)

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoidanIT", getHoiDanIT);

module.exports = router;
