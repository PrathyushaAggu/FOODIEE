const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true,
    trim: true
  },
  phoneNumber: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true 
  },
  profilePic: {
    type: String, // Stores Base64 string or Image URL
    default: null
  },
  // Persist addresses added during checkout
  addresses: [{
    name: String,
    text: String,
    instructions: String,
    type: { type: String, enum: ['home', 'office', 'other'], default: 'home' }
  }],
  // Store order history
  orders: [{
    orderId: String,
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'In Progress' },
    total: String,
    items: Array
  }],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('User', userSchema);