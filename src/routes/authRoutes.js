const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.send("You made a Post Request");
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
