import mongoose from "mongoose";
const { Schema, model } = mongoose;

const questionSchema = new Schema(
  {
    title: { type: String },
    rows: [
      [
        {image:{ type: String }},
        [
          {
            id: { type: String },
            type:{ type: String, default :"image" } ,
            name: { type: String },
            value: { type: String },
          },
        ],
        [
          {
            id: { type: String },
            type: { type: String, default :"radio" } ,
            name: { type: String },
            value: { type: String },
          },
        ],
      ],
    ],
  },
  { timestamps: true }
);

export default model("question", questionSchema);
