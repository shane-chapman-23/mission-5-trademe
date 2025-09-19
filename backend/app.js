import express from "express";
import mongoose from "mongoose";
import listingRoutes from "./routes/listingRoutes.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB error:", err));

app.use("/listings", listingRoutes);

export default app;
