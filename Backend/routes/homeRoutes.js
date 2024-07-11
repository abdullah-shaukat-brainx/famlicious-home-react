const express = require("express");
const router = express.Router();

const { homeController } = require("../controllers");

router.use(express.urlencoded({ extended: false }));

router.post("/", homeController.contactUs);

module.exports = router;
