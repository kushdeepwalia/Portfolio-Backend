const mongoose = require("mongoose");

// const uri =
//    "mongodb+srv://" +
//    process.env.ChaperoneDB_User +
//    ":" +
//    process.env.ChaperoneDB_Pass +
//    "@chaperonedb.ln2io.mongodb.net/?retryWrites=true&w=majority";

const uri = process.env.MONGO_URI !== undefined ? process.env.MONGO_URI : "mongodb://localhost:27017/PersonalPortfolio";

console.log(uri);
mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

module.exports = mongoose;
