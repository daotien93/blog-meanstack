const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("crypt");


//REGISTER
router.post("/register", async (req, res) => {
    try {
    const salt = await bcrypt.getSalt(10)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Login

module.exports = router;