const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
   res.status(200).json({ message: "Api Working" })
})
router.use("/auth", require("./auth.route"));
router.use("/projects", require("./project.route"))
router.use("/testimonials", require("./testimonial.route"))

module.exports = router;