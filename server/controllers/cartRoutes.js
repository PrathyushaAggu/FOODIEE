const express = require('express');
const router = express.Router();
const { removeItemFromCart } = require('../controllers/cartController');
const auth = require('../middleware/auth'); // Ensure user is logged in

// Route to handle the red trash icon click
router.delete('/remove/:itemId', auth, removeItemFromCart);

module.exports = router;