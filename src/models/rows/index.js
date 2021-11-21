import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
// import createError from "http-errors";
import rowModel from "./schema.js";

const rowsRouter = express.Router();

rowsRouter.get("/", async (req, res, next) => {
  try {
    const rows = await rowModel.find();
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
rowsRouter.post("/", async (req, res, next) => {
  try {
    const newRow = new rowModel(req.body);
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

rowsRouter.post("/:id/uploadImage", upload, async (req, res, next) => {
  try {
    const row = await rowModel.findById(req.params.id);
    row.image = req.file.path;
    await row.save();
    res.send(row);
  } catch (error) {
    next(error);
  }
});

export default rowsRouter;
