//the functions that are executed based on a specific route

export function getAllNotes(req, res) {
  res.status(200).send("Notes fetched successfully!");
}

export function createNote(req, res) {
  res.status(201).json({ message: "Note created successfully!" });
}

export function updateNote(req, res) {
  res.status(201).json({ message: "Note updated successfully!" });
}

export function deleteNote(req, res) {
  res.status(201).json({ message: "Note deleted successfully!" });
}
