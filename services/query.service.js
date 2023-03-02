const Query = require("../models/query")

async function getAll(req, res, next) {
   const queries = await Query.find().lean();
   res.json({ queries });
}

async function addNew(req, res, next) {
   try {
      const { name, email, subject, message } = req.body;
      await Query.create({ name, email, subject, message });
      res.json({ message: "Success" });
   } catch (error) {
      next(error);
   }
}

async function delQuery(req, res, next) {
   try {
      const { id } = req.params;
      const del = await Query.findByIdAndDelete({ _id: id });
      res.json({ message: "Deleted Successfully!" })
   }
   catch (error) {
      next(error);
   }
}

module.exports = { getAll, addNew, delQuery }