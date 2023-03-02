const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.route"));
router.use("/positions", require("./positions.route"));
router.use("/projects", require("./project.route"))
router.use("/testimonials", require("./testimonial.route"))
router.use("/query", require("./query.route"))
router.use("/", (req, res, next) => {
   res.status(200).json({ message: "Api Working" })
})

module.exports = router;