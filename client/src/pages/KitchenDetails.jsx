// Final

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IconButton } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

// import "./KitchenDetails.css";

// // --- Data for the 8 Suggested Items with URLS ---
// const suggestedItems = [
//   {
//     id: 1,
//     name: "Chicken Biryani",
//     price: 250,
//     oldPrice: 270,
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop",
//     type: "non-veg",
//     discount: "FLAT ₹20 OFF",
//   },
//   {
//     id: 2,
//     name: "Rice, Dal",
//     price: 100,
//     img: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?_gl=1*1ipcf12*_ga*MjMzMzI3MjY1LjE3NzAyNjQwNDA.*_ga_8JE65Q40S6*czE3NzAzNzA3MTIkbzIkZzEkdDE3NzAzNzA4OTYkajQ3JGwwJGgw",
//     type: "veg",
//     discount: "15% OFF",
//   },
//   {
//     id: 3,
//     name: "Idly sambar",
//     price: 180,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82eJMG9jkNtbsWjnLR9sG0Ah9PzG3YITqZg&s",
//     type: "veg",
//     discount: "BEST SELLER",
//   },
//   {
//     id: 4,
//     name: "Roti",
//     price: 20,
//     img: "https://caleidoscope.in/wp-content/uploads/2024/04/Famous-Food-of-Telangana-Jonna-Rotte.jpg",
//     type: "veg",
//     discount: "5% OFF",
//   },
//   {
//     id: 5,
//     name: "Veg Thali",
//     price: 150,
//     img: "https://images.pexels.com/photos/35008222/pexels-photo-35008222.jpeg?_gl=1*oka3xy*_ga*MjMzMzI3MjY1LjE3NzAyNjQwNDA.*_ga_8JE65Q40S6*czE3NzAzNzI4ODMkbzMkZzEkdDE3NzAzNzI5ODYkajU1JGwwJGgw",
//     type: "veg",
//     discount: "NEW",
//   },
//   {
//     id: 6,
//     name: "Curd Rice",
//     price: 60,
//     img: "https://tse4.mm.bing.net/th/id/OIP.WALAihPakq0AZ40rc-2DUAHaD4?pid=Api&P=0&h=180",
//     type: "veg",
//     discount: "MORNING SPL",
//   },
//   {
//     id: 7,
//     name: "Homemade Pickle",
//     price: 45,
//     img: "https://images.pexels.com/photos/7812134/pexels-photo-7812134.jpeg?_gl=1*19skm8q*_ga*MjMzMzI3MjY1LjE3NzAyNjQwNDA.*_ga_8JE65Q40S6*czE3NzAzNzA3MTIkbzIkZzEkdDE3NzAzNzA5NDgkajU4JGwwJGgw",
//     type: "veg",
//     discount: "PURE VEG",
//   },
//   {
//     id: 8,
//     name: "Mini Meal",
//     price: 120,
//     img: "https://images.unsplash.com/photo-1742281257687-092746ad6021?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGZvb2QlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
//     type: "veg",
//     discount: "LIMITED",
//   },
// ];

// const menuData = {
//   "Biryani's": [
//     { name: "Chicken Biryani (Single)", price: 150 },
//     { name: "Chicken Biryani (Full)", price: 250 },
//     { name: "Mutton Biryani (Full)", price: 900 },
//     { name: "Veg Biryani (Full)", price: 120 },
//   ],
//   Breakfast: [
//     { name: "Idly Sambar", price: 60 },
//     { name: "Masala Dosa", price: 90 },
//     { name: "Vada (2 pcs)", price: 50 },
//   ],
//   Lunch: [
//     { name: "Veg Thali", price: 150 },
//     { name: "South Indian Meal", price: 180 },
//     { name: "Curd Rice", price: 80 },
//   ],
//   Dinner: [
//     { name: "Roti Curry", price: 90 },
//     { name: "Butter Naan", price: 45 },
//     { name: "Paneer Masala", price: 220 },
//   ],
// };

// const KitchenDetails = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   // Get the passed kitchen data, or use a fallback if someone refreshes the page
//   const kitchen = location.state?.kitchen || {
//     name: "Amma's Kitchen",
//     rating: "4.5",
//     reviews: "1,160",
//     image:
//       "https://smashboard.org/content/images/2022/03/photo5879483377374050613.jpg",
//     tags: "Burgers, Pizza's",
//   };

//   // Scroll to top on load
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("Biryani's");
//   const [cart, setCart] = useState({});

//   const updateQuantity = (id, delta) => {
//     setCart((prev) => {
//       const currentQty = prev[id] || 0;
//       const newQty = currentQty + delta;
//       if (newQty <= 0) {
//         const newCart = { ...prev };
//         delete newCart[id];
//         return newCart;
//       }
//       return { ...prev, [id]: newQty };
//     });
//   };

