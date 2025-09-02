import Note from "../models/Note.js";

//the functions that are executed based on a specific route

export async function getAllNotes(req, res) {
  try {
    //gets all the notes
    const notes = await Note.find().sort({ createdAt: -1 }); //so that the latest note shows up first (descending order based on time of creation of notes)
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error while fetching notes ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not found!" });

    res.status(200).json(note);
  } catch (error) {
    console.log("Error while fetching note ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content }); //since the key and value are of same name, destructuring

    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (error) {
    console.log("Error while creating note ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found!" });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error while updating note ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote)
      return res.status(404).json({ message: "Note not found!" });

    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.log("Error while deleting note ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
