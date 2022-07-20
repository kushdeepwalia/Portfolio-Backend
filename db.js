const mongoose = require("mongoose");

// const uri =
//    "mongodb+srv://" +
//    process.env.ChaperoneDB_User +
//    ":" +
//    process.env.ChaperoneDB_Pass +
//    "@chaperonedb.ln2io.mongodb.net/?retryWrites=true&w=majority";

const uri = "mongodb://localhost:27017/PersonalPortfolio";

mongoose.connect(process.env.MONGO_URI || uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

module.exports = mongoose;
