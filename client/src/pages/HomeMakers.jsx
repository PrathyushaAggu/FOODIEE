// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Add this
// import './HomeMakers.css';
// import StarIcon from '@mui/icons-material/Star';
// import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import NorthEastIcon from '@mui/icons-material/NorthEast';
// import TuneIcon from '@mui/icons-material/Tune';
// import SwapVertIcon from '@mui/icons-material/SwapVert';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// import GrandmaImg from '../assets/grandma.jpg';

// const HomeMakers = () => {
//   const navigate = useNavigate(); // Initialize navigate

//   const kitchenData = [
//     { id: 1, name: "Amma 's Kitchen", rating: "4.5", reviews: "1,160", tags: "Burgers, Pizza's", price: "99", image: "https://smashboard.org/content/images/2022/03/photo5879483377374050613.jpg" },
//     { id: 2, name: "Grandma's Spice", rating: "4.8", reviews: "850", tags: "Biryani, Curries", price: "149", image: GrandmaImg},
//     { id: 3, name: "Home Deli", rating: "4.2", reviews: "500", tags: "Sandwiches, Shakes", price: "79", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
//     { id: 4, name: "Mom's Special", rating: "4.9", reviews: "2,100", tags: "South Indian, Dosa", price: "60", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
//     { id: 5, name: "Village Flavors", rating: "4.6", reviews: "320", tags: "Thalis, Village Food", price: "120", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" }
//   ];

//   return (
//     <div className="homemakers-page container">
//       {/* Filter row remains the same */}
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button className="f-btn"><TuneIcon /> Filters</button>
//           <button className="f-btn"><SwapVertIcon /> Sort By</button>
//           <button className="f-btn"><MyLocationIcon /> Near By</button>
//           <button className="f-btn"><RadioButtonCheckedIcon style={{color: '#d32f2f'}} /> Non Veg</button>
//           <button className="f-btn"><RadioButtonCheckedIcon style={{color: '#2e7d32'}} /> Pure Veg</button>
//         </div>
//       </div>

//       <div className="kitchen-list">
//         {kitchenData.map((item) => (
//           /* Added onClick to navigate to details */
//           <div
//             key={item.id}
//             className="kitchen-card"
//             onClick={() => navigate(`/kitchen/${item.id}`)}
//             style={{ cursor: 'pointer' }}
//           >
//             <div className="kitchen-image">
//               <img src={`${item.image}?auto=format&fit=crop&w=400&q=80`} alt={item.name} />
//             </div>

//             <div className="kitchen-content">
//               <div className="kitchen-header">
//                 <h3>{item.name}</h3>
//                 <div className="rating">
//                   <StarIcon className="star-icon" /> {item.rating} <span>({item.reviews})</span>
//                 </div>
//                 <div className="status-label">Open Now</div>
//               </div>

//               <div className="kitchen-info">
//                 <p><DirectionsRunIcon /> 5 Km Away</p>
//                 <p><RestaurantMenuIcon /> {item.tags}</p>
//                 <p><AccessTimeIcon /> Opens from 9:00 AM to 10:00 PM</p>
//                 <p><LocationOnIcon /> 3-6-526(Old 10-152),Himayathnagar</p>
//               </div>

//               <div className="kitchen-footer">
//                 <div className="delivery-badge">20 - 30 Min Delivery</div>
//                 <div className="price-info">
//                   Starts from <strong>₹{item.price}</strong>
//                   <div className="arrow-box"><NorthEastIcon /></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Add this
// import './HomeMakers.css';
// import StarIcon from '@mui/icons-material/Star';
// import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import NorthEastIcon from '@mui/icons-material/NorthEast';
// import TuneIcon from '@mui/icons-material/Tune';
// import SwapVertIcon from '@mui/icons-material/SwapVert';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// import GrandmaImg from '../assets/grandma.jpg';

// const HomeMakers = () => {
//   const navigate = useNavigate(); // Initialize navigate

//   const kitchenData = [
//     { id: 1, name: "Amma 's Kitchen", rating: "4.5", reviews: "1,160", tags: "Burgers, Pizza's", price: "99", image: "https://smashboard.org/content/images/2022/03/photo5879483377374050613.jpg" },
//     { id: 2, name: "Grandma's Spice", rating: "4.8", reviews: "850", tags: "Biryani, Curries", price: "149", image: GrandmaImg},
//     { id: 3, name: "Home Deli", rating: "4.2", reviews: "500", tags: "Sandwiches, Shakes", price: "79", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
//     { id: 4, name: "Mom's Special", rating: "4.9", reviews: "2,100", tags: "South Indian, Dosa", price: "60", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
//     { id: 5, name: "Village Flavors", rating: "4.6", reviews: "320", tags: "Thalis, Village Food", price: "120", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" }
//   ];

//   return (
//     <div className="homemakers-page container">
//       {/* Filter row remains the same */}
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button className="f-btn"><TuneIcon /> Filters</button>
//           <button className="f-btn"><SwapVertIcon /> Sort By</button>
//           <button className="f-btn"><MyLocationIcon /> Near By</button>
//           <button className="f-btn"><RadioButtonCheckedIcon style={{color: '#d32f2f'}} /> Non Veg</button>
//           <button className="f-btn"><RadioButtonCheckedIcon style={{color: '#2e7d32'}} /> Pure Veg</button>
//         </div>
//       </div>

//       <div className="kitchen-list">
//         {kitchenData.map((item) => (
//           /* Added onClick to navigate to details */
//           <div
//             key={item.id}
//             className="kitchen-card"
//             onClick={() => navigate(`/kitchen/${item.id}`)}
//             style={{ cursor: 'pointer' }}
//           >
//             <div className="kitchen-image">
//               <img src={`${item.image}?auto=format&fit=crop&w=400&q=80`} alt={item.name} />
//             </div>

//             <div className="kitchen-content">
//               <div className="kitchen-header">
//                 <h3>{item.name}</h3>
//                 <div className="rating">
//                   <StarIcon className="star-icon" /> {item.rating} <span>({item.reviews})</span>
//                 </div>
//                 <div className="status-label">Open Now</div>
//               </div>

//               <div className="kitchen-info">
//                 <p><DirectionsRunIcon /> 5 Km Away</p>
//                 <p><RestaurantMenuIcon /> {item.tags}</p>
//                 <p><AccessTimeIcon /> Opens from 9:00 AM to 10:00 PM</p>
//                 <p><LocationOnIcon /> 3-6-526(Old 10-152),Himayathnagar</p>
//               </div>

//               <div className="kitchen-footer">
//                 <div className="delivery-badge">20 - 30 Min Delivery</div>
//                 <div className="price-info">
//                   Starts from <strong>₹{item.price}</strong>
//                   <div className="arrow-box"><NorthEastIcon /></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HomeMakers.css';

