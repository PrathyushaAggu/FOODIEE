// import { useState } from 'react'
// import './Header.css'

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <h1>Savour</h1>
//         </div>

//         <div className="location-search">
//           <div className="location-input">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//               <circle cx="12" cy="10" r="3"></circle>
//             </svg>
//             <input type="text" placeholder="Select location" />
//           </div>
//         </div>

//         <nav className="nav-menu">
//           <a href="#home-makers" className="nav-link">Home Makers</a>
//           <a href="#categories" className="nav-link">Categories</a>
//           <a href="#about" className="nav-link">About</a>
//           <button className="btn-signin">Sign In</button>
//           <button className="btn-cart">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <circle cx="9" cy="21" r="1"></circle>
//               <circle cx="20" cy="21" r="1"></circle>
//               <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//             </svg>
//           </button>
//         </nav>

//         <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <line x1="3" y1="6" x2="21" y2="6"></line>
//             <line x1="3" y1="12" x2="21" y2="12"></line>
//             <line x1="3" y1="18" x2="21" y2="18"></line>
//           </svg>
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div className="mobile-menu">
//           <a href="#home-makers" onClick={() => setIsMenuOpen(false)}>Home Makers</a>
//           <a href="#categories" onClick={() => setIsMenuOpen(false)}>Categories</a>
//           <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
//           <button className="btn-signin">Sign In</button>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header

// import { useState } from 'react';
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// function Header({ onLoginClick }) {
//   const [activeNav, setActiveNav] = useState('Home Makers');

//   return (
//     <header className="header">
//       {/* Top Bar for Auth */}
//       <div className="top-bar">
//         <div className="auth-links">
//           <button className="auth-btn sign-in" onClick={onLoginClick}>Sign In</button>
//           <button className="auth-btn sign-up">Sign Up</button>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <div className="header-main">
//         <div className="header-container">
//           {/* Location Input */}
//           <div className="input-group location-group">
//             <LocationOnIcon className="input-icon" />
//             <select className="location-select">
//               <option>Location</option>
//             </select>
//           </div>

//           {/* Navigation Pill */}
//           <nav className="nav-pill">
//             {['Home Makers', 'Cloud Kitchen', 'Reels'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                 className={`nav-item ${activeNav === item ? 'active' : ''}`}
//                 onClick={() => setActiveNav(item)}
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* Search Bar */}
//           <div className="input-group search-group">
//             <SearchIcon className="input-icon" />
//             <input type="text" placeholder="Search here....." />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useState } from 'react';
// import { NavLink } from 'react-router-dom'; // Import this
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// function Header({ onLoginClick }) {
//   return (
//     <header className="header">
//       <div className="top-bar">
//         <div className="auth-links">
//           <button className="auth-btn sign-in" onClick={onLoginClick}>Sign In</button>
//           <button className="auth-btn sign-up">Sign Up</button>
//         </div>
//       </div>

//       <div className="header-main">
//         <div className="header-container">
//           <div className="input-group location-group">
//             <LocationOnIcon className="input-icon" />
//             <select className="location-select">
//               <option>Location</option>
//             </select>
//           </div>

//           <nav className="nav-pill">
//             {/* Home link */}
//             <NavLink
//               to="/"
//               className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
//             >
//               Home
//             </NavLink>

//             {/* Home Makers link */}
//             <NavLink
//               to="/home-makers"
//               className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
//             >
//               Home Makers
//             </NavLink>

//             <NavLink
//               to="/cloud-kitchen"
//               className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
//             >
//               Cloud Kitchen
//             </NavLink>
//           </nav>

//           <div className="input-group search-group">
//             <SearchIcon className="input-icon" />
//             <input type="text" placeholder="Search here....." />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useState } from 'react';
// import { Link } from 'react-router-dom'; // 1. Import Link
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// function Header({ onLoginClick }) {
//   const [activeNav, setActiveNav] = useState('Home Makers');

