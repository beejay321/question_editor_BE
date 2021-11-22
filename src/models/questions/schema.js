import mongoose from "mongoose";
const { Schema, model } = mongoose;

const questionSchema = new Schema(
  {
    title: { type: String },
    rows: [
      [{ type: { type: String, default: "image" } }, { type: { type: String, default: "image" } }],
      [{ image: { type: String }, text: { type: String }, type: { type: String, default: "radio" } }, { type: { type: String, default: "radio" } }],
      [{ image: { type: String }, text: { type: String }, type: { type: String, default: "radio" } }, { type: { type: String, default: "radio" } }],
    ],

    // rows: [
    //   [
    //     {image:{ type: String }},
    //     [
    //       {
    //         id: { type: String },
    //         type:{ type: String, default :"image" } ,
    //         name: { type: String },
    //         value: { type: String },
    //       },
    //     ],
    //     [
    //       {
    //         id: { type: String },
    //         type: { type: String, default :"radio" } ,
    //         name: { type: String },
    //         value: { type: String },
    //       },
    //     ],
    //   ],
    // ],
  },
  { timestamps: true }
);

export default model("question", questionSchema);
