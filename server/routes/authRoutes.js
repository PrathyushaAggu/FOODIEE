const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User'); 
const { protect } = require('../middleware/authMiddleware');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// DELETE ACCOUNT LOGIC
router.delete('/delete-account', protect, async (req, res) => {
  try {
    // req.user is populated by the 'protect' middleware
    const userId = req.user.id || req.user._id; 

    if (!userId) {
      return res.status(400).json({ message: "User ID not found in token" });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found in database" });
    }

    res.status(200).json({ message: "Account successfully deleted from MongoDB" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error during deletion" });
  }
});


module.exports = router;