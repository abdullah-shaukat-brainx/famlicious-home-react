const express = require("express");
const router = express.Router();

router.use("/contact-us", require("./homeRoutes"));

module.exports = router;