// // Icons
// import StarIcon from '@mui/icons-material/Star';
// import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import NorthEastIcon from '@mui/icons-material/NorthEast';
// import TuneIcon from '@mui/icons-material/Tune';
// import SwapVertIcon from '@mui/icons-material/SwapVert';
// import MyLocationIcon from '@mui/icons-material/MyLocation';
// import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// import CloseIcon from '@mui/icons-material/Close';

// // Import the image correctly
// import GrandmaImg from '../assets/grandma.jpg';

// const HomeMakers = () => {
//   const navigate = useNavigate();

//   // --- POPUP STATES ---
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedSort, setSelectedSort] = useState("Relevance");

//   const kitchenData = [
//     { id: 1, name: "Amma 's Kitchen", rating: "4.5", reviews: "1,160", tags: "Burgers, Pizza's", price: "99", image: "https://smashboard.org/content/images/2022/03/photo5879483377374050613.jpg" },
//     { id: 2, name: "Grandma's Spice", rating: "4.8", reviews: "850", tags: "Biryani, Curries", price: "149", image: GrandmaImg },
//     { id: 3, name: "Home Deli", rating: "4.2", reviews: "500", tags: "Sandwiches, Shakes", price: "79", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
//     { id: 4, name: "Mom's Special", rating: "4.9", reviews: "2,100", tags: "South Indian, Dosa", price: "60", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
//     { id: 5, name: "Village Flavors", rating: "4.6", reviews: "320", tags: "Thalis, Village Food", price: "120", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" }
//   ];

//   const sortOptions = ["Relevance", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low"];

//   return (
//     <div className="homemakers-page container">
//       {/* FILTER ROW */}
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button className="f-btn" onClick={() => setShowFilters(true)}><TuneIcon /> Filters</button>
//           <button className="f-btn" onClick={() => setShowSort(true)}><SwapVertIcon /> Sort By</button>
//           <button className="f-btn"><MyLocationIcon /> Near By</button>
//           <button className="f-btn"><RadioButtonCheckedIcon style={{color: '#d32f2f'}} /> Non Veg</button>
//           <button className="f-btn"><RadioButtonCheckedIcon style={{color: '#2e7d32'}} /> Pure Veg</button>
//         </div>
//       </div>

//       {/* SORT POPUP */}
//       {showSort && (
//         <div className="modal-overlay" onClick={() => setShowSort(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Sort By</h3>
//               <CloseIcon className="close-btn" onClick={() => setShowSort(false)} />
//             </div>
//             <div className="options-list">
//               {sortOptions.map((opt) => (
//                 <div key={opt} className="option-item" onClick={() => { setSelectedSort(opt); setShowSort(false); }}>
//                   <span>{opt}</span>
//                   <div className={`radio-circle ${selectedSort === opt ? 'checked' : ''}`}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* FILTERS POPUP (Placeholder for now) */}
//       {showFilters && (
//         <div className="modal-overlay" onClick={() => setShowFilters(false)}>
//           <div className="modal-content filter-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Filters</h3>
//               <CloseIcon className="close-btn" onClick={() => setShowFilters(false)} />
//             </div>
//             <div className="filter-body">
//                <p>Select your preferences...</p>
//                {/* Add your checkboxes here */}
//             </div>
//             <button className="apply-btn" onClick={() => setShowFilters(false)}>Apply Filters</button>
//           </div>
//         </div>
//       )}

//       {/* KITCHEN LIST */}
//       <div className="kitchen-list">
//         {kitchenData.map((item) => (
//           <div key={item.id} className="kitchen-card" onClick={() => navigate(`/kitchen/${item.id}`)}>
//             <div className="kitchen-image">
//               <img src={typeof item.image === 'string' ? `${item.image}?auto=format&fit=crop&w=400&q=80` : item.image} alt={item.name} />
//             </div>

//             <div className="kitchen-content">
//               <div className="kitchen-header">
//                 <h3>{item.name}</h3>
//                 <div className="rating">
//                   <StarIcon className="star-icon" /> {item.rating} <span>({item.reviews})</span>
//                 </div>
//                 <div className="status-label">Open Now</div>
//               </div>

//               <div className="kitchen-info">
//                 <p><DirectionsRunIcon /> 5 Km Away</p>
//                 <p><RestaurantMenuIcon /> {item.tags}</p>
//                 <p><AccessTimeIcon /> Opens from 9:00 AM to 10:00 PM</p>
//                 <p><LocationOnIcon /> 3-6-526(Old 10-152),Himayathnagar</p>
//               </div>

//               <div className="kitchen-footer">
//                 <div className="delivery-badge">20 - 30 Min Delivery</div>
//                 <div className="price-info">
//                   Starts from <strong>₹{item.price}</strong>
//                   <div className="arrow-box"><NorthEastIcon /></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import FilterBar from "./FilterBar";
// import "./HomeMakers.css";

// // Only keep icons used in the kitchen cards
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NorthEastIcon from "@mui/icons-material/NorthEast";

// import GrandmaImg from "../assets/grandma.jpg";

// const HomeMakers = () => {
//   const navigate = useNavigate();

//   const kitchenData = [
//     {
//       id: 1,
//       name: "Amma 's Kitchen",
//       rating: "4.5",
//       reviews: "1,160",
//       tags: "Burgers, Pizza's",
//       price: "99",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cyXWIyUye9WlVzNP4iPxdSlZXDAfKAFl_uPoZ_XHOVKgHktLNsC-NymFZMJHAH1aZhU&usqp=CAU",
//     },
//     {
//       id: 2,
//       name: "Grandma's Spice",
//       rating: "4.8",
//       reviews: "850",
//       tags: "Biryani, Curries",
//       price: "149",
//       image: GrandmaImg,
//     },
//     {
//       id: 3,
//       name: "Home Deli",
//       rating: "4.2",
//       reviews: "500",
//       tags: "Sandwiches, Shakes",
//       price: "79",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
//     },
//     {
//       id: 4,
//       name: "Mom's Special",
//       rating: "4.9",
//       reviews: "2,100",
//       tags: "South Indian, Dosa",
//       price: "60",
//       image:
//         "https://smashboard.org/content/images/2022/03/photo5879483377374050613.jpg",
//     },
//     {
//       id: 5,
//       name: "Village Flavors",
//       rating: "4.6",
//       reviews: "320",
//       tags: "Thalis, Village Food",
//       price: "120",
//       image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
//     },
//   ];

//   return (
//     <div className="homemakers-page container">
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>

