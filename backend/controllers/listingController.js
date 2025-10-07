import { getAllListings, searchListingsService } from "../services/listingService.js";
import Listing from "../models/Listing.js";

export async function getListings(req, res) {
  try {
    const listings = await getAllListings();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function searchListings(req, res) {
  try {
    const { q } = req.query;
    if (!q) {
      return res.json([]);
    }

    const results = await searchListingsService(q);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getListingById(req, res) {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
