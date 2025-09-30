import express from "express";
import {getListings, searchListings} from "../controllers/listingController.js";

const router = express.Router();

router.get("/", getListings);
router.get("/search", searchListings);

export default router;
