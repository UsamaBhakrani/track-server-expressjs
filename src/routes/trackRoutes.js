const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const Track = require("../models/Track");

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });
  res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations) {
    return res.status(422).json({ error: "Name and Location Required" });
  }

  try {
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    res.send(track);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

module.exports = router;