//   const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
//   const totalPrice = suggestedItems.reduce((sum, item) => {
//     return sum + item.price * (cart[item.id] || 0);
//   }, 0);

//   return (
//     <div className="kitchen-details-page homemakers-page container">
//       {/* 1. FILTER ROW */}
//       <div className="filter-row">
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <IconButton
//             onClick={() => navigate(-1)}
//             className="back-btn-simple"
//             sx={{ p: 0 }}
//           >
//             <ArrowBackIcon sx={{ color: "#1a1a1a" }} />
//           </IconButton>
//           <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         </div>
//         <div className="action-buttons">
//           <button className="f-btn">
//             <TuneIcon /> Filters
//           </button>
//           <button className="f-btn">
//             <SwapVertIcon /> Sort By
//           </button>
//           <button className="f-btn">
//             <MyLocationIcon /> Near By
//           </button>
//           <button className="f-btn">
//             <RadioButtonCheckedIcon style={{ color: "#d32f2f" }} /> Non Veg
//           </button>
//           <button className="f-btn">
//             <RadioButtonCheckedIcon style={{ color: "#2e7d32" }} /> Pure Veg
//           </button>
//         </div>
//       </div>

//       <div className="kitchen-unified-block">
//         <div className="hero-content-split">
//           <div className="kitchen-image-large">
//             {/* Dynamic Image */}
//             <img src={kitchen.image} alt={kitchen.name} />
//           </div>
//           <div className="kitchen-content">
//             <div className="kitchen-header">
//               {/* Dynamic Name */}
//               <h3>{kitchen.name}</h3>
//               <div className="rating">
//                 <StarIcon className="star-icon" /> {kitchen.rating}{" "}
//                 <span>({kitchen.reviews})</span>
//               </div>
//               <div className="status-label">Open Now</div>
//             </div>
//             <div className="kitchen-info">
//               <p>
//                 <DirectionsRunIcon /> 5 Km Away
//               </p>
//               <p>
//                 <RestaurantMenuIcon /> {kitchen.tags}
//               </p>
//               <p>
//                 <AccessTimeIcon /> Opens from 9:00 AM to 10:00 PM
//               </p>
//               <p>
//                 <LocationOnIcon /> 3-6-526, Madhapur, Hyderabad, 500081
//               </p>
//             </div>
//             <div className="kitchen-footer">
//               <div className="delivery-badge">20 - 30 Min Delivery</div>
//             </div>
//           </div>{" "}
//           {/* Closes kitchen-content */}
//         </div>

//         {/* 3. KITCHEN GALLERY WITH URLS */}
//         <div className="kitchen-gallery-section">
//           <h3 className="gallery-header-title">Photos</h3>
//           <div className="gallery-scroll-container">
//             {[
//               {
//                 title: "Idly",
//                 url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=500&auto=format&fit=crop",
//               },
//               {
//                 title: "Lunch",
//                 url: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//               },
//               {
//                 title: "Dal",
//                 url: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347374/india-food-sambar/india-food-sambar-1120x732.jpg",
//               },
//               {
//                 title: "Rice",
//                 url: "https://caleidoscope.in/wp-content/uploads/2024/04/Famous-Food-of-Telangana-Gutti-Vankaya-Kura.jpg",
//               },
//               {
//                 title: "Lunch",
//                 url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=500&auto=format&fit=crop",
//               },
//               {
//                 title: "Dal",
//                 url: "https://caleidoscope.in/wp-content/uploads/2024/04/Folk-Dance-of-Telangana-0.jpg",
//               },
//               {
//                 title: "Rice",
//                 url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500&auto=format&fit=crop",
//               },
//             ].map((photo, index) => (
//               <div key={index} className="gallery-card-static">
//                 <img src={photo.url} alt={photo.title} />
//                 <div className="gallery-card-label">{photo.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 4. SUGGESTED ITEMS SECTION */}
//         <div className="suggested-section">
//           <div className="suggested-header">
//             <h3 className="suggested-title">
//               SUGGESTED ITEMS ({suggestedItems.length})
//             </h3>
//             <button className="offers-badge-btn">OFFERS AVAILABLE</button>
//           </div>

