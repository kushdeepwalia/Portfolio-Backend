const express = require("express");
const router = express.Router();
const projectService = require("../services/project.service");

router
   .get("/:id", projectService.get)
   .get("/", projectService.getAll)
   .post("/new", projectService.addNew)
   .patch("/edit/:id", projectService.edit)
   .patch("/edit/visibility/:id", projectService.editVisibility)
   .patch("/edit/position/:id1/:id2", projectService.editPosition)
   .delete("/delete/:id", projectService.delProject)

module.exports = router;
