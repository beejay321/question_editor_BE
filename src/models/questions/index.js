import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
// import createError from "http-errors";
import questionModel from "./schema.js";

const questionRouter = express.Router();

questionRouter.get("/", async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error);
    next(error);
  }
});

questionRouter.post("/", async (req, res, next) => {
  try {
    
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
    
  } catch (error) {
    next(error);
  }
});

export default questionRouter;


