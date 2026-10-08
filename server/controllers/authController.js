// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.signup = async (req, res) => {
//   try {
//     const { fullName, phoneNumber, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists with this email or phone." });
//     }

//     // Hash the password before saving to Atlas
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       fullName,
//       phoneNumber,
//       email,
//       password: hashedPassword
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Registration failed", error: error.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { phoneNumber, password } = req.body;

//     // Find user by phone
//     const user = await User.findOne({ phoneNumber });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // Create Token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({
//       token,
//       user: { fullName: user.fullName, phoneNumber: user.phoneNumber }
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Login failed" });
//   }
// };





const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * SIGNUP CONTROLLER
 */
exports.signup = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, password } = req.body;

    const existingUser = await User.findOne({ 
      $or: [{ email }, { phoneNumber }] 
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: "User already exists with this email or phone number." 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      addresses: [], // Initialize empty
      orders: []     // Initialize empty
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully! Please log in." });

  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

/**
 * LOGIN CONTROLLER
 * Now returns addresses and profile picture for the dashboard
 */
exports.login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '24h' }
    );

    // Send everything to frontend to sync with Profile.jsx
    res.status(200).json({
      token,
      user: { 
        fullName: user.fullName, 
        email: user.email,
        phoneNumber: user.phoneNumber,
        profilePic: user.profilePic,
        addresses: user.addresses,
        orders: user.orders
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed server-side." });
  }
};