const express = require("express");
const router = express.Router();
const positionService = require("../services/positions.service");

router
   .get("/", positionService.getAll)
   .post("/", positionService.addNew)
   .patch("/:id", positionService.edit)
   .delete("/:id", positionService.delPosition)

module.exports = router;