//           <div className="suggested-grid-scroll">
//             {suggestedItems.map((item) => {
//               const qty = cart[item.id] || 0;
//               return (
//                 <div key={item.id} className="suggested-item-card">
//                   <div className={`veg-nonveg-icon ${item.type}`}></div>
//                   {item.discount && (
//                     <div className="hover-discount-tag">{item.discount}</div>
//                   )}
//                   <div className="product-image-box">
//                     {/* FIXED: Using item.img from the suggestedItems array */}
//                     <img src={item.img} alt={item.name} loading="lazy" />
//                   </div>
//                   <div className="product-info">
//                     <h4>{item.name}</h4>
//                     <p className="eta-text">⚡ 15 - 20 Minutes</p>
//                     <p className="customer-count">Ordered by 100+ customers</p>
//                     <div className="product-card-footer">
//                       <div className="pricing">
//                         <span className="current-price">₹ {item.price}</span>
//                         {item.oldPrice && (
//                           <span className="slashed-price">
//                             ₹ {item.oldPrice}
//                           </span>
//                         )}
//                       </div>
//                       {qty === 0 ? (
//                         <button
//                           className="add-btn-main"
//                           onClick={() => updateQuantity(item.id, 1)}
//                         >
//                           Add
//                         </button>
//                       ) : (
//                         <div className="quantity-selector-container">
//                           <button onClick={() => updateQuantity(item.id, -1)}>
//                             -
//                           </button>
//                           <span>{qty}</span>
//                           <button onClick={() => updateQuantity(item.id, 1)}>
//                             +
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* 5. FLOATING VIEW CART BAR */}
//       {totalItems > 0 && (
//         <div
//           className="view-cart-floating-bar"
//           onClick={() =>
//             navigate("/checkout", {
//               state: { cart, suggestedItems, totalPrice },
//             })
//           }
//         >
//           <div className="cart-left">
//             <span className="cart-count">
//               {totalItems} Item{totalItems > 1 ? "s" : ""} added
//             </span>
//             <span className="cart-total">₹{totalPrice}</span>
//           </div>
//           <div className="cart-right">
//             <span>VIEW CART</span>
//             <RestaurantMenuIcon fontSize="small" />
//           </div>
//         </div>
//       )}

//       {/* MENU BUTTON & MODAL (Keep as is) */}
//       <button className="floating-menu-btn" onClick={() => setIsMenuOpen(true)}>
//         <RestaurantMenuIcon fontSize="small" />
//         <span>MENU</span>
//       </button>

//       {isMenuOpen && (
//         <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
//           <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="menu-categories">
//               {Object.keys(menuData).map((cat) => (
//                 <span
//                   key={cat}
//                   className={activeCategory === cat ? "active-cat" : ""}
//                   onClick={() => setActiveCategory(cat)}
//                 >
//                   {cat}
//                 </span>
//               ))}
//             </div>
//             <div className="menu-items-grid">
//               {menuData[activeCategory].map((item, index) => (
//                 <div key={index} className="menu-item-row">
//                   <span className="m-name">{item.name}</span>
//                   <span className="m-price">₹{item.price}</span>
//                 </div>
//               ))}
//             </div>
//             <button
//               className="close-menu-btn"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default KitchenDetails;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IconButton } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

// import "./KitchenDetails.css";
// import { kitchenDataMap } from "../data/kitchenData";

