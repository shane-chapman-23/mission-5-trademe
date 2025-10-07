import express from "express";
import { getListings, searchListings, getListingById } from "../controllers/listingController.js";

const router = express.Router();

router.get("/", getListings);
router.get("/search", searchListings);
router.get("/:id", getListingById);

export default router;
