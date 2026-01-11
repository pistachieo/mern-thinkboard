import mongoose from "mongoose";

// 1 - Create Schema
// 2 - Create model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // mongoDB by default will give you createdAt and updatedAt
);

const Note = mongoose.model("Note", noteSchema); // create a Note model based off of noteSchema

export default Note;
