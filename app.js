const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const api = require("./routes");
const db = require("./db");

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

app.use("/api/v1", api);

const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`✅ Listening: http://localhost:${port}`);
   db.connection
      .on("open", () => console.log("✅ MONGODB CONNECTED"))
      .on("error", (err) => console.error(err.message));
});