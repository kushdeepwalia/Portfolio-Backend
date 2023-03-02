const express = require("express");
const router = express.Router();
const queryService = require("../services/query.service");

router
   .get("/", queryService.getAll)
   .post("/", queryService.addNew)
   .delete("/:id", queryService.delQuery)

module.exports = router;