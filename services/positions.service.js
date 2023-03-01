const Positions = require("../models/postion")

async function getAll(req, res, next) {
   const positions = await Positions.find().lean();
   res.json(positions);
}

async function addNew(req, res, next) {
   try {
      const { field } = req.body;
      await Positions.create({ field });
      res.json({ message: "Success" });
   } catch (error) {
      next(error);
   }
}

async function edit(req, res, next) {
   try {
      const { field } = req.body;
      const { id } = req.params;
      let response = await Positions.findByIdAndUpdate({ _id: id }, { field })

      res.json({ message: "Success" });
   } catch (error) {
      next(error);
   }
}

async function delPosition(req, res, next) {
   try {
      const { id } = req.params;
      const del = await Positions.findByIdAndDelete({ _id: id });
      res.json({ message: "Deleted Successfully!" })
   }
   catch (error) {
      next(error);
   }
}

module.exports = { getAll, addNew, edit, delPosition }