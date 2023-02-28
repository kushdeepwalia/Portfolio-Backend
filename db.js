const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// const uri =
//    "mongodb+srv://" +
//    process.env.ChaperoneDB_User +
//    ":" +
//    process.env.ChaperoneDB_Pass +
//    "@chaperonedb.ln2io.mongodb.net/?retryWrites=true&w=majority";

function connection(uri) {
   mongoose
      .connect(uri)
      .then(() => console.log("Database Connected..."))
      .catch((err) => console.log("Could not connect to Database. ", err.message));
}

module.exports = connection;