//         {/* REPLACED: All button and modal logic is now inside this one line */}
//         <FilterBar
//           onSortSelect={(type) => console.log("Sort by:", type)}
//           onFilterClick={() => console.log("Open filters")}
//         />
//       </div>

//       <div className="kitchen-list">
//         {kitchenData.map((item) => (
//           <div
//             key={item.id}
//             className="kitchen-card"
//             onClick={() =>
//               navigate(`/kitchen/${item.id}`, { state: { kitchen: item } })
//             }
//           >
//             <div className="kitchen-image">
//               <img
//                 src={
//                   typeof item.image === "string"
//                     ? `${item.image}?auto=format&fit=crop&w=400&q=80`
//                     : item.image
//                 }
//                 alt={item.name}
//               />
//             </div>

//             <div className="kitchen-content">
//               <div className="kitchen-header">
//                 <h3>{item.name}</h3>
//                 <div className="rating">
//                   <StarIcon className="star-icon" /> {item.rating}{" "}
//                   <span>({item.reviews})</span>
//                 </div>
//                 <div className="status-label">Open Now</div>
//               </div>

//               <div className="kitchen-info">
//                 <p>
//                   <DirectionsRunIcon /> 5 Km Away
//                 </p>
//                 <p>
//                   <RestaurantMenuIcon /> {item.tags}
//                 </p>
//                 <p>
//                   <AccessTimeIcon /> Opens from 9:00 AM to 10:00 PM
//                 </p>
//                 <p>
//                   <LocationOnIcon /> 3-6-526(Old 10-152),Himayathnagar
//                 </p>
//               </div>

//               <div className="kitchen-footer">
//                 <div className="delivery-badge">20 - 30 Min Delivery</div>
//                 <div className="price-info">
//                   Starts from <strong>₹{item.price}</strong>
//                   <div className="arrow-box">
//                     <NorthEastIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./HomeMakers.css";
// import { kitchenDataMap } from "../data/kitchenData";

// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NorthEastIcon from "@mui/icons-material/NorthEast";

// const HomeMakers = () => {
//   const navigate = useNavigate();

//   const kitchenList = Object.values(kitchenDataMap);

//   return (
//     <div className="homemakers-page container">
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//       </div>

//       <div className="kitchen-list">
//         {kitchenList.map((item) => (
//           <div
//             key={item.id}
//             className="kitchen-card"
//             onClick={() =>
//               navigate(`/kitchen/${item.id}`, {
//                 state: { kitchenName: item.name },
//               })
//             }
//           >
//             <div className="kitchen-image">
//               <img src={item.image} alt={item.name} />
//             </div>

//             <div className="kitchen-content">
//               <div className="kitchen-header">
//                 <h3>{item.name}</h3>
//                 <div className="rating">
//                   <StarIcon className="star-icon" /> {item.rating}
//                   <span>({item.reviews})</span>
//                 </div>
//                 <div className="status-label">Open Now</div>
//               </div>

//               <div className="kitchen-info">
//                 <p>
//                   <DirectionsRunIcon /> 5 Km Away
//                 </p>
//                 <p>
//                   <RestaurantMenuIcon /> {item.tags}
//                 </p>
//                 <p>
//                   <AccessTimeIcon /> Opens from 9:00 AM to 10:00 PM
//                 </p>
//                 <p>
//                   <LocationOnIcon /> {item.address}
//                 </p>
//               </div>

//               <div className="kitchen-footer">
//                 <div className="delivery-badge">20 - 30 Min Delivery</div>
//                 <div className="price-info">
//                   Starts from <strong>₹{item.price}</strong>
//                   <div className="arrow-box">
//                     <NorthEastIcon />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";

// // Icons
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NorthEastIcon from "@mui/icons-material/NorthEast";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// import { kitchenDataMap } from "../data/kitchenData";
// import "./HomeMakers.css";

// const HomeMakers = () => {
//   const navigate = useNavigate();

//   // Modal States
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   // Filter Value States
//   const [selectedSort, setSelectedSort] = useState("Relevance");
//   const [isVeg, setIsVeg] = useState(false);
//   const [isNonVeg, setIsNonVeg] = useState(false);
//   const [isTopRated, setIsTopRated] = useState(false);

//   const hasActiveFilters = isVeg || isNonVeg || isTopRated;

//   // Filter & Sort logic
//   const filteredKitchens = useMemo(() => {
//     let list = Object.values(kitchenDataMap);

//     if (isVeg && !isNonVeg) {
//       list = list.filter(k => k.tags.toLowerCase().includes("veg") && !k.tags.toLowerCase().includes("non"));
//     }
//     if (isNonVeg && !isVeg) {
//       list = list.filter(k => k.tags.toLowerCase().includes("non-veg") || k.tags.toLowerCase().includes("chicken"));
//     }
//     if (isTopRated) {
//       list = list.filter(k => parseFloat(k.rating) >= 4.5);
//     }

//     const sorted = [...list];
//     if (selectedSort === "Rating: High to Low") sorted.sort((a, b) => b.rating - a.rating);
//     if (selectedSort === "Cost: Low to High") sorted.sort((a, b) => a.price - b.price);
//     if (selectedSort === "Cost: High to Low") sorted.sort((a, b) => b.price - a.price);

//     return sorted;
//   }, [selectedSort, isVeg, isNonVeg, isTopRated]);

//   return (
//     <div className="homemakers-page">
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button
//             className={`f-btn ${hasActiveFilters ? 'active-btn' : ''}`}
//             onClick={() => setShowFilters(true)}
//           >
//             <TuneIcon sx={{ fontSize: 18 }} />
//             Filters {hasActiveFilters && <span className="filter-count">!</span>}
//           </button>

//           <button className="f-btn" onClick={() => setShowSort(true)}>
//             <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
//           </button>

//           <button className="f-btn"><MyLocationIcon sx={{ fontSize: 18 }} /> Near By</button>
//         </div>
//       </div>

//       {/* FILTER MODAL */}
//       {showFilters && (
//         <div className="modal-overlay" onClick={() => setShowFilters(false)}>
//           <div className="filter-modal-container" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Filters</h3>
//               <IconButton onClick={() => setShowFilters(false)}><CloseIcon /></IconButton>
//             </div>

//             <div className="filter-content">
//               <div className={`filter-row-item ${isVeg ? "active" : ""}`} onClick={() => setIsVeg(!isVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon veg" />
//                   <span>Pure Veg</span>
//                 </div>
//                 {isVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isNonVeg ? "active" : ""}`} onClick={() => setIsNonVeg(!isNonVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon non-veg" />
//                   <span>Non Veg</span>
//                 </div>
//                 {isNonVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isTopRated ? "active" : ""}`} onClick={() => setIsTopRated(!isTopRated)}>
//                 <div className="filter-info">
//                   <StarIcon className="icon star" />
//                   <span>Top Rated (4.5+)</span>
//                 </div>
//                 {isTopRated ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>
//             </div>

