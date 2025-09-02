import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

//routes or endpoints
//here /api/notes as it was common in all routes so no need to write there again
app.use("/api/notes", notesRoutes);

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("You got your api working!");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "Note created successfully!" });
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(201).json({ message: "Note updated succesfully!" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(201).json({ message: "Note deleted successfully!" });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
