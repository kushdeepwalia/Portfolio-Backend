const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.route"));
router.use("/projects", require("./project.route"))

module.exports = router;