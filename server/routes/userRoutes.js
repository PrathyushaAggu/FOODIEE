const express = require('express');
const router = express.Router();

// 1. Keep these controller imports as they are
const { addAddress, getAddresses, deleteAddress } = require('../controllers/userController');

// 2. FIX: Destructure 'protect' from the middleware object
const { protect } = require('../middleware/authMiddleware'); 

// 3. FIX: Use 'protect' instead of 'authMiddleware'
router.get('/addresses', protect, getAddresses); 
router.post('/add-address', protect, addAddress);
router.delete('/delete-address/:addressId', protect, deleteAddress);

module.exports = router;