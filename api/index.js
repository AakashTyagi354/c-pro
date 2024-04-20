import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectionDB from "./database/connection.js";
import authRouter from "./routes/auth.route.js";

// Configurations
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// Connection to DB
connectionDB();

// Routes
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
