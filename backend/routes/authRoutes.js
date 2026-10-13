const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authController");
console.log("getMe:", typeof getMe);

const protect = require("../middleware/authMiddleware");
console.log("protect:", typeof protect);
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
module.exports = router;
