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
    "title description start_price buy_now location sub_location shipping_cost image1 image2 image3 image4 image1s image2s image3s image4s"
  );
}
