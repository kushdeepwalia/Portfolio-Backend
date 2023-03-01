const mongoose = require("mongoose");
const Joi = require("joi");

const positionSchema = new mongoose.Schema({

   field: {
      type: String,
      required: true
   }
})

const Positions = new mongoose.model("Positions", positionSchema);

function validatePosition(position) {
   const schema = Joi.object({
   });

   return schema.validate(position);
}

module.exports = Positions;