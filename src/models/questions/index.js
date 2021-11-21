import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
// import createError from "http-errors";
import questionModel from "./schema.js";

const questionRouter = express.Router();

questionRouter.get("/", async (req, res, next) => {
  try {
    const rows = await questionModel.find();
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

questionRouter.post("/", async (req, res, next) => {
  try {
    const newRow = new questionModel(req.body);
    await newRow.save();
    console.log(newRow);
    res.send(newRow);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Quantilope",
  },
});

const upload = multer({ storage: cloudinaryStorage }).single("image");

questionRouter.post("/:id/uploadImage", upload, async (req, res, next) => {
  try {
    const question = await questionModel.findById(req.params.id);
    questio
    row.images = req.file.path;
    await row.save();
    res.send(row);
  } catch (error) {
    next(error);
  }
});

export default questionRouter;


