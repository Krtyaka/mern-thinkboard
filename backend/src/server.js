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
const CLIENT_ORIGIN = process.env.CLIENT_URL || "http://localhost:5173";

//middleware

//this middleware will parse JSON bodies: give access to req.body
app.use(express.json());

// Single, explicit CORS config so preflight includes Content-Type
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Health check (useful to verify service up)
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

//this middleware is for rate limiting
app.use(rateLimiter);

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

//so that connection to the DB is ensured before running the application
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
