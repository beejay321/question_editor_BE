import mongoose from "mongoose";
const { Schema, model } = mongoose;

const colSchema = new Schema(
  {
    image: { type: String, default: "http://placehold.it/40" },
    label: { type: String },
    newCol: { type: String },
  },
  { timestamps: true }
);

export default model("col", userSchema);
