const Projects = require("../models/project");

async function get(req, res, next) {
   const { id } = req.params;
   const project = await Projects.findById(id);
   res.json(project);
}

async function getAll(req, res, next) {
   const projects = await Projects.find().lean();
   res.json({ projects });
}

async function addNew(req, res, next) {
   try {
      const { name, desc, url, visibility, image, imageName, position } = req.body;
      await Projects.create({ name, desc, url, visibility, image, imageName, position });
      res.json({ message: "Success" });
   } catch (error) {
      next(error);
   }
}

async function edit(req, res, next) {
   try {
      const { name, desc, url, visibility, image, imageName, position } = req.body;
      const { id } = req.params;
      let response = await Projects.findByIdAndUpdate({ _id: id }, { name, desc, url, visibility, image, imageName, position })

      res.json({ message: "Success" });
   } catch (error) {
      next(error);
   }
}

async function editPosition(req, res, next) {
   try {
      const { id1, id2 } = req.params;
      let firstData = await Projects.findById(id1);
      let secondData = await Projects.findById(id2);
      let pos1 = firstData.position;
      let pos2 = secondData.position;
      // console.log(pos1, pos2);
      let temp = pos1;
      pos1 = pos2;
      pos2 = temp;
      // console.log(pos1, pos2);
      let project1 = await Projects.updateMany({ _id: id1 }, { position: pos1 });
      firstData = await Projects.findById(id1);
      let project2 = await Projects.updateMany({ _id: id2 }, { position: pos2 });
      secondData = await Projects.findById(id2);
      // console.log(firstData, secondData);
      res.json({ message: "Rearranged Successfully" })
   }
   catch (error) {
      next(error);
   }
}

async function editVisibility(req, res, next) {
   try {
      const { id } = req.params;
      const { visibility } = req.body;
      const project = await Projects.updateOne({ _id: id }, { visibility: visibility });
      if (parseInt(project.modifiedCount) === 1) {
         res.json({ message: "Visibility Changed!" });
      }
      else {
         console.log(project);
      }
   }
   catch (error) {
      next(error);
   }
}

async function delProject(req, res, next) {
   try {
      const { id } = req.params;
      const del = await Projects.findByIdAndDelete({ _id: id });
      res.json({ message: "Deleted Successfully!" })
   }
   catch (error) {
      next(error);
   }
}

module.exports = { get, getAll, addNew, edit, editVisibility, editPosition, delProject };
