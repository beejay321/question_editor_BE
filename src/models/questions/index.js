import express from "express";
import questionModel from "./schema.js";

const questionRouter = express.Router();

questionRouter.get("/", async (req, res, next) => {
  try {
    const question = await questionModel.find();
    res.send(question);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

questionRouter.post("/", async (req, res, next) => {
  try {
    const newQuestion = new questionModel(req.body);
    await newQuestion.save();
    console.log(newQuestion);
    res.send(newQuestion);
  } catch (error) {
    console.log(error);
    next(error);
  }
});



export default questionRouter;
