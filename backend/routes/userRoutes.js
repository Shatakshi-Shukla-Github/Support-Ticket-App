const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")
router.post("/", registerUser)
router.post("/login", loginUser)

//It means that before calling the getMe function first we need to verify whether the user is authorized or not
router.get("/me", protect, getMe)

module.exports = router;