//   return (
//     <header className="header">
//       <div className="top-bar">
//         <div className="auth-links">
//           <button className="auth-btn sign-in" onClick={onLoginClick}>SignUp</button>
//         </div>
//       </div>

//       <div className="header-main">
//         <div className="header-container">
//           <div className="input-group location-group">
//             <LocationOnIcon className="input-icon" />
//             <select className="location-select">
//               <option>Location</option>
//             </select>
//           </div>

//           <nav className="nav-pill">
//             {['Home Makers', 'Cloud Kitchen', 'Reels'].map((item) => (
//               // 2. Change <a> to <Link> and use 'to' instead of 'href'
//               <Link
//                 key={item}
//                 to={item === 'Home Makers' ? "/home-makers" : "#"}
//                 className={`nav-item ${activeNav === item ? 'active' : ''}`}
//                 onClick={() => setActiveNav(item)}
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>

//           <div className="input-group search-group">
//             <SearchIcon className="input-icon" />
//             <input type="text" placeholder="Search here....." />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// function Header({ onLoginClick }) {
//   const [activeNav, setActiveNav] = useState('Home Makers');
//   const location = useLocation(); // Hook to monitor the current URL path

//   // Define the condition to hide the bottom header section
//   const isCheckoutPage = location.pathname === '/checkout';

//   return (
//     <header className="header">
//       {/* 1. TOP MAROON BAR: This stays visible everywhere */}
//       <div className="top-bar">
//         <div className="auth-links">
//           <button className="auth-btn sign-in" onClick={onLoginClick}>SignUp</button>
//         </div>
//       </div>

//       {/* 2. MAIN HEADER SECTION: Hidden if path is /checkout */}
//       {!isCheckoutPage && (
//         <div className="header-main">
//           <div className="header-container">
//             <div className="input-group location-group">
//               <LocationOnIcon className="input-icon" />
//               <select className="location-select">
//                 <option>Location</option>
//               </select>
//             </div>

//             <nav className="nav-pill">
//               {['Home Makers', 'Cloud Kitchen', 'Reels'].map((item) => (
//                 <Link
//                   key={item}
//                   to={item === 'Home Makers' ? "/home-makers" : "#"}
//                   className={`nav-item ${activeNav === item ? 'active' : ''}`}
//                   onClick={() => setActiveNav(item)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>

//             <div className="input-group search-group">
//               <SearchIcon className="input-icon" />
//               <input type="text" placeholder="Search here....." />
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

// import { useState, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'; // Add this
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// // Define the libraries array outside to prevent re-renders
// const libraries = ['places'];

// function Header({ onLoginClick }) {
//   const [activeNav, setActiveNav] = useState('Home Makers');
//   const [address, setAddress] = useState('');
//   const autocompleteRef = useRef(null);
//   const location = useLocation();

//   // Load Google Maps Script
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your key
//     libraries: libraries,
//   });

//   const isCheckoutPage = location.pathname === '/checkout';

//   // Handle address selection
//   const onPlaceChanged = () => {
//     if (autocompleteRef.current !== null) {
//       const place = autocompleteRef.current.getPlace();
//       setAddress(place.formatted_address);
//       console.log("Selected Location:", place.formatted_address);
//       console.log("Coordinates:", place.geometry.location.lat(), place.geometry.location.lng());
//     }
//   };

//   return (
//     <header className="header">
//       <div className="top-bar">
//         <div className="auth-links">
//           <button className="auth-btn sign-in" onClick={onLoginClick}>SignUp</button>
//         </div>
//       </div>

//       {!isCheckoutPage && (
//         <div className="header-main">
//           <div className="header-container">

//             {/* GOOGLE MAPS LOCATION SEARCH */}
//             <div className="input-group location-group">
//               <LocationOnIcon className="input-icon" />
//               {isLoaded ? (
//                 <Autocomplete
//                   onLoad={(ref) => (autocompleteRef.current = ref)}
//                   onPlaceChanged={onPlaceChanged}
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search Location..."
//                     className="location-input-field" // Updated from select
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </Autocomplete>
//               ) : (
//                 <input placeholder="Loading Maps..." disabled />
//               )}
//             </div>

