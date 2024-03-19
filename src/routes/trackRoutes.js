const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const Track = require("../models/Track");

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });
  res.send(tracks);
});
