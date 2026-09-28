const express = require("express");

const {
  signup,
  login,
  logout,
} = require("../controllers/authController");

const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/verify", authMiddleware, (req, res) => {
  res.status(200).json({
    authenticated: true,
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    },
  });
});

module.exports = router;