//             <nav className="nav-pill">
//               {['Home Makers', 'Cloud Kitchen', 'Reels'].map((item) => (
//                 <Link
//                   key={item}
//                   to={item === 'Home Makers' ? "/home-makers" : "#"}
//                   className={`nav-item ${activeNav === item ? 'active' : ''}`}
//                   onClick={() => setActiveNav(item)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>

//             <div className="input-group search-group">
//               <SearchIcon className="input-icon" />
//               <input type="text" placeholder="Search here....." />
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

// import { useState, useRef } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// const libraries = ['places'];

// function Header({ onLoginClick }) {
//   const [activeNav, setActiveNav] = useState(null);
//   const [address, setAddress] = useState('');
//   const autocompleteRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Check if user is logged in by looking for the token
//   const isLoggedIn = !!localStorage.getItem('token');

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
//     libraries: libraries,
//   });

//   const isCheckoutPage = location.pathname === '/checkout';

//   const onPlaceChanged = () => {
//     if (autocompleteRef.current !== null) {
//       const place = autocompleteRef.current.getPlace();
//       setAddress(place.formatted_address);
//     }
//   };

// const handleNavClick = (e, item) => {
//   if (!isLoggedIn && (item === 'Home Makers' || item === 'Cloud Kitchen')) {
//     e.preventDefault();
//     onLoginClick();
//   } else {
//     // This will now apply the 'active' class only to the item you just clicked
//     setActiveNav(item);
//   }
// };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userName');
//     navigate('/'); // Redirect to landing page after logout
//   };

//   return (
//     <header className="header">
//       <div className="top-bar">
//         <div className="auth-links">
//           {isLoggedIn ? (
//             <div className="user-profile-section">
//               <span className="welcome-text">Hi, {localStorage.getItem('userName')}</span>
//               <button className="auth-btn logout" onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <button className="auth-btn sign-in" onClick={onLoginClick}>SignUp / Login</button>
//           )}
//         </div>
//       </div>

//       {!isCheckoutPage && (
//         <div className="header-main">
//           <div className="header-container">

//             <div className="input-group location-group">
//               <LocationOnIcon className="input-icon" />
//               {isLoaded ? (
//                 <Autocomplete
//                   onLoad={(ref) => (autocompleteRef.current = ref)}
//                   onPlaceChanged={onPlaceChanged}
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search Location..."
//                     className="location-input-field"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </Autocomplete>
//               ) : (
//                 <input placeholder="Loading Maps..." disabled />
//               )}
//             </div>

//             <nav className="nav-pill">
//               {['Home Makers', 'Cloud Kitchen', 'Reels'].map((item) => (
//                 <Link
//                   key={item}
//                   // If logged in, go to path. If not, stay on current path and open modal
//                   to={isLoggedIn && item === 'Home Makers' ? "/home-makers" : "#"}
//                   className={`nav-item ${activeNav === item ? 'active' : ''}`}
//                   onClick={(e) => handleNavClick(e, item)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>

//             <div className="input-group search-group">
//               <SearchIcon className="input-icon" />
//               <input type="text" placeholder="Search here....." />
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

// import { useState, useRef, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// const libraries = ['places'];

