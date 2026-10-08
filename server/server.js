// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// // Import Routes
// const authRoutes = require('./routes/authRoutes');
// const kitchenRoutes = require('./routes/KitchenRoutes'); // If you have this

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // 1. Database Connection
// const dbURI = process.env.MONGODB_URI;

// mongoose.connect(dbURI)
//   .then(() => console.log("CONNECTED TO MONGODB ATLAS SUCCESSFULLY"))
//   .catch(err => console.error("DATABASE CONNECTION ERROR:", err));

// // 2. Use Routes
// // This connects your Login/Signup buttons to the backend logic
// app.use('/api', authRoutes); 

// // 3. Health Check (To verify connection easily)
// app.get('/api/health', (req, res) => res.send("Backend is running!"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Backend Server running on port ${PORT}`));







// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Database Connection
// const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/savourDB';

// mongoose.connect(dbURI)
//   .then(() => console.log("SUCCESS: Connected to Local MongoDB"))
//   .catch(err => console.error("LOCAL DATABASE ERROR:", err));

// app.use('/api', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));










const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// IMPORT ROUTES
const authRoutes = require('./routes/authRoutes'); 
const kitchenRoutes = require('./routes/KitchenRoutes'); 
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());


// 1. Get URI from .env (Removed the local fallback to prevent confusion)
const dbURI = process.env.MONGODB_URI;

// 2. Safety check: Ensure the environment variable is actually loaded
if (!dbURI) {
    console.error("FATAL ERROR: MONGODB_URI is not defined in your .env file!");
    process.exit(1); 
}

// 3. Database Connection to Atlas
mongoose.connect(dbURI)
  .then(() => {
    // This message confirms you are hitting the Cloud, not your local machine
    console.log("SUCCESS: Connected to MongoDB Atlas (Cloud)");
  })
  .catch(err => {
    // If you see "bad auth", it means your password in .env is still wrong
    console.error("DATABASE CONNECTION ERROR:", err.message);
  });

// USE ROUTES
app.use('/api/auth', authRoutes);         // Access via /api/auth/signup or /api/auth/login
app.use('/api/kitchens', kitchenRoutes);  // Access via /api/kitchens
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));