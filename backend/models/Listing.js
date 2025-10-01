import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_price: Number,
  buy_now: Number,
  location: String,
  sub_location: String,
  shipping_cost: Number,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image1s: String,
  image2s: String,
  image3s: String,
  image4s: String,
});

export default mongoose.model("Listing", listingSchema);
