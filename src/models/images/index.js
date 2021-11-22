import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import imageModel from "./schema.js";

const imageRouter = express.Router();

imageRouter.get("/", async (req, res, next) => {
  try {
    const images = await imageModel.find();
    res.send(images);
  } catch (error) {
    console.log(error);
  }
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Quantilope",
  },
});

const upload = multer({ storage: cloudinaryStorage }).single("image");

imageRouter.post("/uploadImage", upload, async (req, res, next) => {
  try {
    const images = await imageModel.find();
    const newImage = new imageModel({ image: req.file.path });
    await newImage.save();
    res.send(newImage);
  } catch (error) {
    console.log(error);
  }
});

export default imageRouter;
