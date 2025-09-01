import mongoose from "mongoose";

//1 - create a schema
//2 - model based off of that schema

// Creating Schema
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
  {
    timestamps: true, //mongodb will by default give the createdAt, updatedAt.
  }
);

// Creating a mdoel "Note" based on the above schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
