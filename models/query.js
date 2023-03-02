const mongoose = require("mongoose");
const Joi = require("joi");

const querySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   subject: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   }
})

const Query = new mongoose.model("Query", querySchema);

function validateQuery(query) {
   const schema = Joi.object({
   });

   return schema.validate(query);
}

module.exports = Query;