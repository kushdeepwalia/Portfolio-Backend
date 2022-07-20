const mongoose = require("mongoose");
const Joi = require("joi");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = mongoose.Schema({

})

userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

function validateUser(user) {
   const schema = Joi.object({

   });

   return schema.validate(user);
}

exports.validateUser = validateUser;
exports.User = User;
