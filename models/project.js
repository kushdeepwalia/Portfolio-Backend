const mongoose = require("mongoose");
const Joi = require("joi");
const projectSchema = new mongoose.Schema({

   name: {
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
   desc: {
      type: String,
      required: true
   },
   url: {
      type: String,
      required: true
   },
   visibility: {
      type: Boolean,
      default: false,
      required: true
   },
   position: {
      type: Number,
      required: true
   }
})

const Projects = new mongoose.model("Projects", projectSchema);

function validateProject(project) {
   const schema = Joi.object({

   });

   return schema.validate(project);
}

module.exports = Projects;
