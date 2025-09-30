import Listing from "../models/Listing.js";

export async function getAllListings() {
  return Listing.find();
}

export async function searchListingsService(query) {
  const searchConditions = {
    $or: [
      {title: {$regex: query, $options: "i"}},
      {description: {$regex: query, $options: "i"}},
    ],
  };

  return Listing.find(searchConditions).select(
    "title description start_price current_bid buy_now"
  );
}
