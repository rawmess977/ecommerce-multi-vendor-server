import express from "express";
import dotenv from "dotenv";
import router from "./routes/authRoutes.js";
import cors from "cors";

import cookieParser from "cookie-parser";
import dbConnect from './database/db.js';
dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials : true
  })
);

app.use(express.json())
app.use(cookieParser())


app.use("/api", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running in port `, port)
  dbConnect()
});