//             <div className="filter-footer">
//               <button className="clear-text-btn" onClick={() => {setIsVeg(false); setIsNonVeg(false); setIsTopRated(false);}}>Clear All</button>
//               <button className="apply-main-btn" onClick={() => setShowFilters(false)}>Apply</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* KITCHEN LIST */}
//       <div className="kitchen-list">
//         {filteredKitchens.map((item) => (
//           <div key={item.id} className="kitchen-card" onClick={() => navigate(`/kitchen/${item.id}`, { state: { kitchenName: item.name } })}>
//             <div className="kitchen-image">
//               <img src={item.image} alt={item.name} />
//             </div>
//             <div className="kitchen-content">
//               <div className="kitchen-header">
//                 <h3>{item.name}</h3>
//                 <div className="rating">
//                   <StarIcon className="star-icon" /> {item.rating} <span>({item.reviews})</span>
//                 </div>
//                 <div className="status-label">Open Now</div>
//               </div>
//               <div className="kitchen-info">
//                 <p><DirectionsRunIcon /> 5 Km Away</p>
//                 <p><RestaurantMenuIcon /> {item.tags}</p>
//                 <p><AccessTimeIcon /> 9:00 AM - 10:00 PM</p>
//                 <p><LocationOnIcon /> {item.address}</p>
//               </div>
//               <div className="kitchen-footer">
//                 <div className="delivery-badge">20 - 30 Min Delivery</div>
//                 <div className="price-info">
//                   Starts from <strong>₹{item.price}</strong>
//                   <div className="arrow-box"><NorthEastIcon sx={{ fontSize: 16 }} /></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";

// // Icons
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NorthEastIcon from "@mui/icons-material/NorthEast";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// import { kitchenDataMap } from "../data/kitchenData";
// import "./HomeMakers.css";

// const HomeMakers = () => {
//   const navigate = useNavigate();

//   // Modal States
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   // Filter Value States
//   const [selectedSort, setSelectedSort] = useState("Relevance");
//   const [isVeg, setIsVeg] = useState(false);
//   const [isNonVeg, setIsNonVeg] = useState(false);
//   const [isTopRated, setIsTopRated] = useState(false);

//   const hasActiveFilters = isVeg || isNonVeg || isTopRated;

//   // Filter & Sort logic
//   const filteredKitchens = useMemo(() => {
//     let list = Object.values(kitchenDataMap);

//     if (isVeg && !isNonVeg) {
//       list = list.filter(k => k.tags.toLowerCase().includes("veg") && !k.tags.toLowerCase().includes("non"));
//     }
//     if (isNonVeg && !isVeg) {
//       list = list.filter(k => k.tags.toLowerCase().includes("non-veg") || k.tags.toLowerCase().includes("chicken"));
//     }
//     if (isTopRated) {
//       list = list.filter(k => parseFloat(k.rating) >= 4.5);
//     }

//     const sorted = [...list];
//     if (selectedSort === "Rating: High to Low") sorted.sort((a, b) => b.rating - a.rating);
//     if (selectedSort === "Cost: Low to High") sorted.sort((a, b) => a.price - b.price);
//     if (selectedSort === "Cost: High to Low") sorted.sort((a, b) => b.price - a.price);

//     return sorted;
//   }, [selectedSort, isVeg, isNonVeg, isTopRated]);

//   return (
//     <div className="homemakers-page">
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button
//             className={`f-btn ${hasActiveFilters ? 'active-btn' : ''}`}
//             onClick={() => setShowFilters(true)}
//           >
//             <TuneIcon sx={{ fontSize: 18 }} />
//             Filters {hasActiveFilters && <span className="filter-count">!</span>}
//           </button>

//           <button className="f-btn" onClick={() => setShowSort(true)}>
//             <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
//           </button>

//           <button className="f-btn"><MyLocationIcon sx={{ fontSize: 18 }} /> Near By</button>
//         </div>
//       </div>

//       {/* PLACE THIS SORT MODAL ABOVE THE FILTER MODAL */}
// {showSort && (
//   <div className="modal-overlay" onClick={() => setShowSort(false)}>
//     <div className="filter-modal-container" onClick={(e) => e.stopPropagation()}>
//       <div className="modal-header">
//         <h3>Sort By</h3>
//         <IconButton onClick={() => setShowSort(false)}><CloseIcon /></IconButton>
//       </div>
//       <div className="filter-content">
//         {["Relevance", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low"].map((opt) => (
//           <div
//             key={opt}
//             className={`filter-row-item ${selectedSort === opt ? "active" : ""}`}
//             onClick={() => { setSelectedSort(opt); setShowSort(false); }}
//           >
//             <div className="filter-info"><span>{opt}</span></div>
//             <div className={`radio-circle ${selectedSort === opt ? "checked" : ""}`}></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )}

//       {/* FILTER MODAL */}
//       {showFilters && (
//         <div className="modal-overlay" onClick={() => setShowFilters(false)}>
//           <div className="filter-modal-container" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Filters</h3>
//               <IconButton onClick={() => setShowFilters(false)}><CloseIcon /></IconButton>
//             </div>

//             <div className="filter-content">
//               <div className={`filter-row-item ${isVeg ? "active" : ""}`} onClick={() => setIsVeg(!isVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon veg" />
//                   <span>Pure Veg</span>
//                 </div>
//                 {isVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isNonVeg ? "active" : ""}`} onClick={() => setIsNonVeg(!isNonVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon non-veg" />
//                   <span>Non Veg</span>
//                 </div>
//                 {isNonVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isTopRated ? "active" : ""}`} onClick={() => setIsTopRated(!isTopRated)}>
//                 <div className="filter-info">
//                   <StarIcon className="icon star" />
//                   <span>Top Rated (4.5+)</span>
//                 </div>
//                 {isTopRated ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>
//             </div>

