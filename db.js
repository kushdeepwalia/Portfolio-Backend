const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const uri =
   "mongodb+srv://" +
   process.env.portfolioDB_User +
   ":" +
   process.env.portfolioDB_Pass +
   "@cluster0.htks2.mongodb.net/"

function connection(uri) {
   mongoose
      .connect(uri)
      .then(() => console.log("Database Connected..."))
      .catch((err) => console.log("Could not connect to Database. ", err.message));
}

module.exports = connection;
