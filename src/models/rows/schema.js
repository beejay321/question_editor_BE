import mongoose from "mongoose";
const { Schema, model } = mongoose;

const rowSchema = new Schema(
  {
    images: { type: String, default: "http://placehold.it/40" },
    name: { type: String },
    label: [{ type: String }],
    // cellType: "radiogroup",
  },
  { timestamps: true }
);

export default model("row", rowSchema);
