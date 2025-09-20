import Listing from "../models/Listing.js";

export async function getAllListings() {
  return Listing.find();
}
