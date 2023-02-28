const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const api = require("./routes");
const connection = require("./db");

// const uri =
//    "mongodb+srv://" +
//    process.env.ChaperoneDB_User +
//    ":" +
//    process.env.ChaperoneDB_Pass +
//    "@chaperonedb.ln2io.mongodb.net/?retryWrites=true&w=majority";

const uri = "mongodb://localhost:27017/PersonalPortfolio";

app.use(morgan("dev"));
app.use(helmet());
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json({ limit: "10mb" }));

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token"
   );
   if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "*");

      return res.status(200).json({});
   }
   next();
});
app.use("/", (req, res, next) => {
   res.status(200).json({ message: "Api Working" })
})
app.use("/api/v1", api);

app.listen(process.env.PORT || 3002, function () {
   console.log(
      "Express server listening on port %d in %s mode",
      this.address().port,
      app.settings.env
   );
   connection(app.settings.env === "development" ? "mongodb://localhost:27017/PersonalPortfolio" : process.env.MONGO_URI);
});