// const KitchenDetails = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const kitchenName = location.state?.kitchenName;
//   const kitchen =
//     kitchenDataMap[kitchenName] || Object.values(kitchenDataMap)[0];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const suggestedItems = kitchen.suggestedItems || [];
//   const menuData = kitchen.menuData || {};
//   const galleryPhotos = kitchen.galleryPhotos || [];

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(
//     Object.keys(menuData)[0] || "",
//   );
//   const [cart, setCart] = useState({});

//   // Fixed Distance variable - change this to test the 5km logic
//   const distance = 6;

//   const updateQuantity = (id, delta) => {
//     setCart((prev) => {
//       const currentQty = prev[id] || 0;
//       const newQty = currentQty + delta;
//       if (newQty <= 0) {
//         const newCart = { ...prev };
//         delete newCart[id];
//         return newCart;
//       }
//       return { ...prev, [id]: newQty };
//     });
//   };

//   const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);

//   // FIXED CALCULATION LOGIC
//   const totalPrice = Object.keys(cart).reduce((sum, itemId) => {
//     const item = suggestedItems.find((i) => i.id === parseInt(itemId));
//     return item ? sum + item.price * cart[itemId] : sum;
//   }, 0);

//   return (
//     <div className="kitchen-details-page homemakers-page container">
//       <div className="filter-row">
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <IconButton onClick={() => navigate(-1)} sx={{ p: 0 }}>
//             <ArrowBackIcon sx={{ color: "#1a1a1a" }} />
//           </IconButton>
//           <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         </div>
//       </div>

//       <div className="kitchen-unified-block">
//         <div className="hero-content-split">
//           <div className="kitchen-image-large">
//             <img src={kitchen.image} alt={kitchen.name} />
//           </div>

//           <div className="kitchen-content">
//             <div className="kitchen-header">
//               <h3>{kitchen.name}</h3>
//               <div className="rating">
//                 <StarIcon className="star-icon" /> {kitchen.rating}
//                 <span>({kitchen.reviews})</span>
//               </div>
//               <div className="status-label">Open Now</div>
//             </div>

//             <div className="kitchen-info">
//               <p>
//                 <DirectionsRunIcon /> {distance} Km Away
//               </p>
//               <p>
//                 <RestaurantMenuIcon /> {kitchen.tags}
//               </p>
//               <p>
//                 <AccessTimeIcon /> 9:00 AM - 10:00 PM
//               </p>
//               <p>
//                 <LocationOnIcon /> {kitchen.address}
//               </p>
//             </div>

//             <div className="kitchen-footer">
//               <div className="delivery-badge">20 - 30 Min Delivery</div>
//             </div>
//           </div>
//         </div>

//         <div className="kitchen-gallery-section">
//           <h3 className="gallery-header-title">Photos</h3>
//           <div className="gallery-scroll-container">
//             {galleryPhotos.map((photo, index) => (
//               <div key={index} className="gallery-card-static">
//                 <img src={photo.url} alt={photo.title} />
//                 <div className="gallery-card-label">{photo.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="suggested-section">
//           <div className="suggested-header">
//             <h3 className="suggested-title">
//               SUGGESTED ITEMS ({suggestedItems.length})
//             </h3>
//             <button className="offers-badge-btn">OFFERS AVAILABLE</button>
//           </div>

//           <div className="suggested-grid-scroll">
//             {suggestedItems.map((item) => {
//               const qty = cart[item.id] || 0;
//               return (
//                 <div key={item.id} className="suggested-item-card">
//                   <div className={`veg-nonveg-icon ${item.type}`}></div>

//                   {item.discount && (
//                     <div className="hover-discount-tag">{item.discount}</div>
//                   )}
//                   <div className="product-image-box">
//                     <img src={item.img} alt={item.name} loading="lazy" />
//                   </div>
//                   <div className="product-info">
//                     <h4>{item.name}</h4>
//                     <p className="eta-text">⚡ 15 - 20 Minutes</p>
//                     <div className="product-card-footer">
//                       <div className="pricing">
//                         <span className="current-price">₹ {item.price}</span>
//                         {item.oldPrice && (
//                           <span className="slashed-price">
//                             ₹ {item.oldPrice}
//                           </span>
//                         )}
//                       </div>
//                       {qty === 0 ? (
//                         <button
//                           className="add-btn-main"
//                           onClick={() => updateQuantity(item.id, 1)}
//                         >
//                           Add
//                         </button>
//                       ) : (
//                         <div className="quantity-selector-container">
//                           <button onClick={() => updateQuantity(item.id, -1)}>
//                             -
//                           </button>
//                           <span>{qty}</span>
//                           <button onClick={() => updateQuantity(item.id, 1)}>
//                             +
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {totalItems > 0 && (
//         <div
//           className="view-cart-floating-bar"
//           onClick={() =>
//             navigate("/checkout", {
//               state: { cart, suggestedItems, totalPrice, distance },
//             })
//           }
//         >
//           <div className="cart-left">
//             <span className="cart-count">{totalItems} Items added</span>
//             <span className="cart-total">₹{totalPrice}</span>
//           </div>
//           <div className="cart-right">
//             <span>VIEW CART</span>
//             <RestaurantMenuIcon fontSize="small" />
//           </div>
//         </div>
//       )}

//       <button className="floating-menu-btn" onClick={() => setIsMenuOpen(true)}>
//         <RestaurantMenuIcon fontSize="small" />
//         <span>MENU</span>
//       </button>

//       {isMenuOpen && (
//         <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
//           <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="menu-categories">
//               {Object.keys(menuData).map((cat) => (
//                 <span
//                   key={cat}
//                   className={activeCategory === cat ? "active-cat" : ""}
//                   onClick={() => setActiveCategory(cat)}
//                 >
//                   {cat}
//                 </span>
//               ))}
//             </div>

//             <div className="menu-items-grid">
//               {menuData[activeCategory]?.map((item, index) => (
//                 <div key={index} className="menu-item-row">
//                   <span className="m-name">{item.name}</span>
//                   <span className="m-price">₹{item.price}</span>
//                 </div>
//               ))}
//             </div>

//             <button
//               className="close-menu-btn"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default KitchenDetails;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IconButton } from "@mui/material";

// // Icons
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import CloseIcon from "@mui/icons-material/Close";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

// import "./KitchenDetails.css";
// import { kitchenDataMap } from "../data/kitchenData";

// const KitchenDetails = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const kitchenName = location.state?.kitchenName;
//   const kitchen =
//     kitchenDataMap[kitchenName] || Object.values(kitchenDataMap)[0];

//   const suggestedItems = kitchen.suggestedItems || [];
//   const menuData = kitchen.menuData || {};
//   const galleryPhotos = kitchen.galleryPhotos || [];
//   const distance = 6;

//   // State Definitions
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedSort, setSelectedSort] = useState("Relevance");
//   const [isVeg, setIsVeg] = useState(false);
//   const [isNonVeg, setIsNonVeg] = useState(false);
//   const [isTopRated, setIsTopRated] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(
//     Object.keys(menuData)[0] || "",
//   );
//   const [cart, setCart] = useState({});

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const updateQuantity = (id, delta) => {
//     setCart((prev) => {
//       const currentQty = prev[id] || 0;
//       const newQty = currentQty + delta;
//       if (newQty <= 0) {
//         const newCart = { ...prev };
//         delete newCart[id];
//         return newCart;
//       }
//       return { ...prev, [id]: newQty };
//     });
//   };

//   const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);
//   const totalPrice = Object.keys(cart).reduce((sum, itemId) => {
//     const item = suggestedItems.find((i) => i.id === parseInt(itemId));
//     return item ? sum + item.price * cart[itemId] : sum;
//   }, 0);

//   return (
//     <div className="kitchen-details-page homemakers-page container">
//       <div className="filter-row">
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <IconButton onClick={() => navigate(-1)} sx={{ p: 0 }}>
//             <ArrowBackIcon sx={{ color: "#1a1a1a" }} />
//           </IconButton>
//           <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         </div>

//         <div className="action-buttons">
//           <button className="f-btn" onClick={() => setShowFilters(true)}>
//             <TuneIcon sx={{ fontSize: 18 }} /> Filters
//           </button>
//           <button className="f-btn" onClick={() => setShowSort(true)}>
//             <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
//           </button>
//           <button className="f-btn">
//             <MyLocationIcon sx={{ fontSize: 18 }} /> Near By
//           </button>
//         </div>
//       </div>
//       <div className="kitchen-unified-block">
//         <div className="hero-content-split">
//           <div className="kitchen-image-large">
//             <img src={kitchen.image} alt={kitchen.name} />
//           </div>
//           <div className="kitchen-content">
//             <div className="kitchen-header">
//               <h3>{kitchen.name}</h3>
//               <div className="rating">
//                 <StarIcon className="star-icon" /> {kitchen.rating}{" "}
//                 <span>({kitchen.reviews})</span>
//               </div>
//               <div className="status-label">Open Now</div>
//             </div>
//             <div className="kitchen-info">
//               <p>
//                 <DirectionsRunIcon /> {distance} Km Away
//               </p>
//               <p>
//                 <RestaurantMenuIcon /> {kitchen.tags}
//               </p>
//               <p>
//                 <AccessTimeIcon /> 9:00 AM - 10:00 PM
//               </p>
//               <p>
//                 <LocationOnIcon /> {kitchen.address}
//               </p>
//             </div>
//             <div className="kitchen-footer">
//               <div className="delivery-badge">20 - 30 Min Delivery</div>
//             </div>
//           </div>
//         </div>

//         {/* GALLERY SECTION */}
//         <div className="kitchen-gallery-section">
//           <h3 className="gallery-header-title">Photos</h3>
//           <div className="gallery-scroll-container">
//             {galleryPhotos.map((photo, index) => (
//               <div key={index} className="gallery-card-static">
//                 <img src={photo.url} alt={photo.title} />
//                 <div className="gallery-card-label">{photo.title}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//      {/* SUGGESTED ITEMS SECTION - KEEPING YOUR EXACT ORIGINAL LAYOUT */}
// <div className="suggested-section">
//   <div className="suggested-header">
//     <h3 className="suggested-title">
//       SUGGESTED ITEMS ({suggestedItems.length})
//     </h3>
//     <button className="offers-badge-btn">OFFERS AVAILABLE</button>
//   </div>

//   {/* Class name toggles between original scroll and your new wrap layout */}
//   <div className={isExpanded ? "suggested-grid-wrap" : "suggested-grid-scroll"}>
//     {(isExpanded ? suggestedItems : suggestedItems.slice(0, 4)).map((item) => {
//       const qty = cart[item.id] || 0;
//       return (
//         <div key={item.id} className="suggested-item-card">
//           <div className={`veg-nonveg-icon ${item.type}`}></div>
//           {item.discount && (
//             <div className="hover-discount-tag">{item.discount}</div>
//           )}
//           <div className="product-image-box">
//             <img src={item.img} alt={item.name} loading="lazy" />
//           </div>
//           <div className="product-info">
//             <h4>{item.name}</h4>
//             <p className="eta-text">⚡ 15 - 20 Minutes</p>
//             <div className="product-card-footer">
//               <div className="pricing">
//                 <span className="current-price">₹ {item.price}</span>
//                 {item.oldPrice && (
//                   <span className="slashed-price">₹ {item.oldPrice}</span>
//                 )}
//               </div>
//               {qty === 0 ? (
//                 <button className="add-btn-main" onClick={() => updateQuantity(item.id, 1)}>Add</button>
//               ) : (
//                 <div className="quantity-selector-container">
//                   <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                   <span>{qty}</span>
//                   <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     })}

//     {/* View All Button: Clicking this triggers the wrap behavior */}
//     {!isExpanded && suggestedItems.length > 4 && (
//       <div className="view-all-box">
//         <button className="blue-view-all-btn" onClick={() => setIsExpanded(true)}>
//           View All
//         </button>
//       </div>
//     )}
//   </div>
// </div>
//       </div>
//       {/* FOOTER COMPONENTS */}
//       {totalItems > 0 && (
//         <div
//           className="view-cart-floating-bar"
//           onClick={() =>
//             navigate("/checkout", {
//               state: { cart, suggestedItems, totalPrice, distance },
//             })
//           }
//         >
//           <div className="cart-left">
//             <span className="cart-count">
//               {totalItems} Items | ₹{totalPrice}
//             </span>
//           </div>
//           <div className="cart-right">
//             VIEW CART <RestaurantMenuIcon fontSize="small" />
//           </div>
//         </div>
//       )}
//       <button className="floating-menu-btn" onClick={() => setIsMenuOpen(true)}>
//         <RestaurantMenuIcon fontSize="small" /> <span>MENU</span>
//       </button>
//       //{" "}
//       {isMenuOpen && (
//         <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
//           <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="menu-categories">
//               {Object.keys(menuData).map((cat) => (
//                 <span
//                   key={cat}
//                   className={activeCategory === cat ? "active-cat" : ""}
//                   onClick={() => setActiveCategory(cat)}
//                 >
//                   {cat}
//                 </span>
//               ))}
//             </div>

//             <div className="menu-items-grid">
//               {menuData[activeCategory]?.map((item, index) => (
//                 <div key={index} className="menu-item-row">
//                   <span className="m-name">{item.name}</span>
//                   <span className="m-price">₹{item.price}</span>
//                 </div>
//               ))}
//             </div>

//             <button
//               className="close-menu-btn"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {/* MODALS */}
//       {showSort && (
//         <div className="modal-overlay" onClick={() => setShowSort(false)}>
//           <div
//             className="filter-modal-container"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="modal-header">
//               <h3>Sort By</h3>
//               <IconButton onClick={() => setShowSort(false)}>
//                 <CloseIcon />
//               </IconButton>
//             </div>
//             <div className="filter-content">
//               {[
//                 "Relevance",
//                 "Rating: High to Low",
//                 "Cost: Low to High",
//                 "Cost: High to Low",
//               ].map((opt) => (
//                 <div
//                   key={opt}
//                   className={`filter-row-item ${selectedSort === opt ? "active" : ""}`}
//                   onClick={() => {
//                     setSelectedSort(opt);
//                     setShowSort(false);
//                   }}
//                 >
//                   <div className="filter-info">
//                     <span>{opt}</span>
//                   </div>
//                   <div
//                     className={`radio-circle ${selectedSort === opt ? "checked" : ""}`}
//                   ></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//       {showFilters && (
//         <div className="modal-overlay" onClick={() => setShowFilters(false)}>
//           <div
//             className="filter-modal-container"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="modal-header">
//               <h3>Filters</h3>
//               <IconButton onClick={() => setShowFilters(false)}>
//                 <CloseIcon />
//               </IconButton>
//             </div>
//             <div className="filter-content">
//               <div
//                 className={`filter-row-item ${isVeg ? "active" : ""}`}
//                 onClick={() => setIsVeg(!isVeg)}
//               >
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon veg" />
//                   <span>Pure Veg</span>
//                 </div>
//                 {isVeg ? (
//                   <CheckCircleIcon className="check-icon" />
//                 ) : (
//                   <RadioButtonUncheckedIcon className="uncheck-icon" />
//                 )}
//               </div>
//               <div
//                 className={`filter-row-item ${isNonVeg ? "active" : ""}`}
//                 onClick={() => setIsNonVeg(!isNonVeg)}
//               >
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon non-veg" />
//                   <span>Non Veg</span>
//                 </div>
//                 {isNonVeg ? (
//                   <CheckCircleIcon className="check-icon" />
//                 ) : (
//                   <RadioButtonUncheckedIcon className="uncheck-icon" />
//                 )}
//               </div>
//               <div
//                 className={`filter-row-item ${isTopRated ? "active" : ""}`}
//                 onClick={() => setIsTopRated(!isTopRated)}
//               >
//                 <div className="filter-info">
//                   <StarIcon className="icon star" />
//                   <span>Top Rated (4.5+)</span>
//                 </div>
//                 {isTopRated ? (
//                   <CheckCircleIcon className="check-icon" />
//                 ) : (
//                   <RadioButtonUncheckedIcon className="uncheck-icon" />
//                 )}
//               </div>
//             </div>
//             <div className="filter-footer">
//               <button
//                 className="clear-text-btn"
//                 onClick={() => {
//                   setIsVeg(false);
//                   setIsNonVeg(false);
//                   setIsTopRated(false);
//                 }}
//               >
//                 Clear All
//               </button>
//               <button
//                 className="apply-main-btn"
//                 onClick={() => setShowFilters(false)}
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default KitchenDetails;














import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TuneIcon from "@mui/icons-material/Tune";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import "./KitchenDetails.css";
import { kitchenDataMap } from "../data/kitchenData";

const KitchenDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const kitchenName = location.state?.kitchenName;
  const kitchen =
    kitchenDataMap[kitchenName] || Object.values(kitchenDataMap)[0];

  const suggestedItems = kitchen.suggestedItems || [];
  const menuData = kitchen.menuData || {};
  const galleryPhotos = kitchen.galleryPhotos || [];
  const distance = 6;

  // State Definitions
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [isTopRated, setIsTopRated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(menuData)[0] || "",
  );
  const [cart, setCart] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = currentQty + delta;
      if (newQty <= 0) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);
  const totalPrice = Object.keys(cart).reduce((sum, itemId) => {
    const item = suggestedItems.find((i) => i.id === parseInt(itemId));
    return item ? sum + item.price * cart[itemId] : sum;
  }, 0);


  return (
    <div className="kitchen-details-page homemakers-page container">
      <div className="filter-row">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton onClick={() => navigate(-1)} sx={{ p: 0 }}>
            <ArrowBackIcon sx={{ color: "#1a1a1a" }} />
          </IconButton>
          <h2 className="section-title">OUR TOP PICK UP'S</h2>
        </div>

        <div className="action-buttons">
          <button className="f-btn" onClick={() => setShowFilters(true)}>
            <TuneIcon sx={{ fontSize: 18 }} /> Filters
          </button>
          <button className="f-btn" onClick={() => setShowSort(true)}>
            <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
          </button>
          <button className="f-btn">
            <MyLocationIcon sx={{ fontSize: 18 }} /> Near By
          </button>
        </div>
      </div>
      <div className="kitchen-unified-block">
        <div className="hero-content-split">
          <div className="kitchen-image-large">
            <img src={kitchen.image} alt={kitchen.name} />
          </div>
          <div className="kitchen-content">
            <div className="kitchen-header">
              <h3>{kitchen.name}</h3>
              <div className="rating">
                <StarIcon className="star-icon" /> {kitchen.rating}{" "}
                <span>({kitchen.reviews})</span>
              </div>
              <div className="status-label">Open Now</div>
            </div>
            <div className="kitchen-info">
              <p>
                <DirectionsRunIcon /> {distance} Km Away
              </p>
              <p>
                <RestaurantMenuIcon /> {kitchen.tags}
              </p>
              <p>
                <AccessTimeIcon /> 9:00 AM - 10:00 PM
              </p>
              <p>
                <LocationOnIcon /> {kitchen.address}
              </p>
            </div>
            <div className="kitchen-footer">
              <div className="delivery-badge">20 - 30 Min Delivery</div>
            </div>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="kitchen-gallery-section">
          <h3 className="gallery-header-title">Photos</h3>
          <div className="gallery-scroll-container">
            {galleryPhotos.map((photo, index) => (
              <div key={index} className="gallery-card-static">
                <img src={photo.url} alt={photo.title} />
                <div className="gallery-card-label">{photo.title}</div>
              </div>
            ))}
          </div>
        </div>

     {/* SUGGESTED ITEMS SECTION - KEEPING YOUR EXACT ORIGINAL LAYOUT */}
<div className="suggested-section">
  <div className="suggested-header">
    <h3 className="suggested-title">
      SUGGESTED ITEMS ({suggestedItems.length})
    </h3>
    <button className="offers-badge-btn">OFFERS AVAILABLE</button>
  </div>

  {/* Class name toggles between original scroll and your new wrap layout */}
  <div className={isExpanded ? "suggested-grid-wrap" : "suggested-grid-scroll"}>
    {(isExpanded ? suggestedItems : suggestedItems.slice(0, 4)).map((item) => {
      const qty = cart[item.id] || 0;
      return (
        <div key={item.id} className="suggested-item-card">
          <div className={`veg-nonveg-icon ${item.type}`}></div>
          {item.discount && (
            <div className="hover-discount-tag">{item.discount}</div>
          )}
          <div className="product-image-box">
            <img src={item.img} alt={item.name} loading="lazy" />
          </div>
          <div className="product-info">
            <h4>{item.name}</h4>
            <p className="eta-text">⚡ 15 - 20 Minutes</p>
            <div className="product-card-footer">
              <div className="pricing">
                <span className="current-price">₹ {item.price}</span>
                {item.oldPrice && (
                  <span className="slashed-price">₹ {item.oldPrice}</span>
                )}
              </div>
              {qty === 0 ? (
                <button className="add-btn-main" onClick={() => updateQuantity(item.id, 1)}>Add</button>
              ) : (
                <div className="quantity-selector-container">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{qty}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    })}

    {/* View All Button: Clicking this triggers the wrap behavior */}
    {!isExpanded && suggestedItems.length > 4 && (
      <div className="view-all-box">
        <button className="blue-view-all-btn" onClick={() => setIsExpanded(true)}>
          View All
        </button>
      </div>
    )}
  </div>
</div>
      </div>
      {/* FOOTER COMPONENTS */}
      {totalItems > 0 && (
        <div
          className="view-cart-floating-bar"
          onClick={() =>
            navigate("/checkout", {
              state: { cart, suggestedItems, totalPrice, distance },
            })
          }
        >
          <div className="cart-left">
            <span className="cart-count">
              {totalItems} Items | ₹{totalPrice}
            </span>
          </div>
          <div className="cart-right">
            VIEW CART <RestaurantMenuIcon fontSize="small" />
          </div>
        </div>
      )}
      <button className="floating-menu-btn" onClick={() => setIsMenuOpen(true)}>
        <RestaurantMenuIcon fontSize="small" /> <span>MENU</span>
      </button>
      {" "}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
            <div className="menu-categories">
              {Object.keys(menuData).map((cat) => (
                <span
                  key={cat}
                  className={activeCategory === cat ? "active-cat" : ""}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="menu-items-grid">
              {menuData[activeCategory]?.map((item, index) => (
                <div key={index} className="menu-item-row">
                  <span className="m-name">{item.name}</span>
                  <span className="m-price">₹{item.price}</span>
                </div>
              ))}
            </div>

            <button
              className="close-menu-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* MODALS */}
      {showSort && (
        <div className="modal-overlay" onClick={() => setShowSort(false)}>
          <div
            className="filter-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Sort By</h3>
              <IconButton onClick={() => setShowSort(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="filter-content">
              {[
                "Relevance",
                "Rating: High to Low",
                "Cost: Low to High",
                "Cost: High to Low",
              ].map((opt) => (
                <div
                  key={opt}
                  className={`filter-row-item ${selectedSort === opt ? "active" : ""}`}
                  onClick={() => {
                    setSelectedSort(opt);
                    setShowSort(false);
                  }}
                >
                  <div className="filter-info">
                    <span>{opt}</span>
                  </div>
                  <div
                    className={`radio-circle ${selectedSort === opt ? "checked" : ""}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showFilters && (
        <div className="modal-overlay" onClick={() => setShowFilters(false)}>
          <div
            className="filter-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Filters</h3>
              <IconButton onClick={() => setShowFilters(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="filter-content">
              <div
                className={`filter-row-item ${isVeg ? "active" : ""}`}
                onClick={() => setIsVeg(!isVeg)}
              >
                <div className="filter-info">
                  <RadioButtonCheckedIcon className="icon veg" />
                  <span>Pure Veg</span>
                </div>
                {isVeg ? (
                  <CheckCircleIcon className="check-icon" />
                ) : (
                  <RadioButtonUncheckedIcon className="uncheck-icon" />
                )}
              </div>
              <div
                className={`filter-row-item ${isNonVeg ? "active" : ""}`}
                onClick={() => setIsNonVeg(!isNonVeg)}
              >
                <div className="filter-info">
                  <RadioButtonCheckedIcon className="icon non-veg" />
                  <span>Non Veg</span>
                </div>
                {isNonVeg ? (
                  <CheckCircleIcon className="check-icon" />
                ) : (
                  <RadioButtonUncheckedIcon className="uncheck-icon" />
                )}
              </div>
              <div
                className={`filter-row-item ${isTopRated ? "active" : ""}`}
                onClick={() => setIsTopRated(!isTopRated)}
              >
                <div className="filter-info">
                  <StarIcon className="icon star" />
                  <span>Top Rated (4.5+)</span>
                </div>
                {isTopRated ? (
                  <CheckCircleIcon className="check-icon" />
                ) : (
                  <RadioButtonUncheckedIcon className="uncheck-icon" />
                )}
              </div>
            </div>
            <div className="filter-footer">
              <button
                className="clear-text-btn"
                onClick={() => {
                  setIsVeg(false);
                  setIsNonVeg(false);
                  setIsTopRated(false);
                }}
              >
                Clear All
              </button>
              <button
                className="apply-main-btn"
                onClick={() => setShowFilters(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KitchenDetails;

































