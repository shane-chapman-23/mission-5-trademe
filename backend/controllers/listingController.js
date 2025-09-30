import {
  getAllListings,
  searchListingsService,
} from "../services/listingService.js";

export async function getListings(req, res) {
  try {
    const listings = await getAllListings();
    res.json(listings);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}

export async function searchListings(req, res) {
  try {
    const {q} = req.query;
    if (!q) {
      return res.json([]); // empty query → empty results
    }

    const results = await searchListingsService(q);
    res.json(results);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}
