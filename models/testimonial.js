const mongoose = require("mongoose");
const Joi = require("joi");
const testimonialSchema = new mongoose.Schema({
   authorName: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   imageName: {
      type: String,
      required: true
   },
   visibility: {
      type: Boolean,
      default: false,
      required: true
   }
})

const Testimonials = new mongoose.model("Testimonials", testimonialSchema);

function validateTestimonial(testimonial) {
   const schema = Joi.object({

   });

   return schema.validate(testimonial);
}

module.exports = Testimonials;
