import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_price: Number,
  current_bid: Number,
  buy_now: Number,
  location: String,
  shipping_cost: Number,
});

export default mongoose.model("Listing", listingSchema);
