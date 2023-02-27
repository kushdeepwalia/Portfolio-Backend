const express = require("express");
const router = express.Router();
const testimonialService = require("../services/testimonial.service");

router
   .get("/:id", testimonialService.get)
   .get("/", testimonialService.getAll)
   .post("/new", testimonialService.addNew)
   .patch("/edit/:id", testimonialService.edit)
   .patch("/edit/visibility/:id", testimonialService.editVisibility)
   .patch("/edit/position/:id1/:id2", testimonialService.editPosition)
   .delete("/delete/:id", testimonialService.delTestimonial)

module.exports = router;
