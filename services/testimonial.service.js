const Testimonials = require("../models/testimonial");

async function get(req, res, next) {
   const { id } = req.params;
   const testimonial = await Testimonials.findById(id);
   res.json(testimonial);
}

async function getAll(req, res, next) {
   const testimonials = await Testimonials.find().lean()
   res.json({ testimonials });
}

async function addNew(req, res, next) {
   try {
      const { authorName, message, image, imageName, visibility } = req.body;
      await Testimonials.create({ authorName, message, visibility, image, imageName });
      res.json({ message: "Success" });
   } catch (error) {
      next(error);
   }
}

async function edit(req, res, next) {
   try {
      const { authorName, message, image, imageName, visibility } = req.body;
      const { id } = req.params;
      let response = await Testimonials.findByIdAndUpdate({ _id: id }, { authorName, message, image, imageName, visibility })

      res.json({ message: "Success" });
   } catch (error) {
      next(error);
   }
}

async function editPosition(req, res, next) {
   try {
      const { id1, id2 } = req.params;
      let firstData = await Testimonials.findById(id1);
      let secondData = await Testimonials.findById(id2);
      let pos1 = firstData.position;
      let pos2 = secondData.position;
      // console.log(pos1, pos2);
      let temp = pos1;
      pos1 = pos2;
      pos2 = temp;
      // console.log(pos1, pos2);
      let project1 = await Testimonials.updateMany({ _id: id1 }, { position: pos1 });
      firstData = await Testimonials.findById(id1);
      let project2 = await Testimonials.updateMany({ _id: id2 }, { position: pos2 });
      secondData = await Testimonials.findById(id2);
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
      const testimonial = await Testimonials.updateOne({ _id: id }, { visibility: visibility });
      if (parseInt(testimonial.modifiedCount) === 1) {
         res.json({ message: "Visibility Changed!" });
      }
      else {
         console.log(testimonial);
      }
   }
   catch (error) {
      next(error);
   }
}

async function delTestimonial(req, res, next) {
   try {
      const { id } = req.params;
      const del = await Testimonials.findByIdAndDelete({ _id: id });
      res.json({ message: "Deleted Successfully!" })
   }
   catch (error) {
      next(error);
   }
}

module.exports = { get, getAll, addNew, edit, editVisibility, editPosition, delTestimonial };