//             <div className="filter-footer">
//               <button className="clear-text-btn" onClick={() => {setIsVeg(false); setIsNonVeg(false); setIsTopRated(false);}}>Clear All</button>
//               <button className="apply-main-btn" onClick={() => setShowFilters(false)}>Apply</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* KITCHEN LIST */}
//       <div className="kitchen-list">
//         {filteredKitchens.map((item) => (
//           <div key={item.id} className="kitchen-card" onClick={() => navigate(`/kitchen/${item.id}`, { state: { kitchenName: item.name } })}>
//             <div className="kitchen-image">
//               <img src={item.image} alt={item.name} />
//             </div>
//             <div className="kitchen-content">
//               <div className="kitchen-header">
//                 <h3>{item.name}</h3>
//                 <div className="rating">
//                   <StarIcon className="star-icon" /> {item.rating} <span>({item.reviews})</span>
//                 </div>
//                 <div className="status-label">Open Now</div>
//               </div>
//               <div className="kitchen-info">
//                 <p><DirectionsRunIcon /> 5 Km Away</p>
//                 <p><RestaurantMenuIcon /> {item.tags}</p>
//                 <p><AccessTimeIcon /> 9:00 AM - 10:00 PM</p>
//                 <p><LocationOnIcon /> {item.address}</p>
//               </div>
//               <div className="kitchen-footer">
//                 <div className="delivery-badge">20 - 30 Min Delivery</div>
//                 <div className="price-info">
//                   Starts from <strong>₹{item.price}</strong>
//                   <div className="arrow-box"><NorthEastIcon sx={{ fontSize: 16 }} /></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";

// // Icons
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NorthEastIcon from "@mui/icons-material/NorthEast";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// import { kitchenDataMap } from "../data/kitchenData";
// import "./HomeMakers.css";

// // Accept searchText as a prop from App.js
// const HomeMakers = ({ searchText }) => {
//   const navigate = useNavigate();

//   // Modal States
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   // Filter Value States
//   const [selectedSort, setSelectedSort] = useState("Relevance");
//   const [isVeg, setIsVeg] = useState(false);
//   const [isNonVeg, setIsNonVeg] = useState(false);
//   const [isTopRated, setIsTopRated] = useState(false);

//   const hasActiveFilters = isVeg || isNonVeg || isTopRated;

//   // Filter & Sort logic
//   const filteredKitchens = useMemo(() => {
//     let list = Object.values(kitchenDataMap);

//     // 1. INTEGRATED SEARCH LOGIC
//     // This filters the list based on kitchen name or tags (e.g., "Biryani")
//     if (searchText && searchText.trim() !== "") {
//       const query = searchText.toLowerCase();
//       list = list.filter(k =>
//         k.name.toLowerCase().includes(query) ||
//         k.tags.toLowerCase().includes(query)
//       );
//     }

//     // 2. EXISTING FILTER LOGIC (Maintained)
//     if (isVeg && !isNonVeg) {
//       list = list.filter(k => k.tags.toLowerCase().includes("veg") && !k.tags.toLowerCase().includes("non"));
//     }
//     if (isNonVeg && !isVeg) {
//       list = list.filter(k => k.tags.toLowerCase().includes("non-veg") || k.tags.toLowerCase().includes("chicken"));
//     }
//     if (isTopRated) {
//       list = list.filter(k => parseFloat(k.rating) >= 4.5);
//     }

//     // 3. EXISTING SORT LOGIC (Maintained)
//     const sorted = [...list];
//     if (selectedSort === "Rating: High to Low") sorted.sort((a, b) => b.rating - a.rating);
//     if (selectedSort === "Cost: Low to High") sorted.sort((a, b) => a.price - b.price);
//     if (selectedSort === "Cost: High to Low") sorted.sort((a, b) => b.price - a.price);

//     return sorted;

//     // Ensure searchText is in the dependency array
//   }, [selectedSort, isVeg, isNonVeg, isTopRated, searchText]);

//   return (
//     <div className="homemakers-page">
//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button
//             className={`f-btn ${hasActiveFilters ? 'active-btn' : ''}`}
//             onClick={() => setShowFilters(true)}
//           >
//             <TuneIcon sx={{ fontSize: 18 }} />
//             Filters {hasActiveFilters && <span className="filter-count">!</span>}
//           </button>

//           <button className="f-btn" onClick={() => setShowSort(true)}>
//             <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
//           </button>

//           <button className="f-btn"><MyLocationIcon sx={{ fontSize: 18 }} /> Near By</button>
//         </div>
//       </div>

//       {/* SORT MODAL */}
//       {showSort && (
//         <div className="modal-overlay" onClick={() => setShowSort(false)}>
//           <div className="filter-modal-container" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Sort By</h3>
//               <IconButton onClick={() => setShowSort(false)}><CloseIcon /></IconButton>
//             </div>
//             <div className="filter-content">
//               {["Relevance", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low"].map((opt) => (
//                 <div
//                   key={opt}
//                   className={`filter-row-item ${selectedSort === opt ? "active" : ""}`}
//                   onClick={() => { setSelectedSort(opt); setShowSort(false); }}
//                 >
//                   <div className="filter-info"><span>{opt}</span></div>
//                   <div className={`radio-circle ${selectedSort === opt ? "checked" : ""}`}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* FILTER MODAL */}
//       {showFilters && (
//         <div className="modal-overlay" onClick={() => setShowFilters(false)}>
//           <div className="filter-modal-container" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Filters</h3>
//               <IconButton onClick={() => setShowFilters(false)}><CloseIcon /></IconButton>
//             </div>

//             <div className="filter-content">
//               <div className={`filter-row-item ${isVeg ? "active" : ""}`} onClick={() => setIsVeg(!isVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon veg" />
//                   <span>Pure Veg</span>
//                 </div>
//                 {isVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isNonVeg ? "active" : ""}`} onClick={() => setIsNonVeg(!isNonVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon non-veg" />
//                   <span>Non Veg</span>
//                 </div>
//                 {isNonVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isTopRated ? "active" : ""}`} onClick={() => setIsTopRated(!isTopRated)}>
//                 <div className="filter-info">
//                   <StarIcon className="icon star" />
//                   <span>Top Rated (4.5+)</span>
//                 </div>
//                 {isTopRated ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>
//             </div>

//             <div className="filter-footer">
//               <button className="clear-text-btn" onClick={() => {setIsVeg(false); setIsNonVeg(false); setIsTopRated(false);}}>Clear All</button>
//               <button className="apply-main-btn" onClick={() => setShowFilters(false)}>Apply</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* KITCHEN LIST */}
//       <div className="kitchen-list">
//         {filteredKitchens.length > 0 ? (
//           filteredKitchens.map((item) => (
//             <div key={item.id} className="kitchen-card" onClick={() => navigate(`/kitchen/${item.id}`, { state: { kitchenName: item.name } })}>
//               <div className="kitchen-image">
//                 <img src={item.image} alt={item.name} />
//               </div>
//               <div className="kitchen-content">
//                 <div className="kitchen-header">
//                   <h3>{item.name}</h3>
//                   <div className="rating">
//                     <StarIcon className="star-icon" /> {item.rating} <span>({item.reviews})</span>
//                   </div>
//                   <div className="status-label">Open Now</div>
//                 </div>
//                 <div className="kitchen-info">
//                   <p><DirectionsRunIcon /> 5 Km Away</p>
//                   <p><RestaurantMenuIcon /> {item.tags}</p>
//                   <p><AccessTimeIcon /> 9:00 AM - 10:00 PM</p>
//                   <p><LocationOnIcon /> {item.address}</p>
//                 </div>
//                 <div className="kitchen-footer">
//                   <div className="delivery-badge">20 - 30 Min Delivery</div>
//                   <div className="price-info">
//                     Starts from <strong>₹{item.price}</strong>
//                     <div className="arrow-box"><NorthEastIcon sx={{ fontSize: 16 }} /></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           /* Empty State for Search */
//           <div className="no-results-container" style={{ textAlign: 'center', padding: '40px', width: '100%' }}>
//              <h3>No kitchens found matching "{searchText}"</h3>
//              <p>Try searching for a different name or cuisine!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";

