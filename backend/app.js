import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import listingRoutes from "./routes/listingRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/auctiondb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB error:", err));

app.use("/listings", listingRoutes);

export default app;
