import {getAllListings} from "../services/listingService.js";

export async function getListings(req, res) {
  try {
    const listings = await getAllListings();
    res.json(listings);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}