// // Icons
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NorthEastIcon from "@mui/icons-material/NorthEast";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// import { kitchenDataMap } from "../data/kitchenData";
// import "./HomeMakers.css";

// const HomeMakers = ({ searchText }) => {
//   const navigate = useNavigate();

//   // Modal States
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   // Filter Value States
//   const [selectedSort, setSelectedSort] = useState("Relevance");
//   const [isVeg, setIsVeg] = useState(false);
//   const [isNonVeg, setIsNonVeg] = useState(false);
//   const [isTopRated, setIsTopRated] = useState(false);

//   const hasActiveFilters = isVeg || isNonVeg || isTopRated;

//   // Optimized Filter & Sort logic
//   const filteredKitchens = useMemo(() => {
//     let list = Object.values(kitchenDataMap);

//     // 1. SEARCH FILTERING (Matches restaurant name or cuisines/tags)
// // 1. SAFER SEARCH FILTERING
// if (searchText && searchText.trim() !== "") {
//   const query = searchText.toLowerCase().trim();
//   list = list.filter(k => {
//     // We add ?. to prevent crashes if name or tags are missing
//     const nameMatch = k.name?.toLowerCase().includes(query);
//     const tagMatch = k.tags?.toLowerCase().includes(query);
//     return nameMatch || tagMatch;
//   });
// }

//     // 2. CATEGORY FILTERING (Veg, Non-Veg, Rating)
//     if (isVeg && !isNonVeg) {
//       list = list.filter(k =>
//         k.tags.toLowerCase().includes("veg") && !k.tags.toLowerCase().includes("non")
//       );
//     }
//     if (isNonVeg && !isVeg) {
//       list = list.filter(k =>
//         k.tags.toLowerCase().includes("non-veg") ||
//         k.tags.toLowerCase().includes("chicken") ||
//         k.tags.toLowerCase().includes("mutton")
//       );
//     }
//     if (isTopRated) {
//       list = list.filter(k => parseFloat(k.rating) >= 4.5);
//     }

//     // 3. SORTING LOGIC
//     const sorted = [...list];
//     if (selectedSort === "Rating: High to Low") {
//       sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
//     } else if (selectedSort === "Cost: Low to High") {
//       sorted.sort((a, b) => a.price - b.price);
//     } else if (selectedSort === "Cost: High to Low") {
//       sorted.sort((a, b) => b.price - a.price);
//     }

//     return sorted;
//   }, [selectedSort, isVeg, isNonVeg, isTopRated, searchText]);

//   return (
//     <div className="homemakers-page">
//       {/* Search Header Info (Optional - shows user what they searched for) */}
//       {searchText && (
//         <div className="search-result-info" style={{ padding: "10px 20px", color: "#666" }}>
//           Showing results for "<strong>{searchText}</strong>"
//         </div>
//       )}

//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button
//             className={`f-btn ${hasActiveFilters ? 'active-btn' : ''}`}
//             onClick={() => setShowFilters(true)}
//           >
//             <TuneIcon sx={{ fontSize: 18 }} />
//             Filters {hasActiveFilters && <span className="filter-count">!</span>}
//           </button>

//           <button className="f-btn" onClick={() => setShowSort(true)}>
//             <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
//           </button>

//           <button className="f-btn"><MyLocationIcon sx={{ fontSize: 18 }} /> Near By</button>
//         </div>
//       </div>

//       {/* SORT MODAL */}
//       {showSort && (
//         <div className="modal-overlay" onClick={() => setShowSort(false)}>
//           <div className="filter-modal-container" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Sort By</h3>
//               <IconButton onClick={() => setShowSort(false)}><CloseIcon /></IconButton>
//             </div>
//             <div className="filter-content">
//               {["Relevance", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low"].map((opt) => (
//                 <div
//                   key={opt}
//                   className={`filter-row-item ${selectedSort === opt ? "active" : ""}`}
//                   onClick={() => { setSelectedSort(opt); setShowSort(false); }}
//                 >
//                   <div className="filter-info"><span>{opt}</span></div>
//                   <div className={`radio-circle ${selectedSort === opt ? "checked" : ""}`}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* FILTER MODAL */}
//       {showFilters && (
//         <div className="modal-overlay" onClick={() => setShowFilters(false)}>
//           <div className="filter-modal-container" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Filters</h3>
//               <IconButton onClick={() => setShowFilters(false)}><CloseIcon /></IconButton>
//             </div>

//             <div className="filter-content">
//               <div className={`filter-row-item ${isVeg ? "active" : ""}`} onClick={() => setIsVeg(!isVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon veg" />
//                   <span>Pure Veg</span>
//                 </div>
//                 {isVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isNonVeg ? "active" : ""}`} onClick={() => setIsNonVeg(!isNonVeg)}>
//                 <div className="filter-info">
//                   <RadioButtonCheckedIcon className="icon non-veg" />
//                   <span>Non Veg</span>
//                 </div>
//                 {isNonVeg ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>

//               <div className={`filter-row-item ${isTopRated ? "active" : ""}`} onClick={() => setIsTopRated(!isTopRated)}>
//                 <div className="filter-info">
//                   <StarIcon className="icon star" />
//                   <span>Top Rated (4.5+)</span>
//                 </div>
//                 {isTopRated ? <CheckCircleIcon className="check-icon" /> : <RadioButtonUncheckedIcon className="uncheck-icon" />}
//               </div>
//             </div>

