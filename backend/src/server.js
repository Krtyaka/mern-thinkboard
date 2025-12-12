import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

//middleware

app.use(cors());
//this middleware will parse JSON bodies: give access to req.body
app.use(express.json());

//this middleware is for allowing cors - not needed if wanting to deploy under the same URL(production)
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

//this middleware is for rate limiting
app.use(rateLimiter);

//routes or endpoints
//here /api/notes as it was common in all routes so no need to write there again
app.use("/api/notes", notesRoutes);

// we only want to perform this if we are under production

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  //if there is any other request from /api/notes then we would like to serve our react application
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

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

//so that connection to the DB is ensured before running the application
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
