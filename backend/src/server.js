import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

// Check if enviroment variable can be accessed
// console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 5001;
const app = express();

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json()); // will parse the JSON bodies: req.body

app.use(rateLimiter); // will check rate limiting and check if user can send req

// simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
