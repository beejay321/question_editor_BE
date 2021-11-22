import mongoose from "mongoose";
const { Schema, model } = mongoose;

const imageSchema = new Schema(
  {
    image: { type: String, default: "http://placehold.it/40" },
  },
  { timestamps: true }
);

export default model("images", imageSchema);