//             <div className="filter-footer">
//               <button className="clear-text-btn" onClick={() => {setIsVeg(false); setIsNonVeg(false); setIsTopRated(false);}}>Clear All</button>
//               <button className="apply-main-btn" onClick={() => setShowFilters(false)}>Apply</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* KITCHEN LIST */}
//       <div className="kitchen-list">
//         {filteredKitchens.length > 0 ? (
//           filteredKitchens.map((item) => (
//             <div key={item.id} className="kitchen-card" onClick={() => navigate(`/kitchen/${item.id}`, { state: { kitchenName: item.name } })}>
//               <div className="kitchen-image">
//                 <img src={item.image} alt={item.name} />
//               </div>
//               <div className="kitchen-content">
//                 <div className="kitchen-header">
//                   <h3>{item.name}</h3>
//                   <div className="rating">
//                     <StarIcon className="star-icon" /> {item.rating} <span>({item.reviews})</span>
//                   </div>
//                   <div className="status-label">Open Now</div>
//                 </div>
//                 <div className="kitchen-info">
//                   <p><DirectionsRunIcon /> 5 Km Away</p>
//                   <p><RestaurantMenuIcon /> {item.tags}</p>
//                   <p><AccessTimeIcon /> 9:00 AM - 10:00 PM</p>
//                   <p><LocationOnIcon /> {item.address}</p>
//                 </div>
//                 <div className="kitchen-footer">
//                   <div className="delivery-badge">20 - 30 Min Delivery</div>
//                   <div className="price-info">
//                     Starts from <strong>₹{item.price}</strong>
//                     <div className="arrow-box"><NorthEastIcon sx={{ fontSize: 16 }} /></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="no-results-container" style={{ textAlign: 'center', padding: '60px', width: '100%' }}>
//              <img src="/no-results-icon.png" alt="No Results" style={{ width: '100px', opacity: 0.5 }} />
//              <h3 style={{ marginTop: '20px', color: '#333' }}>No kitchens found matching "{searchText}"</h3>
//              <p style={{ color: '#888' }}>Try searching for a different name, cuisine, or clearing your filters.</p>
//              <button
//                 onClick={() => window.location.reload()}
//                 style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '20px', border: '1px solid #90242c', color: '#90242c', background: 'transparent', cursor: 'pointer' }}
//               >
//                 Clear Search
//               </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;

// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";

// // Icons
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import NorthEastIcon from "@mui/icons-material/NorthEast";
// import TuneIcon from "@mui/icons-material/Tune";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

// import { kitchenDataMap } from "../data/kitchenData";
// import "./HomeMakers.css";

// const HomeMakers = ({ searchText }) => {
//   const navigate = useNavigate();

//   // Modal States
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   // Filter Value States
//   const [selectedSort, setSelectedSort] = useState("Relevance");
//   const [isVeg, setIsVeg] = useState(false);
//   const [isNonVeg, setIsNonVeg] = useState(false);
//   const [isTopRated, setIsTopRated] = useState(false);

//   const hasActiveFilters = isVeg || isNonVeg || isTopRated;

//   const filteredKitchens = useMemo(() => {
//     let list = Object.values(kitchenDataMap);

//     // 1. SEARCH FILTERING
//     if (searchText && searchText.trim() !== "") {
//       const query = searchText.toLowerCase().trim();
//       list = list.filter((k) => {
//         const nameMatch = k.name?.toLowerCase().includes(query);
//         const tagMatch = k.tags?.toLowerCase().includes(query);
//         return nameMatch || tagMatch;
//       });

//       // SMART SORT: Prioritize name matches so "Vindhu" stays at top when searching "Vindhu"
//       list.sort((a, b) => {
//         const aNameMatch = a.name?.toLowerCase().includes(query) ? 1 : 0;
//         const bNameMatch = b.name?.toLowerCase().includes(query) ? 1 : 0;
//         return bNameMatch - aNameMatch;
//       });
//     }

//     // 2. CATEGORY FILTERING (Handles both single strings and arrays)
//     if (isVeg) {
//       list = list.filter((k) =>
//         Array.isArray(k.type) ? k.type.includes("veg") : k.type === "veg",
//       );
//     }

//     if (isNonVeg) {
//       list = list.filter((k) =>
//         Array.isArray(k.type)
//           ? k.type.includes("non-veg")
//           : k.type === "non-veg",
//       );
//     }

//     if (isTopRated) {
//       list = list.filter((k) => parseFloat(k.rating) >= 4.5);
//     }

//     // 3. SORTING MODAL LOGIC (Relevance, Price, etc.)
//     const finalResult = [...list];
//     if (selectedSort === "Rating: High to Low") {
//       finalResult.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
//     } else if (selectedSort === "Cost: Low to High") {
//       finalResult.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     } else if (selectedSort === "Cost: High to Low") {
//       finalResult.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//     } else if (!searchText) {
//       // Default order when not searching
//       finalResult.sort((a, b) => a.id - b.id);
//     }

//     return finalResult;
//   }, [selectedSort, isVeg, isNonVeg, isTopRated, searchText]);

//   return (
//     <div className="homemakers-page">
//       {/* Search Header Info (Optional - shows user what they searched for) */}
//       {searchText && (
//         <div
//           className="search-result-info"
//           style={{ padding: "10px 20px", color: "#666" }}
//         >
//           Showing results for "<strong>{searchText}</strong>"
//         </div>
//       )}

//       <div className="filter-row">
//         <h2 className="section-title">OUR TOP PICK UP'S</h2>
//         <div className="action-buttons">
//           <button
//             className={`f-btn ${hasActiveFilters ? "active-btn" : ""}`}
//             onClick={() => setShowFilters(true)}
//           >
//             <TuneIcon sx={{ fontSize: 18 }} />
//             Filters{" "}
//             {hasActiveFilters && <span className="filter-count">!</span>}
//           </button>

//           <button className="f-btn" onClick={() => setShowSort(true)}>
//             <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
//           </button>

//           <button className="f-btn">
//             <MyLocationIcon sx={{ fontSize: 18 }} /> Near By
//           </button>
//         </div>
//       </div>

//       {/* SORT MODAL */}
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

//       {/* FILTER MODAL */}
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