// function Header({ onLoginClick }) {
//   const [activeNav, setActiveNav] = useState(null);
//   const [address, setAddress] = useState('');
//   const autocompleteRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // State to track login status dynamically
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   useEffect(() => {
//     // Sync login state whenever the component mounts or location changes
//     setIsLoggedIn(!!localStorage.getItem('token'));
//   }, [location]);

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
//     libraries: libraries,
//   });

//   const isCheckoutPage = location.pathname === '/checkout';

//   const onPlaceChanged = () => {
//     if (autocompleteRef.current !== null) {
//       const place = autocompleteRef.current.getPlace();
//       setAddress(place.formatted_address);
//     }
//   };

//   const handleNavClick = (e, item) => {
//     if (!isLoggedIn && (item === 'Home Makers' || item === 'Cloud Kitchen')) {
//       e.preventDefault();
//       onLoginClick();
//     } else {
//       setActiveNav(item);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userName');
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <header className="header">
//       <div className="top-bar">
//         <div className="auth-links">
//           {isLoggedIn ? (
//             <div className="user-profile-section">
//               <span className="welcome-text">Hi, {localStorage.getItem('userName')}</span>
//               <button className="auth-btn logout" onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <button className="auth-btn sign-in" onClick={onLoginClick}>SignUp / Login</button>
//           )}
//         </div>
//       </div>

//       {!isCheckoutPage && (
//         <div className="header-main">
//           <div className="header-container">

//             {/* LOCATION SECTION */}
//             <div className="input-group">
//               <LocationOnIcon className="input-icon" />
//               {isLoaded ? (
//                 <Autocomplete
//                   onLoad={(ref) => (autocompleteRef.current = ref)}
//                   onPlaceChanged={onPlaceChanged}
//                   className="autocomplete-wrapper"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search Location..."
//                     className="location-input-field"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </Autocomplete>
//               ) : (
//                 <input placeholder="Loading Maps..." className="location-input-field" disabled />
//               )}
//             </div>

//             {/* NAVIGATION PILL */}
//             <nav className="nav-pill">
//               {['Home Makers', 'Cloud Kitchen', 'Reels'].map((item) => (
//                 <Link
//                   key={item}
//                   to={isLoggedIn && item === 'Home Makers' ? "/home-makers" : "#"}
//                   className={`nav-item ${activeNav === item ? 'active' : ''}`}
//                   onClick={(e) => handleNavClick(e, item)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>

//             {/* SEARCH SECTION */}
//             <div className="input-group">
//               <SearchIcon className="input-icon" />
//               <input
//                 type="text"
//                 placeholder="Search here....."
//                 className="search-input-field"
//               />
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

// import { useState, useRef, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
// import './Header.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';

// const libraries = ['places'];

// function Header({ onLoginClick }) {
//   const [activeNav, setActiveNav] = useState(null);
//   const [address, setAddress] = useState('');
//   const autocompleteRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // FIX 1: Only consider logged in if BOTH token AND username exist
//   const token = localStorage.getItem('token');
//   const storedName = localStorage.getItem('userName');
//   const isLoggedIn = !!(token && storedName);

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
//     libraries: libraries,
//   });

//   const isCheckoutPage = location.pathname === '/checkout';

//   const onPlaceChanged = () => {
//     if (autocompleteRef.current !== null) {
//       const place = autocompleteRef.current.getPlace();
//       setAddress(place.formatted_address);
//     }
//   };

//   const handleNavClick = (e, item) => {
//     if (!isLoggedIn && (item === 'Home Makers' || item === 'Cloud Kitchen')) {
//       e.preventDefault();
//       onLoginClick();
//     } else {
//       setActiveNav(item);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear(); // Clears token and name so "Prashanth" disappears
//     window.location.reload(); // Refresh to reset state completely
//   };

//   return (
//     <header className="header">
//       <div className="top-bar">
//         <div className="auth-links">
//           {isLoggedIn ? (
//             <div className="user-profile-section">
//               <span className="welcome-text">Hi, {storedName}</span>
//               <button className="auth-btn logout-link" onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <button className="auth-btn sign-in" onClick={onLoginClick}>SignUp / Login</button>
//           )}
//         </div>
//       </div>

//       {!isCheckoutPage && (
//         <div className="header-main">
//           <div className="header-container">

//             {/* LOCATION SECTION - Icon moved inside the group */}
//             <div className="input-group">
//               <LocationOnIcon className="input-icon" />
//               {isLoaded ? (
//                 <Autocomplete
//                   onLoad={(ref) => (autocompleteRef.current = ref)}
//                   onPlaceChanged={onPlaceChanged}
//                   className="google-autocomplete-container"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search Location..."
//                     className="location-input-field"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </Autocomplete>
//               ) : (
//                 <input placeholder="Loading..." disabled />
//               )}
//             </div>

//             {/* NAVIGATION PILL */}
//             <nav className="nav-pill">
//               {['Home Makers', 'Cloud Kitchen', 'Reels'].map((item) => (
//                 <Link
//                   key={item}
//                   to={isLoggedIn && item === 'Home Makers' ? "/home-makers" : "#"}
//                   className={`nav-item ${activeNav === item ? 'active' : ''}`}
//                   onClick={(e) => handleNavClick(e, item)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>

//             {/* SEARCH SECTION - Icon moved inside the group */}
//             <div className="input-group">
//               <SearchIcon className="input-icon" />
//               <input type="text" placeholder="Search here....." className="search-input-field" />
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import "./Header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const libraries = ["places"];

function Header({ onLoginClick, setSearchText, searchText }) {
  const [activeNav, setActiveNav] = useState(null);
  const [address, setAddress] = useState("");
  const autocompleteRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // FIX 1: Only consider logged in if BOTH token AND username exist
  const token = localStorage.getItem("token");
  const storedName = localStorage.getItem("userName");
  const isLoggedIn = !!(token && storedName);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    libraries: libraries,
  });

  const isCheckoutPage = location.pathname === "/checkout";

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      setAddress(place.formatted_address);
    }
  };

  const handleNavClick = (e, item) => {
    if (!isLoggedIn && (item === "Home Makers" || item === "Cloud Kitchen")) {
      e.preventDefault();
      onLoginClick();
    } else {
      setActiveNav(item);
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // Clears token and name so "Prashanth" disappears
    window.location.reload(); // Refresh to reset state completely
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="auth-links">
          {isLoggedIn ? (
            <div
              className="user-profile-section"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              {/* Clickable Icon and Name */}
              <Link
                to="/profile"
                className="profile-navigation"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <AccountCircleIcon
                  style={{ fontSize: "2rem", cursor: "pointer" }}
                />
                <span className="welcome-text" style={{ fontWeight: "500" }}>
                  Hi, {localStorage.getItem("userName") || "User"}
                </span>
              </Link>
            </div>
          ) : (
            <button className="auth-btn sign-in" onClick={onLoginClick}>
              SignUp / Login
            </button>
          )}
        </div>
      </div>

      {!isCheckoutPage && (
        <div className="header-main">
          <div className="header-container">
            {/* LOCATION SECTION - Icon moved inside the group */}
            <div className="input-group">
              <LocationOnIcon className="input-icon" />
              {isLoaded ? (
                <Autocomplete
                  onLoad={(ref) => (autocompleteRef.current = ref)}
                  onPlaceChanged={onPlaceChanged}
                  className="google-autocomplete-container"
                >
                  <input
                    type="text"
                    placeholder="Search Location..."
                    className="location-input-field"
                    value={address}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      // If user starts typing and isn't on the homemakers page, send them there
                      if (location.pathname !== "/home-makers") {
                        navigate("/home-makers");
                      }
                    }}
                  />
                </Autocomplete>
              ) : (
                <input placeholder="Loading..." disabled />
              )}
            </div>

            {/* NAVIGATION PILL */}
            <nav className="nav-pill">
              {["Home Makers", "Cloud Kitchen", "Reels"].map((item) => (
                <Link
                  key={item}
                  to={
                    isLoggedIn && item === "Home Makers" ? "/home-makers" : "#"
                  }
                  className={`nav-item ${activeNav === item ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* SEARCH SECTION - Icon moved inside the group */}
            <div className="input-group">
              <SearchIcon className="input-icon" />
              <input
                type="text"
                placeholder="Search here....."
                className="search-input-field"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