//       {/* KITCHEN LIST */}
//       <div className="kitchen-list">
//         {filteredKitchens.length > 0 ? (
//           filteredKitchens.map((item) => (
//             <div
//               key={item.id}
//               className="kitchen-card"
//               onClick={() =>
//                 navigate(`/kitchen/${item.id}`, {
//                   state: { kitchenName: item.name },
//                 })
//               }
//             >
//               <div className="kitchen-image">
//                 <img src={item.image} alt={item.name} />
//               </div>
//               <div className="kitchen-content">
//                 <div className="kitchen-header">
//                   <h3>{item.name}</h3>
//                   <div className="rating">
//                     <StarIcon className="star-icon" /> {item.rating}{" "}
//                     <span>({item.reviews})</span>
//                   </div>
//                   <div className="status-label">Open Now</div>
//                 </div>
//                 <div className="kitchen-info">
//                   <p>
//                     <DirectionsRunIcon /> 5 Km Away
//                   </p>
//                   <p>
//                     <RestaurantMenuIcon /> {item.tags}
//                   </p>
//                   <p>
//                     <AccessTimeIcon /> 9:00 AM - 10:00 PM
//                   </p>
//                   <p>
//                     <LocationOnIcon /> {item.address}
//                   </p>
//                 </div>
//                 <div className="kitchen-footer">
//                   <div className="delivery-badge">20 - 30 Min Delivery</div>
//                   <div className="price-info">
//                     Starts from <strong>₹{item.price}</strong>
//                     <div className="arrow-box">
//                       <NorthEastIcon sx={{ fontSize: 16 }} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div
//             className="no-results-container"
//             style={{ textAlign: "center", padding: "60px", width: "100%" }}
//           >
//             <img
//               src="/no-results-icon.png"
//               alt="No Results"
//               style={{ width: "100px", opacity: 0.5 }}
//             />
//             <h3 style={{ marginTop: "20px", color: "#333" }}>
//               No kitchens found matching "{searchText}"
//             </h3>
//             <p style={{ color: "#888" }}>
//               Try searching for a different name, cuisine, or clearing your
//               filters.
//             </p>
//             <button
//               onClick={() => window.location.reload()}
//               style={{
//                 marginTop: "20px",
//                 padding: "10px 20px",
//                 borderRadius: "20px",
//                 border: "1px solid #90242c",
//                 color: "#90242c",
//                 background: "transparent",
//                 cursor: "pointer",
//               }}
//             >
//               Clear Search
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeMakers;














import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

// Icons
import StarIcon from "@mui/icons-material/Star";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TuneIcon from "@mui/icons-material/Tune";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import { kitchenDataMap } from "../data/kitchenData";
import "./HomeMakers.css";

const HomeMakers = ({ searchText }) => {
  const navigate = useNavigate();

  // Modal States
  const [showSort, setShowSort] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter Value States
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [isTopRated, setIsTopRated] = useState(false);

  const hasActiveFilters = isVeg || isNonVeg || isTopRated;

const filteredKitchens = useMemo(() => {
  let list = Object.values(kitchenDataMap);

  // 1. SEARCH FILTERING
  if (searchText && searchText.trim() !== "") {
    const query = searchText.toLowerCase().trim();
    list = list.filter(k => 
      k.name?.toLowerCase().includes(query) || 
      k.tags?.toLowerCase().includes(query)
    );
  }

  // 2. CATEGORY FILTERING (OR logic: show if it matches ANY selected filter)
  if (isVeg || isNonVeg) {
    list = list.filter(k => {
      const kitchenTypes = Array.isArray(k.type) ? k.type : [k.type];
      const matchesVeg = isVeg && kitchenTypes.includes("veg");
      const matchesNonVeg = isNonVeg && kitchenTypes.includes("non-veg");
      
      return matchesVeg || matchesNonVeg; // Show if it matches either
    });
  }

  if (isTopRated) {
    list = list.filter(k => parseFloat(k.rating) >= 4.5);
  }

  // 3. SORTING LOGIC
  const sortedList = [...list]; // Clone the list to avoid mutating state
  
  if (selectedSort === "Cost: Low to High") {
    sortedList.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "Cost: High to Low") {
    sortedList.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "Rating: High to Low") {
    sortedList.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  } else {
    // Relevance / Default: Keep by ID or Name match
    if (searchText) {
      const query = searchText.toLowerCase();
      sortedList.sort((a, b) => {
        const aMatch = a.name.toLowerCase().includes(query) ? 1 : 0;
        const bMatch = b.name.toLowerCase().includes(query) ? 1 : 0;
        return bMatch - aMatch;
      });
    }
  }

  return sortedList;
}, [selectedSort, isVeg, isNonVeg, isTopRated, searchText]);

  return (
    <div className="homemakers-page">
      {/* Search Header Info (Optional - shows user what they searched for) */}
      {searchText && (
        <div
          className="search-result-info"
          style={{ padding: "10px 20px", color: "#666" }}
        >
          Showing results for "<strong>{searchText}</strong>"
        </div>
      )}

      <div className="filter-row">
        <h2 className="section-title">OUR TOP PICK UP'S</h2>
        <div className="action-buttons">
          <button
            className={`f-btn ${hasActiveFilters ? "active-btn" : ""}`}
            onClick={() => setShowFilters(true)}
          >
            <TuneIcon sx={{ fontSize: 18 }} />
            Filters{" "}
            {hasActiveFilters && <span className="filter-count">!</span>}
          </button>

          <button className="f-btn" onClick={() => setShowSort(true)}>
            <SwapVertIcon sx={{ fontSize: 18 }} /> Sort By
          </button>

          <button className="f-btn">
            <MyLocationIcon sx={{ fontSize: 18 }} /> Near By
          </button>
        </div>
      </div>

      {/* SORT MODAL */}
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

      {/* FILTER MODAL */}
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

      {/* KITCHEN LIST */}
      <div className="kitchen-list">
        {filteredKitchens.length > 0 ? (
          filteredKitchens.map((item) => (
            <div
              key={item.id}
              className="kitchen-card"
              onClick={() =>
                navigate(`/kitchen/${item.id}`, {
                  state: { kitchenName: item.name },
                })
              }
            >
              <div className="kitchen-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="kitchen-content">
                <div className="kitchen-header">
                  <h3>{item.name}</h3>
                  <div className="rating">
                    <StarIcon className="star-icon" /> {item.rating}{" "}
                    <span>({item.reviews})</span>
                  </div>
                  <div className="status-label">Open Now</div>
                </div>
                <div className="kitchen-info">
                  <p>
                    <DirectionsRunIcon /> 5 Km Away
                  </p>
                  <p>
                    <RestaurantMenuIcon /> {item.tags}
                  </p>
                  <p>
                    <AccessTimeIcon /> 9:00 AM - 10:00 PM
                  </p>
                  <p>
                    <LocationOnIcon /> {item.address}
                  </p>
                </div>
                <div className="kitchen-footer">
                  <div className="delivery-badge">20 - 30 Min Delivery</div>
                  <div className="price-info">
                    Starts from <strong>₹{item.price}</strong>
                    <div className="arrow-box">
                      <NorthEastIcon sx={{ fontSize: 16 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="no-results-container"
            style={{ textAlign: "center", padding: "60px", width: "100%" }}
          >
            <img
              src="/no-results-icon.png"
              alt="No Results"
              style={{ width: "100px", opacity: 0.5 }}
            />
            <h3 style={{ marginTop: "20px", color: "#333" }}>
              No kitchens found matching "{searchText}"
            </h3>
            <p style={{ color: "#888" }}>
              Try searching for a different name, cuisine, or clearing your
              filters.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                borderRadius: "20px",
                border: "1px solid #90242c",
                color: "#90242c",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeMakers;
