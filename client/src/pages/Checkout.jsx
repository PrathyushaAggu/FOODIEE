// import React, { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import "./Checkout.css";

// const Checkout = () => {
//   // --- STATES ---
//   const [qty, setQty] = useState(1);
//   const [selectedAddress, setSelectedAddress] = useState("home");
//   const [paymentMethod, setPaymentMethod] = useState("upi-ybl");

//   // --- CALCULATIONS ---
//   const unitPrice = 250;
//   const originalUnitPrice = 270;
//   const deliveryCharge = 0;
//   const couponDiscount = 30;

//   const totalPrice = originalUnitPrice * qty;
//   const offerPrice = unitPrice * qty;
//   const finalAmount = offerPrice + deliveryCharge - couponDiscount;
//   const totalSavings = totalPrice - finalAmount;

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>

//       <div className="checkout-content">
//         <h2 className="items-title">ITEMS IN CART (01)</h2>

//         <div className="checkout-layout">
//           {/* LEFT COLUMN: Address & Payment */}
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn">+ Add New Address</button>
//               </div>

//               <div
//                 className={`address-card ${selectedAddress === "home" ? "selected" : ""}`}
//                 onClick={() => setSelectedAddress("home")}
//               >
//                 <div className="radio-selection">
//                   <div
//                     className={`radio-inner ${selectedAddress === "home" ? "active" : ""}`}
//                   ></div>
//                 </div>
//                 <div className="address-details">
//                   <div className="address-name-row">
//                     <strong>To, SWAPNA</strong>
//                     <div className="address-actions">
//                       <EditIcon fontSize="small" />
//                       <DeleteIcon fontSize="small" />
//                     </div>
//                   </div>
//                   <p>
//                     Sri Supraja Hostel, Addagutta Society, Western Hills, Jal
//                     Vayu Vihar, Kukatpally, Hyderabad, Telangana 500085, India
//                   </p>
//                   <span className="instruction-text">
//                     Instructions: Don't knock the door
//                   </span>
//                 </div>
//               </div>
//             </section>

//             <section className="payment-block">
//               <h3>Payment Options</h3>
//               <div className="payment-card">
//                 {/* UPI Option */}
//                 <div
//                   className="payment-row clickable-row"
//                   onClick={() => setPaymentMethod("upi-ybl")}
//                 >
//                   <div className="payment-info">
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png"
//                       alt="UPI"
//                     />
//                     <span>XXXXXXXX@ybl</span>
//                   </div>
//                   <CheckCircleIcon
//                     className={`check-icon ${paymentMethod === "upi-ybl" ? "active" : ""}`}
//                   />
//                 </div>

//                 {paymentMethod === "upi-ybl" && (
//                   <button className="pay-now-btn">Pay via UPI</button>
//                 )}

//                 {/* GPay Option */}
//                 <div
//                   className="payment-row border-dashed clickable-row"
//                   onClick={() => setPaymentMethod("upi-abc")}
//                 >
//                   <div className="payment-info">
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg"
//                       alt="GPay"
//                     />
//                     <span>XXXXXXXX@abc</span>
//                   </div>
//                   <CheckCircleIcon
//                     className={`check-icon ${paymentMethod === "upi-abc" ? "active" : ""}`}
//                   />
//                 </div>
//               </div>

//               <h3>More Payment Options</h3>
//               <div
//                 className={`payment-card cod-card clickable-row ${paymentMethod === "cod" ? "active-cod" : ""}`}
//                 onClick={() => setPaymentMethod("cod")}
//               >
//                 <div className="payment-row">
//                   <div className="payment-info">
//                     <span className="cod-icon">📦</span>
//                     <span>Cash on Delivery</span>
//                   </div>
//                   <CheckCircleIcon
//                     className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`}
//                   />
//                 </div>
//                 {paymentMethod === "cod" && (
//                   <button className="pay-now-btn">Pay (Extra ₹10)</button>
//                 )}
//               </div>
//             </section>
//           </div>

//           {/* RIGHT COLUMN: Order Summary & Policy */}
//           <div className="right-section">
//             <div className="summary-card">
//               <div className="item-preview">
//                 <div className="item-img-container">
//                   <img
//                     src="https://media.istockphoto.com/id/1345624312/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_80P-FLSGo0n_c54-S9dvS9coE-5En2B74S7L7S0="
//                     alt="Biryani"
//                   />
//                   <div className="offer-badge">FLAT ₹20 OFF</div>
//                 </div>
//                 <div className="item-info">
//                   <div className="item-title-row">
//                     <h4>
//                       Chicken Biryani <small>(Single)</small>
//                     </h4>
//                     <DeleteIcon className="remove-item" />
//                   </div>
//                   <p className="delivery-time">⚡ 15-20 Minutes</p>
//                   <p className="order-stats">Ordered by 100 customers</p>
//                   <div className="price-control-row">
//                     <span className="current-price">
//                       ₹ {unitPrice} <del>₹ {originalUnitPrice}</del>
//                     </span>
//                     <div className="quantity-pill">
//                       <span onClick={() => setQty(Math.max(1, qty - 1))}>
//                         -
//                       </span>
//                       {qty}
//                       <span
//                         onClick={() => setQty(qty + 1)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         +
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="coupon-selector">
//                 <span>🉐 APPLY COUPON</span>
//                 <ChevronRightIcon />
//               </div>

//               <div className="billing-list">
//                 <div className="bill-line">
//                   <span>Total Price</span>
//                   <span>₹ {totalPrice}</span>
//                 </div>
//                 <div className="bill-line">
//                   <span>Offer Price</span>
//                   <span>₹ {offerPrice}</span>
//                 </div>
//                 <div className="bill-line">
//                   <span>Delivery charge | 2 Km</span>
//                   <span>₹ {deliveryCharge}</span>
//                 </div>
//                 <div className="bill-line coupon-row">
//                   <span>Coupon Applied</span>
//                   <span>- ₹ {couponDiscount}</span>
//                 </div>
//                 <div className="bill-line">
//                   <span>Discount</span>
//                   <span>₹ {totalSavings}</span>
//                 </div>
//                 <div className="bill-line amount-to-pay">
//                   <strong>AMOUNT TO PAY</strong>
//                   <div className="final-price-box">
//                     <strong>₹ {finalAmount}</strong>
//                     <del>₹ {totalPrice}</del>
//                   </div>
//                 </div>
//               </div>
//               <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//             </div>

//             <div className="policy-note-box">
//               <p className="policy-warning">
//                 Review your order and address details to avoid cancellations
//               </p>
//               <p className="policy-detail">
//                 Note: Please ensure your address and order details are correct.
//                 This order, if cancelled, is non-refundable.
//               </p>
//               <button className="policy-link">READ REFUND POLICY</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sticky-checkout-bar">
//         <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PAYING"}</span>
//         <span>(₹ {finalAmount})</span>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom"; // Added for real data
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import "./Checkout.css";

// const Checkout = () => {
//   const location = useLocation();

//   // 1. GET DATA FROM NAVIGATION STATE
//   // If no data exists (e.g., manual refresh), we use default values
//   const { cart, suggestedItems } = location.state || { cart: {}, suggestedItems: [] };

//   // Filter items that actually have a quantity > 0
//   const addedItems = suggestedItems.filter(item => cart[item.id] > 0);

//   const [selectedAddress, setSelectedAddress] = useState("home");
//   const [paymentMethod, setPaymentMethod] = useState("upi-ybl");

//   // 2. DYNAMIC CALCULATIONS
//   const deliveryCharge = 0;
//   const couponDiscount = 30;

//   // Calculate based on ALL items in the cart
//   const offerPrice = addedItems.reduce((sum, item) => sum + (item.price * cart[item.id]), 0);
//   const totalPrice = addedItems.reduce((sum, item) => sum + ((item.oldPrice || item.price) * cart[item.id]), 0);

//   const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
//   const totalSavings = totalPrice - finalAmount;

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>

//       <div className="checkout-content">
//         <h2 className="items-title">ITEMS IN CART ({addedItems.length.toString().padStart(2, '0')})</h2>

//         <div className="checkout-layout">
//           {/* LEFT COLUMN: Address & Payment */}
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn">+ Add New Address</button>
//               </div>

//               <div
//                 className={`address-card ${selectedAddress === "home" ? "selected" : ""}`}
//                 onClick={() => setSelectedAddress("home")}
//               >
//                 <div className="radio-selection">
//                   <div className={`radio-inner ${selectedAddress === "home" ? "active" : ""}`}></div>
//                 </div>
//                 <div className="address-details">
//                   <div className="address-name-row">
//                     <strong>To, SWAPNA</strong>
//                     <div className="address-actions">
//                       <EditIcon fontSize="small" />
//                       <DeleteIcon fontSize="small" />
//                     </div>
//                   </div>
//                   <p>Sri Supraja Hostel, Kukatpally, Hyderabad, 500085</p>
//                   <span className="instruction-text">Instructions: Don't knock the door</span>
//                 </div>
//               </div>
//             </section>

//             <section className="payment-block">
//               <h3>Payment Options</h3>
//               <div className="payment-card">
//                 <div className="payment-row clickable-row" onClick={() => setPaymentMethod("upi-ybl")}>
//                   <div className="payment-info">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" alt="UPI" />
//                     <span>XXXXXXXX@ybl</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "upi-ybl" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "upi-ybl" && <button className="pay-now-btn">Pay via UPI</button>}
//               </div>

//               <div className={`payment-card cod-card clickable-row ${paymentMethod === "cod" ? "active-cod" : ""}`} onClick={() => setPaymentMethod("cod")}>
//                 <div className="payment-row">
//                   <div className="payment-info">
//                     <span className="cod-icon">📦</span>
//                     <span>Cash on Delivery</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "cod" && <button className="pay-now-btn">Confirm Order (Extra ₹10)</button>}
//               </div>
//             </section>
//           </div>

//           {/* RIGHT COLUMN: Order Summary */}
//           <div className="right-section">
//             <div className="summary-card">
//               {addedItems.map(item => (
//                 <div className="item-preview" key={item.id}>
//                   <div className="item-img-container">
//                     <img src={item.img} alt={item.name} />
//                     {item.discount && <div className="offer-badge">{item.discount}</div>}
//                   </div>
//                   <div className="item-info">
//                     <div className="item-title-row">
//                       <h4>{item.name}</h4>
//                       <DeleteIcon className="remove-item" />
//                     </div>
//                     <p className="delivery-time">⚡ 15-20 Minutes</p>
//                     <div className="price-control-row">
//                       <span className="current-price">₹ {item.price} <del>₹ {item.oldPrice || item.price + 20}</del></span>
//                       <div className="quantity-pill">{cart[item.id]}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="coupon-selector">
//                 <span>🉐 APPLY COUPON</span>
//                 <ChevronRightIcon />
//               </div>

//               <div className="billing-list">
//                 <div className="bill-line"><span>Total Price</span><span>₹ {totalPrice}</span></div>
//                 <div className="bill-line"><span>Offer Price</span><span>₹ {offerPrice}</span></div>
//                 <div className="bill-line coupon-row"><span>Coupon Applied</span><span>- ₹ {couponDiscount}</span></div>
//                 <div className="bill-line amount-to-pay">
//                   <strong>AMOUNT TO PAY</strong>
//                   <div className="final-price-box">
//                     <strong>₹ {finalAmount}</strong>
//                     <del>₹ {totalPrice}</del>
//                   </div>
//                 </div>
//               </div>
//               <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//             </div>

//             <div className="policy-note-box">
//               <p className="policy-warning">Review your order to avoid cancellations</p>
//               <button className="policy-link">READ REFUND POLICY</button>
//             </div>
//           </div>
//         </div> {/* End checkout-layout */}
//       </div> {/* End checkout-content - THIS WAS MISSING */}

//       <div className="sticky-checkout-bar">
//         <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PAYING"}</span>
//         <span>(₹ {finalAmount})</span>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import "./Checkout.css";

// const Checkout = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const { cart, suggestedItems } = location.state || { cart: {}, suggestedItems: [] };
//   const addedItems = suggestedItems.filter(item => cart[item.id] > 0);

//   const [selectedAddress, setSelectedAddress] = useState("home");

//   // Set default to gpay
//   const [paymentMethod, setPaymentMethod] = useState("gpay");

//   const deliveryCharge = 0;
//   const couponDiscount = 30;

//   const offerPrice = addedItems.reduce((sum, item) => sum + (item.price * cart[item.id]), 0);
//   const totalPrice = addedItems.reduce((sum, item) => sum + ((item.oldPrice || item.price) * cart[item.id]), 0);

//   const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
//   const totalSavings = totalPrice - finalAmount;

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>

//       <div className="checkout-content">
//         <h2 className="items-title">ITEMS IN CART ({addedItems.length.toString().padStart(2, '0')})</h2>

//         <div className="checkout-layout">
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn">+ Add New Address</button>
//               </div>

//               <div className={`address-card ${selectedAddress === "home" ? "selected" : ""}`} onClick={() => setSelectedAddress("home")}>
//                 <div className="radio-selection">
//                   <div className={`radio-inner ${selectedAddress === "home" ? "active" : ""}`}></div>
//                 </div>
//                 <div className="address-details">
//                   <div className="address-name-row">
//                     <strong>To, SWAPNA</strong>
//                     <div className="address-actions">
//                       <EditIcon fontSize="small" />
//                       <DeleteIcon fontSize="small" />
//                     </div>
//                   </div>
//                   <p>Sri Supraja Hostel, Kukatpally, Hyderabad, 500085</p>
//                   <span className="instruction-text">Instructions: Don't knock the door</span>
//                 </div>
//               </div>
//             </section>

//             {/* PAYMENT SECTION - UPDATED */}
//             <section className="payment-block">
//               <h3>Payment Options</h3>
//               <div className="payment-card">

//                 {/* Google Pay */}
//                 <div className="payment-row clickable-row" onClick={() => setPaymentMethod("gpay")}>
//                   <div className="payment-info">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg" alt="GPay" style={{ width: "35px" }} />
//                     <span>Google Pay</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "gpay" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "gpay" && <button className="pay-now-btn">Pay via Google Pay</button>}

//                 {/* PhonePe */}
//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("phonepe")}>
//                   <div className="payment-info">
//                     <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" style={{ width: "35px", objectFit: "contain" }} />
//                     <span>PhonePe</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "phonepe" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "phonepe" && <button className="pay-now-btn" style={{ backgroundColor: "#5f259f" }}>Pay via PhonePe</button>}

//                 {/* Other UPI */}
//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("upi-ybl")}>
//                   <div className="payment-info">
//                     <AccountBalanceWalletIcon style={{ marginRight: "10px", color: "#666" }} />
//                     <span>Other UPI ID / Netbanking</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "upi-ybl" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "upi-ybl" && <button className="pay-now-btn">Pay via UPI</button>}
//               </div>

//               <h3>More Payment Options</h3>
//               <div className={`payment-card cod-card clickable-row ${paymentMethod === "cod" ? "active-cod" : ""}`} onClick={() => setPaymentMethod("cod")}>
//                 <div className="payment-row">
//                   <div className="payment-info">
//                     <span className="cod-icon">📦</span>
//                     <span>Cash on Delivery</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "cod" && <button className="pay-now-btn">Confirm Order (Extra ₹10)</button>}
//               </div>
//             </section>
//           </div>

//           <div className="right-section">
//             <div className="summary-card">
//               {addedItems.map(item => (
//                 <div className="item-preview" key={item.id}>
//                   <div className="item-img-container">
//                     <img src={item.img} alt={item.name} />
//                     {item.discount && <div className="offer-badge">{item.discount}</div>}
//                   </div>
//                   <div className="item-info">
//                     <div className="item-title-row">
//                       <h4>{item.name}</h4>
//                       <DeleteIcon className="remove-item" />
//                     </div>
//                     <p className="delivery-time">⚡ 15-20 Minutes</p>
//                     <div className="price-control-row">
//                       <span className="current-price">₹ {item.price} <del>₹ {item.oldPrice || item.price + 20}</del></span>
//                       <div className="quantity-pill">{cart[item.id]}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="coupon-selector">
//                 <span>🉐 APPLY COUPON</span>
//                 <ChevronRightIcon />
//               </div>

//               <div className="billing-list">
//                 <div className="bill-line"><span>Total Price</span><span>₹ {totalPrice}</span></div>
//                 <div className="bill-line"><span>Offer Price</span><span>₹ {offerPrice}</span></div>
//                 <div className="bill-line coupon-row"><span>Coupon Applied</span><span>- ₹ {couponDiscount}</span></div>
//                 <div className="bill-line amount-to-pay">
//                   <strong>AMOUNT TO PAY</strong>
//                   <div className="final-price-box">
//                     <strong>₹ {finalAmount}</strong>
//                     <del>₹ {totalPrice}</del>
//                   </div>
//                 </div>
//               </div>
//               <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//             </div>

//             <div className="policy-note-box">
//               <p className="policy-warning">Review your order to avoid cancellations</p>
//               <button className="policy-link">READ REFUND POLICY</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sticky-checkout-bar">
//         <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PROCEED TO PAY"}</span>
//         <span>(₹ {finalAmount})</span>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import "./Checkout.css";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // 1. Get data from state. Default distance to 4km (Free) if not provided.
//   const { cart, suggestedItems, distance = 4 } = location.state || { cart: {}, suggestedItems: [] };

//   // 2. Filter items that actually have a quantity in cart
//   const addedItems = suggestedItems.filter(item => cart[item.id] > 0);

//   const [selectedAddress, setSelectedAddress] = useState("home");
//   const [paymentMethod, setPaymentMethod] = useState("gpay");

//   // 3. LOGIC: Delivery Charge based on distance
//   const deliveryCharge = distance <= 5 ? 0 : 20;
//   const couponDiscount = 30;

//   // 4. CALCULATIONS (Using Number() to prevent math bugs)
//   // offerPrice = what the user pays for the food
//   const offerPrice = addedItems.reduce((sum, item) => {
//     return sum + (Number(item.price) * cart[item.id]);
//   }, 0);

//   // totalPrice = original value (M.R.P) for savings display
//   const totalPrice = addedItems.reduce((sum, item) => {
//     const originalPrice = item.oldPrice || (Number(item.price) + 20);
//     return sum + (Number(originalPrice) * cart[item.id]);
//   }, 0);

//   // Final amount math
//   const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
//   const totalSavings = (totalPrice + deliveryCharge) - finalAmount;

//   // Safety check: if cart is empty, go back
//   if (addedItems.length === 0) {
//     return (
//       <div className="checkout-page" style={{ textAlign: "center", padding: "50px" }}>
//         <h2>Your cart is empty</h2>
//         <button onClick={() => navigate(-1)} className="pay-now-btn">Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>

//       <div className="checkout-content">
//         <h2 className="items-title">ITEMS IN CART ({addedItems.length.toString().padStart(2, '0')})</h2>

//         <div className="checkout-layout">
//           {/* LEFT SECTION: ADDRESS & PAYMENT */}
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn">+ Add New Address</button>
//               </div>

//               <div className={`address-card ${selectedAddress === "home" ? "selected" : ""}`} onClick={() => setSelectedAddress("home")}>
//                 <div className="radio-selection">
//                   <div className={`radio-inner ${selectedAddress === "home" ? "active" : ""}`}></div>
//                 </div>
//                 <div className="address-details">
//                   <div className="address-name-row">
//                     <strong>To, SWAPNA</strong>
//                     <div className="address-actions">
//                       <EditIcon fontSize="small" />
//                       <DeleteIcon fontSize="small" />
//                     </div>
//                   </div>
//                   <p>Sri Supraja Hostel, Kukatpally, Hyderabad, 500085</p>
//                   <span className="instruction-text">Instructions: Don't knock the door</span>
//                 </div>
//               </div>
//             </section>

//             <section className="payment-block">
//               <h3>Payment Options</h3>
//               <div className="payment-card">
//                 {/* GPay */}
//                 <div className="payment-row clickable-row" onClick={() => setPaymentMethod("gpay")}>
//                   <div className="payment-info">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg" alt="GPay" style={{ width: "35px" }} />
//                     <span>Google Pay</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "gpay" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "gpay" && <button className="pay-now-btn">Pay via Google Pay</button>}

//                 {/* PhonePe */}
//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("phonepe")}>
//                   <div className="payment-info">
//                     <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" style={{ width: "35px", objectFit: "contain" }} />
//                     <span>PhonePe</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "phonepe" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "phonepe" && <button className="pay-now-btn" style={{ backgroundColor: "#5f259f" }}>Pay via PhonePe</button>}

//                 {/* Other UPI */}
//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("upi")}>
//                   <div className="payment-info">
//                     <AccountBalanceWalletIcon style={{ marginRight: "10px", color: "#666" }} />
//                     <span>Other UPI ID / Netbanking</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "upi" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "upi" && <button className="pay-now-btn">Pay via UPI</button>}
//               </div>

//               <h3>More Payment Options</h3>
//               <div className={`payment-card cod-card clickable-row ${paymentMethod === "cod" ? "active-cod" : ""}`} onClick={() => setPaymentMethod("cod")}>
//                 <div className="payment-row">
//                   <div className="payment-info">
//                     <span className="cod-icon">📦</span>
//                     <span>Cash on Delivery</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "cod" && <button className="pay-now-btn">Confirm Order (Extra ₹10 Fee)</button>}
//               </div>
//             </section>
//           </div>

//           {/* RIGHT SECTION: SUMMARY */}
//           <div className="right-section">
//             <div className="summary-card">
//               {addedItems.map(item => (
//                 <div className="item-preview" key={item.id}>
//                   <div className="item-img-container">
//                     <img src={item.img} alt={item.name} />
//                     {item.discount && <div className="offer-badge">{item.discount}</div>}
//                   </div>
//                   <div className="item-info">
//                     <div className="item-title-row">
//                       <h4>{item.name}</h4>
//                       <DeleteIcon className="remove-item" />
//                     </div>
//                     <p className="delivery-time">⚡ 15-20 Minutes</p>
//                     <div className="price-control-row">
//                       <span className="current-price">₹ {item.price} <del>₹ {item.oldPrice || Number(item.price) + 20}</del></span>
//                       <div className="quantity-pill">Qty: {cart[item.id]}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="coupon-selector">
//                 <span>🉐 APPLY COUPON</span>
//                 <ChevronRightIcon />
//               </div>

//               <div className="billing-list">
//                 <div className="bill-line">
//                     <span>Item Total</span>
//                     <span>₹ {offerPrice}</span>
//                 </div>
//                 <div className="bill-line">
//                     <span>Delivery Fee ({distance} km)</span>
//                     <span style={{ color: deliveryCharge === 0 ? "#2e7d32" : "#1a1a1a" }}>
//                         {deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}
//                     </span>
//                 </div>
//                 <div className="bill-line coupon-row">
//                     <span>Coupon Applied</span>
//                     <span>- ₹ {couponDiscount}</span>
//                 </div>
//                 <div className="bill-line amount-to-pay">
//                   <strong>AMOUNT TO PAY</strong>
//                   <div className="final-price-box">
//                     <strong>₹ {finalAmount}</strong>
//                     <del>₹ {totalPrice + deliveryCharge}</del>
//                   </div>
//                 </div>
//               </div>
//               <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//             </div>

//             <div className="policy-note-box">
//               <p className="policy-warning">Review your order to avoid cancellations</p>
//               <button className="policy-link">READ REFUND POLICY</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sticky-checkout-bar">
//         <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PROCEED TO PAY"}</span>
//         <span>(₹ {finalAmount})</span>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import "./Checkout.css";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // 1. Initialize State from location (Initial data)
//   const initialState = location.state || { cart: {}, suggestedItems: [] };

//   // Create local state so the UI can re-render when an item is deleted
//   const [currentCart, setCurrentCart] = useState(initialState.cart);
//   const [distance] = useState(initialState.distance || 4);
//   const [paymentMethod, setPaymentMethod] = useState("gpay");
//   const [selectedAddress, setSelectedAddress] = useState("home");

//   // 2. Filter items that have quantity > 0 in the LOCAL state
//   const addedItems = initialState.suggestedItems.filter(item => currentCart[item.id] > 0);

//   // 3. DELETE LOGIC: Removes item and updates the UI totals
//   const handleRemoveItem = (itemId) => {
//     // Optional: Add your Node.js fetch call here for backend deletion
//     const updatedCart = { ...currentCart };
//     updatedCart[itemId] = 0; // Set quantity to 0 to remove it from the list
//     setCurrentCart(updatedCart);
//   };

//   // 4. CALCULATIONS (Derived from local state 'currentCart')
//   const deliveryCharge = distance <= 5 ? 0 : 20;
//   const couponDiscount = addedItems.length > 0 ? 30 : 0;

//   const offerPrice = addedItems.reduce((sum, item) => {
//     return sum + (Number(item.price) * currentCart[item.id]);
//   }, 0);

//   const totalPrice = addedItems.reduce((sum, item) => {
//     const originalPrice = item.oldPrice || (Number(item.price) + 20);
//     return sum + (Number(originalPrice) * currentCart[item.id]);
//   }, 0);

//   const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
//   const totalSavings = (totalPrice + deliveryCharge) - finalAmount;

//   // Safety check: if cart is empty, show empty state
//   if (addedItems.length === 0) {
//     return (
//       <div className="checkout-page" style={{ textAlign: "center", padding: "100px 20px" }}>
//         <h2 style={{ color: "#5c1919" }}>Your cart is empty</h2>
//         <p>Add some delicious meals to proceed!</p>
//         <button onClick={() => navigate(-1)} className="pay-now-btn" style={{ width: "200px", marginTop: "20px" }}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>

//       <div className="checkout-content">
//         <h2 className="items-title">ITEMS IN CART ({addedItems.length.toString().padStart(2, '0')})</h2>

//         <div className="checkout-layout">
//           {/* LEFT SECTION: ADDRESS & PAYMENT */}
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn">+ Add New Address</button>
//               </div>

//               <div className={`address-card ${selectedAddress === "home" ? "selected" : ""}`} onClick={() => setSelectedAddress("home")}>
//                 <div className="radio-selection">
//                   <div className={`radio-inner ${selectedAddress === "home" ? "active" : ""}`}></div>
//                 </div>
//                 <div className="address-details">
//                   <div className="address-name-row">
//                     <strong>To, SWAPNA</strong>
//                     <div className="address-actions">
//                       <EditIcon fontSize="small" />
//                       <DeleteIcon fontSize="small" />
//                     </div>
//                   </div>
//                   <p>Sri Supraja Hostel, Kukatpally, Hyderabad, 500085</p>
//                   <span className="instruction-text">Instructions: Don't knock the door</span>
//                 </div>
//               </div>
//             </section>

//             <section className="payment-block">
//               <h3>Payment Options</h3>
//               <div className="payment-card">
//                 <div className="payment-row clickable-row" onClick={() => setPaymentMethod("gpay")}>
//                   <div className="payment-info">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg" alt="GPay" style={{ width: "35px" }} />
//                     <span>Google Pay</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "gpay" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "gpay" && <button className="pay-now-btn">Pay via Google Pay</button>}

//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("phonepe")}>
//                   <div className="payment-info">
//                     <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" style={{ width: "35px", objectFit: "contain" }} />
//                     <span>PhonePe</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "phonepe" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "phonepe" && <button className="pay-now-btn" style={{ backgroundColor: "#5f259f" }}>Pay via PhonePe</button>}

//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("upi")}>
//                   <div className="payment-info">
//                     <AccountBalanceWalletIcon style={{ marginRight: "10px", color: "#666" }} />
//                     <span>Other UPI ID / Netbanking</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "upi" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "upi" && <button className="pay-now-btn">Pay via UPI</button>}
//               </div>

//               <h3>More Payment Options</h3>
//               <div className={`payment-card cod-card clickable-row ${paymentMethod === "cod" ? "active-cod" : ""}`} onClick={() => setPaymentMethod("cod")}>
//                 <div className="payment-row">
//                   <div className="payment-info">
//                     <span className="cod-icon">📦</span>
//                     <span>Cash on Delivery</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "cod" && <button className="pay-now-btn">Confirm Order (Extra ₹10 Fee)</button>}
//               </div>
//             </section>
//           </div>

//           {/* RIGHT SECTION: SUMMARY */}
//           <div className="right-section">
//             <div className="summary-card">
//               {addedItems.map(item => (
//                 <div className="item-preview" key={item.id}>
//                   <div className="item-img-container">
//                     <img src={item.img} alt={item.name} />
//                     {item.discount && <div className="offer-badge">{item.discount}</div>}
//                   </div>
//                   <div className="item-info">
//                     <div className="item-title-row">
//                       <h4>{item.name}</h4>
//                       {/* ATTACHED DELETE HANDLER HERE */}
//                       <DeleteIcon
//                         className="remove-item"
//                         onClick={() => handleRemoveItem(item.id)}
//                         style={{ cursor: "pointer", color: "#5c1919" }}
//                       />
//                     </div>
//                     <p className="delivery-time">⚡ 15-20 Minutes</p>
//                     <div className="price-control-row">
//                       <span className="current-price">₹ {item.price} <del>₹ {item.oldPrice || Number(item.price) + 20}</del></span>
//                       <div className="quantity-pill">Qty: {currentCart[item.id]}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <div className="coupon-selector">
//                 <span>🉐 APPLY COUPON</span>
//                 <ChevronRightIcon />
//               </div>

//               <div className="billing-list">
//                 <div className="bill-line">
//                     <span>Item Total</span>
//                     <span>₹ {offerPrice}</span>
//                 </div>
//                 <div className="bill-line">
//                     <span>Delivery Fee ({distance} km)</span>
//                     <span style={{ color: deliveryCharge === 0 ? "#2e7d32" : "#1a1a1a" }}>
//                         {deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}
//                     </span>
//                 </div>
//                 <div className="bill-line coupon-row">
//                     <span>Coupon Applied</span>
//                     <span>- ₹ {couponDiscount}</span>
//                 </div>
//                 <div className="bill-line amount-to-pay">
//                   <strong>AMOUNT TO PAY</strong>
//                   <div className="final-price-box">
//                     <strong>₹ {finalAmount}</strong>
//                     <del>₹ {totalPrice + deliveryCharge}</del>
//                   </div>
//                 </div>
//               </div>
//               <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//             </div>

//             <div className="policy-note-box">
//               <p className="policy-warning">Review your order to avoid cancellations</p>
//               <button className="policy-link">READ REFUND POLICY</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sticky-checkout-bar">
//         <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PROCEED TO PAY"}</span>
//         <span>(₹ {finalAmount})</span>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import "./Checkout.css";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // 1. Initialize State from location (Initial data)
//   const initialState = location.state || { cart: {}, suggestedItems: [] };

//   // Create local state so the UI can re-render when an item is deleted
//   const [currentCart, setCurrentCart] = useState(initialState.cart);
//   const [distance] = useState(initialState.distance || 4);
//   const [paymentMethod, setPaymentMethod] = useState("gpay");
//   const [selectedAddress, setSelectedAddress] = useState("home");

//   // 2. Filter items that have quantity > 0 in the LOCAL state
//   const addedItems = initialState.suggestedItems.filter(item => currentCart[item.id] > 0);

//   // 3. DELETE LOGIC: Removes item and updates the UI totals
//   const handleRemoveItem = (itemId) => {
//     // Optional: Add your Node.js fetch call here for backend deletion
//     const updatedCart = { ...currentCart };
//     updatedCart[itemId] = 0; // Set quantity to 0 to remove it from the list
//     setCurrentCart(updatedCart);
//   };

//   // 4. CALCULATIONS (Derived from local state 'currentCart')
//   const deliveryCharge = distance <= 5 ? 0 : 20;
//   const couponDiscount = addedItems.length > 0 ? 30 : 0;

//   const offerPrice = addedItems.reduce((sum, item) => {
//     return sum + (Number(item.price) * currentCart[item.id]);
//   }, 0);

//   const totalPrice = addedItems.reduce((sum, item) => {
//     const originalPrice = item.oldPrice || (Number(item.price) + 20);
//     return sum + (Number(originalPrice) * currentCart[item.id]);
//   }, 0);

// // Add these to your other states
// const [addresses, setAddresses] = useState([
//   { id: 'home', name: 'SWAPNA', text: 'Sri Supraja Hostel, Kukatpally, Hyderabad, 500085', instructions: "Don't knock the door" }
// ]);
// const [isModalOpen, setIsModalOpen] = useState(false);
// const [editingAddress, setEditingAddress] = useState(null);
// const [formData, setFormData] = useState({ name: '', text: '', instructions: '' });

// // Open modal for New Address
// const handleAddNew = () => {
//   setEditingAddress(null);
//   setFormData({ name: '', text: '', instructions: '' });
//   setIsModalOpen(true);
// };

// // Open modal for Editing
// const handleEdit = (addr) => {
//   setEditingAddress(addr.id);
//   setFormData({ name: addr.name, text: addr.text, instructions: addr.instructions });
//   setIsModalOpen(true);
// };

// // Save Logic (Backend connection point)
// const handleSaveAddress = () => {
//   if (editingAddress) {
//     setAddresses(addresses.map(a => a.id === editingAddress ? { ...a, ...formData } : a));
//   } else {
//     setAddresses([...addresses, { ...formData, id: Date.now().toString() }]);
//   }
//   setIsModalOpen(false);
// };

//   const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
//   const totalSavings = (totalPrice + deliveryCharge) - finalAmount;

//   // Safety check: if cart is empty, show empty state
//   if (addedItems.length === 0) {
//     return (
//       <div className="checkout-page" style={{ textAlign: "center", padding: "100px 20px" }}>
//         <h2 style={{ color: "#5c1919" }}>Your cart is empty</h2>
//         <p>Add some delicious meals to proceed!</p>
//         <button onClick={() => navigate(-1)} className="pay-now-btn" style={{ width: "200px", marginTop: "20px" }}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>

//       <div className="checkout-content">
//         <h2 className="items-title">ITEMS IN CART ({addedItems.length.toString().padStart(2, '0')})</h2>

//         <div className="checkout-layout">
//           {/* LEFT SECTION: ADDRESS & PAYMENT */}
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn">+ Add New Address</button>
//               </div>

//               <div className={`address-card ${selectedAddress === "home" ? "selected" : ""}`} onClick={() => setSelectedAddress("home")}>
//                 <div className="radio-selection">
//                   <div className={`radio-inner ${selectedAddress === "home" ? "active" : ""}`}></div>
//                 </div>
//                 <div className="address-details">
//                   <div className="address-name-row">
//                     <strong>To, SWAPNA</strong>
//                     <div className="address-actions">
//                       <EditIcon fontSize="small" />
//                       <DeleteIcon fontSize="small" />
//                     </div>
//                   </div>
//                   <p>Sri Supraja Hostel, Kukatpally, Hyderabad, 500085</p>
//                   <span className="instruction-text">Instructions: Don't knock the door</span>
//                 </div>
//               </div>
//             </section>

// <section className="payment-block">
//   <h3>Payment Options</h3>
//   <div className="payment-card">
//     <div className="payment-row clickable-row" onClick={() => setPaymentMethod("gpay")}>
//       <div className="payment-info">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg" alt="GPay" style={{ width: "35px" }} />
//         <span>Google Pay</span>
//       </div>
//       <CheckCircleIcon className={`check-icon ${paymentMethod === "gpay" ? "active" : ""}`} />
//     </div>
//     {paymentMethod === "gpay" && <button className="pay-now-btn">Pay via Google Pay</button>}

//     <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("phonepe")}>
//       <div className="payment-info">
//         <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" style={{ width: "35px", objectFit: "contain" }} />
//         <span>PhonePe</span>
//       </div>
//       <CheckCircleIcon className={`check-icon ${paymentMethod === "phonepe" ? "active" : ""}`} />
//     </div>
//     {paymentMethod === "phonepe" && <button className="pay-now-btn" style={{ backgroundColor: "#5f259f" }}>Pay via PhonePe</button>}

//     <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("upi")}>
//       <div className="payment-info">
//         <AccountBalanceWalletIcon style={{ marginRight: "10px", color: "#666" }} />
//         <span>Other UPI ID / Netbanking</span>
//       </div>
//       <CheckCircleIcon className={`check-icon ${paymentMethod === "upi" ? "active" : ""}`} />
//     </div>
//     {paymentMethod === "upi" && <button className="pay-now-btn">Pay via UPI</button>}
//   </div>

//   <h3>More Payment Options</h3>
//   <div className={`payment-card cod-card clickable-row ${paymentMethod === "cod" ? "active-cod" : ""}`} onClick={() => setPaymentMethod("cod")}>
//     <div className="payment-row">
//       <div className="payment-info">
//         <span className="cod-icon">📦</span>
//         <span>Cash on Delivery</span>
//       </div>
//       <CheckCircleIcon className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`} />
//     </div>
//     {paymentMethod === "cod" && <button className="pay-now-btn">Confirm Order (Extra ₹10 Fee)</button>}
//   </div>
// </section>
//           </div>

//           {/* RIGHT SECTION: SUMMARY */}
//           <div className="right-section">
//             <div className="summary-card">
//               {addedItems.map(item => (
//                 <div className="item-preview" key={item.id}>
//                   <div className="item-img-container">
//                     <img src={item.img} alt={item.name} />
//                     {item.discount && <div className="offer-badge">{item.discount}</div>}
//                   </div>
//                   <div className="item-info">
//                     <div className="item-title-row">
//                       <h4>{item.name}</h4>
//                       {/* ATTACHED DELETE HANDLER HERE */}
//                       <DeleteIcon
//                         className="remove-item"
//                         onClick={() => handleRemoveItem(item.id)}
//                         style={{ cursor: "pointer", color: "#5c1919" }}
//                       />
//                     </div>
//                     <p className="delivery-time">⚡ 15-20 Minutes</p>
//                     <div className="price-control-row">
//                       <span className="current-price">₹ {item.price} <del>₹ {item.oldPrice || Number(item.price) + 20}</del></span>
//                       <div className="quantity-pill">Qty: {currentCart[item.id]}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//         <div className="coupon-selector">
//           <span>🉐 APPLY COUPON</span>
//           <ChevronRightIcon />
//         </div>

//         <div className="billing-list">
//           <div className="bill-line">
//               <span>Item Total</span>
//               <span>₹ {offerPrice}</span>
//           </div>
//           <div className="bill-line">
//               <span>Delivery Fee ({distance} km)</span>
//               <span style={{ color: deliveryCharge === 0 ? "#2e7d32" : "#1a1a1a" }}>
//                   {deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}
//               </span>
//           </div>
//           <div className="bill-line coupon-row">
//               <span>Coupon Applied</span>
//               <span>- ₹ {couponDiscount}</span>
//           </div>
//           <div className="bill-line amount-to-pay">
//             <strong>AMOUNT TO PAY</strong>
//             <div className="final-price-box">
//               <strong>₹ {finalAmount}</strong>
//               <del>₹ {totalPrice + deliveryCharge}</del>
//             </div>
//           </div>
//         </div>
//         <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//       </div>

//       <div className="policy-note-box">
//         <p className="policy-warning">Review your order to avoid cancellations</p>
//         <button className="policy-link">READ REFUND POLICY</button>
//       </div>
//     </div>
//   </div>
// </div>

//   <div className="sticky-checkout-bar">
//     <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PROCEED TO PAY"}</span>
//     <span>(₹ {finalAmount})</span>
//   </div>
// </div>
//   );
// };

// export default Checkout;











// import HomeIcon from "@mui/icons-material/Home";
// import WorkIcon from "@mui/icons-material/Work";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InfoIcon from "@mui/icons-material/Info";
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import CloseIcon from "@mui/icons-material/Close"; // Added for modal
// import "./Checkout.css";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const fetchSavedAddresses = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/user/addresses",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           },
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setAddresses(data);
//         }
//       } catch (err) {
//         console.error("Could not load saved addresses", err);
//       }
//     };
//     fetchSavedAddresses();
//   }, []);

//   const initialState = location.state || { cart: {}, suggestedItems: [] };
//   const [currentCart, setCurrentCart] = useState(initialState.cart);
//   const [distance] = useState(initialState.distance || 4);
//   const [paymentMethod, setPaymentMethod] = useState("gpay");
//   const [selectedAddress, setSelectedAddress] = useState("home");

//   const [addresses, setAddresses] = useState([
//     {
//       id: "home",
//       name: "SWAPNA",
//       text: "Sri Supraja Hostel, Kukatpally, Hyderabad, 500085",
//       instructions: "Don't knock the door",
//     },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingAddress, setEditingAddress] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     text: "",
//     instructions: "",
//     type: "home",
//   });

//   const addedItems = initialState.suggestedItems.filter(
//     (item) => currentCart[item.id] > 0,
//   );

//   const handleRemoveItem = (itemId) => {
//     const updatedCart = { ...currentCart };
//     updatedCart[itemId] = 0;
//     setCurrentCart(updatedCart);
//   };

//   const handleAddNew = () => {
//     setEditingAddress(null);
//     // Add type: 'home' here
//     setFormData({ name: "", text: "", instructions: "", type: "home" });
//     setIsModalOpen(true);
//   };

//   const handleEdit = (addr) => {
//     setEditingAddress(addr.id);
//     // Add type: addr.type here
//     setFormData({
//       name: addr.name,
//       text: addr.text,
//       instructions: addr.instructions,
//       type: addr.type || "home",
//     });
//     setIsModalOpen(true);
//   };

//   const handleSaveAddress = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       // Send the address to the backend so it saves in MongoDB
//       const response = await fetch(
//         "http://localhost:5000/api/user/add-address",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData),
//         },
//       );

//       const handleDeleteAddress = async (addrId) => {
//         const token = localStorage.getItem("token");
//         if (!window.confirm("Delete this address?")) return;

//         try {
//           const response = await fetch(
//             `http://localhost:5000/api/user/delete-address/${addrId}`,
//             {
//               method: "DELETE",
//               headers: { Authorization: `Bearer ${token}` },
//             },
//           );

//           if (response.ok) {
//             const data = await response.json();
//             setAddresses(data.addresses); // This refreshes the list from MongoDB
//           } else {
//             alert("Failed to delete from server");
//           }
//         } catch (error) {
//           console.error("Delete error:", error);
//         }
//       };

//       const data = await response.json();

//       if (response.ok) {
//         // Update local addresses with the new list from backend
//         setAddresses(data.addresses);
//         setIsModalOpen(false);
//         // This ensures the Profile page will see this address next time it loads
//       } else {
//         alert(data.message || "Error saving address");
//       }
//     } catch (error) {
//       console.error("Failed to sync with backend:", error);
//       alert("Check your server connection");
//     }
//   };

//   const deliveryCharge = distance <= 5 ? 0 : 20;
//   const couponDiscount = addedItems.length > 0 ? 30 : 0;
//   const offerPrice = addedItems.reduce(
//     (sum, item) => sum + Number(item.price) * currentCart[item.id],
//     0,
//   );
//   const totalPrice = addedItems.reduce((sum, item) => {
//     const originalPrice = item.oldPrice || Number(item.price) + 20;
//     return sum + Number(originalPrice) * currentCart[item.id];
//   }, 0);

//   const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
//   const totalSavings = totalPrice + deliveryCharge - finalAmount;

//   if (addedItems.length === 0) {
//     return (
//       <div
//         className="checkout-page"
//         style={{ textAlign: "center", padding: "100px 20px" }}
//       >
//         <h2 style={{ color: "#5c1919" }}>Your cart is empty</h2>
//         <button
//           onClick={() => navigate(-1)}
//           className="pay-now-btn"
//           style={{ width: "200px", marginTop: "20px" }}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>
//       <div className="checkout-content">
//         <h2 className="items-title">
//           ITEMS IN CART ({addedItems.length.toString().padStart(2, "0")})
//         </h2>
//         <div className="checkout-layout">
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn" onClick={handleAddNew}>
//                   + Add New Address
//                 </button>
//               </div>

//               {addresses.map((addr) => (
//                 <div
//                   key={addr.id}
//                   className={`address-card ${selectedAddress === addr.id ? "selected" : ""}`}
//                   onClick={() => setSelectedAddress(addr.id)}
//                 >
//                   <div className="radio-selection">
//                     <div
//                       className={`radio-inner ${selectedAddress === addr.id ? "active" : ""}`}
//                     ></div>
//                   </div>
//                   <div className="address-details">
//                     <div className="address-name-row">
//                       <strong>To, {addr.name}</strong>
//                       <div className="address-actions">
//                         <EditIcon
//                           fontSize="small"
//                           className="act-icon"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleEdit(addr);
//                           }}
//                         />
//                         <DeleteIcon
//                           fontSize="small"
//                           className="act-icon"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setAddresses(
//                               addresses.filter((a) => a.id !== addr.id),
//                             );
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <p>{addr.text}</p>
//                     {addr.instructions && (
//                       <span className="instruction-text">
//                         Instructions: {addr.instructions}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </section>

//             {/* Payment Section remains as you had it */}
//             <section className="payment-block">
//               <section className="payment-block">
//                 <h3>Payment Options</h3>
//                 <div className="payment-card">
//                   <div
//                     className="payment-row clickable-row"
//                     onClick={() => setPaymentMethod("gpay")}
//                   >
//                     <div className="payment-info">
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg"
//                         alt="GPay"
//                         style={{ width: "35px" }}
//                       />
//                       <span>Google Pay</span>
//                     </div>
//                     <CheckCircleIcon
//                       className={`check-icon ${paymentMethod === "gpay" ? "active" : ""}`}
//                     />
//                   </div>
//                   {paymentMethod === "gpay" && (
//                     <button className="pay-now-btn">Pay via Google Pay</button>
//                   )}

//                   <div
//                     className="payment-row clickable-row border-dashed"
//                     onClick={() => setPaymentMethod("phonepe")}
//                   >
//                     <div className="payment-info">
//                       <img
//                         src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
//                         alt="PhonePe"
//                         style={{ width: "35px", objectFit: "contain" }}
//                       />
//                       <span>PhonePe</span>
//                     </div>
//                     <CheckCircleIcon
//                       className={`check-icon ${paymentMethod === "phonepe" ? "active" : ""}`}
//                     />
//                   </div>
//                   {paymentMethod === "phonepe" && (
//                     <button
//                       className="pay-now-btn"
//                       style={{ backgroundColor: "#5f259f" }}
//                     >
//                       Pay via PhonePe
//                     </button>
//                   )}

//                   <div
//                     className="payment-row clickable-row border-dashed"
//                     onClick={() => setPaymentMethod("upi")}
//                   >
//                     <div className="payment-info">
//                       <AccountBalanceWalletIcon
//                         style={{ marginRight: "10px", color: "#666" }}
//                       />
//                       <span>Other UPI ID / Netbanking</span>
//                     </div>
//                     <CheckCircleIcon
//                       className={`check-icon ${paymentMethod === "upi" ? "active" : ""}`}
//                     />
//                   </div>
//                   {paymentMethod === "upi" && (
//                     <button className="pay-now-btn">Pay via UPI</button>
//                   )}
//                 </div>

//                 <h3>More Payment Options</h3>
//                 <div
//                   className={`payment-card cod-card clickable-row ${paymentMethod === "cod" ? "active-cod" : ""}`}
//                   onClick={() => setPaymentMethod("cod")}
//                 >
//                   <div className="payment-row">
//                     <div className="payment-info">
//                       <span className="cod-icon">📦</span>
//                       <span>Cash on Delivery</span>
//                     </div>
//                     <CheckCircleIcon
//                       className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`}
//                     />
//                   </div>
//                   {paymentMethod === "cod" && (
//                     <button className="pay-now-btn">Pay (Extra ₹10 Fee)</button>
//                   )}
//                 </div>
//               </section>
//             </section>
//           </div>

//           <div className="right-section">
//             <div className="summary-card">
//               {addedItems.map((item) => (
//                 <div className="item-preview" key={item.id}>
//                   <div className="item-img-container">
//                     <img src={item.img} alt={item.name} />
//                   </div>
//                   <div className="item-info">
//                     <div className="item-title-row">
//                       <h4>{item.name}</h4>
//                       <DeleteIcon
//                         fontSize="small"
//                         className="act-icon"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           // MongoDB uses _id, so we pass that to our delete function
//                           handleDeleteAddress(addr._id || addr.id);
//                         }}
//                       />
//                     </div>
//                     <p className="delivery-time">⚡ 15-20 Minutes</p>
//                     <div className="price-control-row">
//                       <span className="current-price">
//                         ₹ {item.price}{" "}
//                         <del>₹ {item.oldPrice || Number(item.price) + 20}</del>
//                       </span>
//                       <div className="quantity-pill">
//                         Qty: {currentCart[item.id]}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div className="billing-list">
//                 <div className="bill-line">
//                   <span>Item Total</span>
//                   <span>₹ {offerPrice}</span>
//                 </div>
//                 <div className="bill-line">
//                   <span>Delivery Fee</span>
//                   <span>
//                     {deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}
//                   </span>
//                 </div>
//                 <div className="bill-line coupon-row">
//                   <span>Coupon Applied</span>
//                   <span>- ₹ {couponDiscount}</span>
//                 </div>
//                 <div className="bill-line amount-to-pay">
//                   <strong>AMOUNT TO PAY</strong>
//                   <div className="final-price-box">
//                     <strong>₹ {finalAmount}</strong>
//                     <del>₹ {totalPrice + deliveryCharge}</del>
//                   </div>
//                 </div>
//               </div>
//               <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//             </div>

            // <div className="policy-note-box">
            //   <p className="policy-warning">
            //     Review your order to avoid cancellations
            //   </p>
            //   <button className="policy-link">READ REFUND POLICY</button>
            // </div>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="address-modal enriched">
//             {/* 1. Fixed Header */}
//             <div className="modal-header">
//               <div className="header-title-set">
//                 <LocationOnIcon style={{ color: "#5d1a1a" }} />
//                 <h3>{editingAddress ? "Edit Address" : "Add New Address"}</h3>
//               </div>
//               <CloseIcon
//                 className="close-modal"
//                 onClick={() => setIsModalOpen(false)}
//               />
//             </div>

//             {/* 2. Content Area */}
//             <div className="modal-body">
//               <div className="map-picker-container">
//                 <div className="map-placeholder">
//                   <p>📍 Google Maps Loading...</p>
//                   <button className="locate-me-btn">
//                     USE CURRENT LOCATION
//                   </button>
//                 </div>
//               </div>

//               {/* This is the part that will scroll */}
//               <div className="address-form-scroll">
//                 <label>
//                   <InfoIcon fontSize="inherit" /> Address Category
//                 </label>
//                 <div className="category-picker">
//                   <div
//                     className={`cat-item ${formData.type === "home" ? "active" : ""}`}
//                     onClick={() => setFormData({ ...formData, type: "home" })}
//                   >
//                     <HomeIcon fontSize="small" /> <span>Home</span>
//                   </div>
//                   <div
//                     className={`cat-item ${formData.type === "office" ? "active" : ""}`}
//                     onClick={() => setFormData({ ...formData, type: "office" })}
//                   >
//                     <WorkIcon fontSize="small" /> <span>Office</span>
//                   </div>
//                   <div
//                     className={`cat-item ${formData.type === "other" ? "active" : ""}`}
//                     onClick={() => setFormData({ ...formData, type: "other" })}
//                   >
//                     <LocationOnIcon fontSize="small" /> <span>Other</span>
//                   </div>
//                 </div>

//                 <label>Recipient Name</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   placeholder="e.g. SWAPNA"
//                 />

//                 <label>Complete Address</label>
//                 <textarea
//                   rows="2"
//                   value={formData.text}
//                   onChange={(e) =>
//                     setFormData({ ...formData, text: e.target.value })
//                   }
//                   placeholder="House/Flat No, Landmark..."
//                 />

//                 <label>Delivery Instructions</label>
//                 <input
//                   type="text"
//                   value={formData.instructions}
//                   onChange={(e) =>
//                     setFormData({ ...formData, instructions: e.target.value })
//                   }
//                   placeholder="e.g. Ring the bell"
//                 />

//                 {/* 3. The Button (Now visible) */}
//                 <button
//                   className="save-address-btn"
//                   onClick={handleSaveAddress}
//                 >
//                   SAVE ADDRESS AND PROCEED
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ADD IT HERE - This ensures it stays on top of everything */}
//       <div
//         className="sticky-checkout-bar"
//         onClick={() => {
//           /* logic to handle payment */
//         }}
//       >
//         <span>
//           {paymentMethod === "cod" ? "CONFIRM ORDER" : "PROCEED TO PAY"}
//         </span>
//         <span>(₹ {finalAmount})</span>
//       </div>
//     </div>
//   );
// };

// export default Checkout;








// import HomeIcon from "@mui/icons-material/Home";
// import WorkIcon from "@mui/icons-material/Work";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InfoIcon from "@mui/icons-material/Info";
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import CloseIcon from "@mui/icons-material/Close";
// import "./Checkout.css";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // 1. FETCH SAVED ADDRESSES ON LOAD
//   useEffect(() => {
//     const fetchSavedAddresses = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/user/addresses",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           setAddresses(data);
//         }
//       } catch (err) {
//         console.error("Could not load saved addresses", err);
//       }
//     };
//     fetchSavedAddresses();
//   }, []);

//   const initialState = location.state || { cart: {}, suggestedItems: [] };
//   const [currentCart, setCurrentCart] = useState(initialState.cart);
//   const [distance] = useState(initialState.distance || 4);
//   const [paymentMethod, setPaymentMethod] = useState("gpay");
//   const [selectedAddress, setSelectedAddress] = useState("home");

//   const [addresses, setAddresses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingAddress, setEditingAddress] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     text: "",
//     instructions: "",
//     type: "home",
//   });

//   const addedItems = initialState.suggestedItems.filter(
//     (item) => currentCart[item.id] > 0
//   );

//   const handleRemoveItem = (itemId) => {
//     const updatedCart = { ...currentCart };
//     updatedCart[itemId] = 0;
//     setCurrentCart(updatedCart);
//   };

//   const handleAddNew = () => {
//     setEditingAddress(null);
//     setFormData({ name: "", text: "", instructions: "", type: "home" });
//     setIsModalOpen(true);
//   };

//   const handleEdit = (addr) => {
//     setEditingAddress(addr._id || addr.id);
//     setFormData({
//       name: addr.name,
//       text: addr.text,
//       instructions: addr.instructions,
//       type: addr.type || "home",
//     });
//     setIsModalOpen(true);
//   };

//   // 2. SAVE ADDRESS TO MONGODB
//   const handleSaveAddress = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/user/add-address",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         setAddresses(data.addresses);
//         setIsModalOpen(false);
//       } else {
//         alert(data.message || "Error saving address");
//       }
//     } catch (error) {
//       console.error("Failed to sync with backend:", error);
//       alert("Check your server connection");
//     }
//   };

//   // 3. DELETE ADDRESS FROM MONGODB
//   const handleDeleteAddress = async (addrId) => {
//     const token = localStorage.getItem("token");
//     if (!window.confirm("Delete this address?")) return;

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/user/delete-address/${addrId}`,
//         {
//           method: "DELETE",
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setAddresses(data.addresses);
//       } else {
//         alert("Failed to delete from server");
//       }
//     } catch (error) {
//       console.error("Delete error:", error);
//     }
//   };

//   const deliveryCharge = distance <= 5 ? 0 : 20;
//   const couponDiscount = addedItems.length > 0 ? 30 : 0;
//   const offerPrice = addedItems.reduce(
//     (sum, item) => sum + Number(item.price) * currentCart[item.id],
//     0
//   );
//   const totalPrice = addedItems.reduce((sum, item) => {
//     const originalPrice = item.oldPrice || Number(item.price) + 20;
//     return sum + Number(originalPrice) * currentCart[item.id];
//   }, 0);

//   const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
//   const totalSavings = totalPrice + deliveryCharge - finalAmount;

//   if (addedItems.length === 0) {
//     return (
//       <div className="checkout-page" style={{ textAlign: "center", padding: "100px 20px" }}>
//         <h2 style={{ color: "#5c1919" }}>Your cart is empty</h2>
//         <button onClick={() => navigate(-1)} className="pay-now-btn" style={{ width: "200px", marginTop: "20px" }}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="checkout-page">
//       <div className="brand-header-strip"></div>
//       <div className="checkout-content">
//         <h2 className="items-title">
//           ITEMS IN CART ({addedItems.length.toString().padStart(2, "0")})
//         </h2>
//         <div className="checkout-layout">
//           <div className="left-section">
//             <section className="address-block">
//               <div className="section-header">
//                 <h3>Delivery Address</h3>
//                 <button className="add-new-btn" onClick={handleAddNew}>
//                   + Add New Address
//                 </button>
//               </div>

//               {addresses.map((addr) => (
//                 <div
//                   key={addr._id || addr.id}
//                   className={`address-card ${selectedAddress === (addr._id || addr.id) ? "selected" : ""}`}
//                   onClick={() => setSelectedAddress(addr._id || addr.id)}
//                 >
//                   <div className="radio-selection">
//                     <div className={`radio-inner ${selectedAddress === (addr._id || addr.id) ? "active" : ""}`}></div>
//                   </div>
//                   <div className="address-details">
//                     <div className="address-name-row">
//                       <strong>To, {addr.name}</strong>
//                       <div className="address-actions">
//                         <EditIcon
//                           fontSize="small"
//                           className="act-icon"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleEdit(addr);
//                           }}
//                         />
//                         <DeleteIcon
//                           fontSize="small"
//                           className="act-icon"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleDeleteAddress(addr._id || addr.id);
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <p>{addr.text}</p>
//                     {addr.instructions && (
//                       <span className="instruction-text">Instructions: {addr.instructions}</span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </section>

//             {/* Payment Section */}
//             <section className="payment-block">
//               <h3>Payment Options</h3>
//               <div className="payment-card">
//                 <div className="payment-row clickable-row" onClick={() => setPaymentMethod("gpay")}>
//                   <div className="payment-info">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg" alt="GPay" style={{ width: "35px" }} />
//                     <span>Google Pay</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "gpay" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "gpay" && <button className="pay-now-btn">Pay via Google Pay</button>}

//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("phonepe")}>
//                   <div className="payment-info">
//                     <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" style={{ width: "35px" }} />
//                     <span>PhonePe</span>
//                   </div>
//                   <CheckCircleIcon className={`check-icon ${paymentMethod === "phonepe" ? "active" : ""}`} />
//                 </div>
//                 {paymentMethod === "phonepe" && (
//                   <button className="pay-now-btn" style={{ backgroundColor: "#5f259f" }}>Pay via PhonePe</button>
//                 )}
                
//                 <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("cod")}>
//                     <div className="payment-info">
//                         <span className="cod-icon">📦</span>
//                         <span>Cash on Delivery</span>
//                     </div>
//                     <CheckCircleIcon className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`} />
//                 </div>
//               </div>
//             </section>
//           </div>

//           <div className="right-section">
//             <div className="summary-card">
//               {addedItems.map((item) => (
//                 <div className="item-preview" key={item.id}>
//                   <div className="item-img-container">
//                     <img src={item.img} alt={item.name} />
//                   </div>
//                   <div className="item-info">
//                     <div className="item-title-row">
//                       <h4>{item.name}</h4>
//                       <DeleteIcon className="remove-item" onClick={() => handleRemoveItem(item.id)} />
//                     </div>
//                     <p className="delivery-time">⚡ 15-20 Minutes</p>
//                     <div className="price-control-row">
//                       <span className="current-price">
//                         ₹ {item.price} <del>₹ {item.oldPrice || Number(item.price) + 20}</del>
//                       </span>
//                       <div className="quantity-pill">Qty: {currentCart[item.id]}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div className="billing-list">
//                 <div className="bill-line"><span>Item Total</span><span>₹ {offerPrice}</span></div>
//                 <div className="bill-line"><span>Delivery Fee</span><span>{deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}</span></div>
//                 <div className="bill-line coupon-row"><span>Coupon Applied</span><span>- ₹ {couponDiscount}</span></div>
//                 <div className="bill-line amount-to-pay">
//                   <strong>AMOUNT TO PAY</strong>
//                   <div className="final-price-box">
//                     <strong>₹ {finalAmount}</strong>
//                     <del>₹ {totalPrice + deliveryCharge}</del>
//                   </div>
//                 </div>
//               </div>
//               <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="address-modal enriched">
//             <div className="modal-header">
//               <div className="header-title-set">
//                 <LocationOnIcon style={{ color: "#5d1a1a" }} />
//                 <h3>{editingAddress ? "Edit Address" : "Add New Address"}</h3>
//               </div>
//               <CloseIcon className="close-modal" onClick={() => setIsModalOpen(false)} />
//             </div>
//             <div className="modal-body">
//               <div className="address-form-scroll">
//                 <label><InfoIcon fontSize="inherit" /> Address Category</label>
//                 <div className="category-picker">
//                   <div className={`cat-item ${formData.type === "home" ? "active" : ""}`} onClick={() => setFormData({ ...formData, type: "home" })}><HomeIcon fontSize="small" /> Home</div>
//                   <div className={`cat-item ${formData.type === "office" ? "active" : ""}`} onClick={() => setFormData({ ...formData, type: "office" })}><WorkIcon fontSize="small" /> Office</div>
//                 </div>
//                 <label>Recipient Name</label>
//                 <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. SWAPNA" />
//                 <label>Complete Address</label>
//                 <textarea rows="2" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} placeholder="House/Flat No, Landmark..." />
//                 <label>Delivery Instructions</label>
//                 <input type="text" value={formData.instructions} onChange={(e) => setFormData({ ...formData, instructions: e.target.value })} placeholder="e.g. Ring the bell" />
//                 <button className="save-address-btn" onClick={handleSaveAddress}>SAVE ADDRESS AND PROCEED</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="sticky-checkout-bar">
//         <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PROCEED TO PAY"}</span>
//         <span>(₹ {finalAmount})</span>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CloseIcon from "@mui/icons-material/Close";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null); // Changed from "home" to null for better ID matching
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    instructions: "",
    type: "home",
  });

  // 1. IMPROVED FETCH LOGIC
  // Wrapped in useCallback so we can call it after saving/deleting to keep UI in sync
  const fetchSavedAddresses = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/addresses",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      if (response.ok) {
        // Ensure data is an array before setting state
        const addressList = Array.isArray(data) ? data : (data.addresses || []);
        setAddresses(addressList);
        
        // Auto-select the first address if nothing is selected yet
        if (addressList.length > 0 && !selectedAddress) {
          setSelectedAddress(addressList[0]._id || addressList[0].id);
        }
      }
    } catch (err) {
      console.error("Could not load saved addresses", err);
    }
  }, [selectedAddress]);

  useEffect(() => {
    fetchSavedAddresses();
  }, [fetchSavedAddresses]);

  const initialState = location.state || { cart: {}, suggestedItems: [] };
  const [currentCart, setCurrentCart] = useState(initialState.cart);
  const [distance] = useState(initialState.distance || 4);
  const [paymentMethod, setPaymentMethod] = useState("gpay");

  const addedItems = initialState.suggestedItems.filter(
    (item) => currentCart[item.id] > 0
  );

  const handleRemoveItem = (itemId) => {
    const updatedCart = { ...currentCart };
    updatedCart[itemId] = 0;
    setCurrentCart(updatedCart);
  };

  const handleAddNew = () => {
    setEditingAddress(null);
    setFormData({ name: "", text: "", instructions: "", type: "home" });
    setIsModalOpen(true);
  };

  const handleEdit = (addr) => {
    setEditingAddress(addr._id || addr.id);
    setFormData({
      name: addr.name,
      text: addr.text,
      instructions: addr.instructions,
      type: addr.type || "home",
    });
    setIsModalOpen(true);
  };

  // 2. FIXED SAVE ADDRESS LOGIC
  const handleSaveAddress = async () => {
    const token = localStorage.getItem("token");
    
    // Check if backend URL is accessible
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/add-address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // IMPORTANT: Fetch fresh list from server to ensure Profile and Checkout match
        await fetchSavedAddresses();
        setIsModalOpen(false);
      } else {
        alert(data.message || "Error saving address");
      }
    } catch (error) {
      console.error("Failed to sync with backend:", error);
      // This is where "Check your server connection" comes from. 
      // Ensure your backend is running on port 5000.
      alert("Check your server connection. Make sure the backend is running.");
    }
  };

  // 3. DELETE ADDRESS
  const handleDeleteAddress = async (addrId) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Delete this address?")) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/user/delete-address/${addrId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.ok) {
        await fetchSavedAddresses();
      } else {
        alert("Failed to delete from server");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const deliveryCharge = distance <= 5 ? 0 : 20;
  const couponDiscount = addedItems.length > 0 ? 30 : 0;
  const offerPrice = addedItems.reduce(
    (sum, item) => sum + Number(item.price) * currentCart[item.id],
    0
  );
  const totalPrice = addedItems.reduce((sum, item) => {
    const originalPrice = item.oldPrice || Number(item.price) + 20;
    return sum + Number(originalPrice) * currentCart[item.id];
  }, 0);

  const finalAmount = Math.max(0, offerPrice + deliveryCharge - couponDiscount);
  const totalSavings = totalPrice + deliveryCharge - finalAmount;

  if (addedItems.length === 0) {
    return (
      <div className="checkout-page" style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2 style={{ color: "#5c1919" }}>Your cart is empty</h2>
        <button onClick={() => navigate(-1)} className="pay-now-btn" style={{ width: "200px", marginTop: "20px" }}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="brand-header-strip"></div>
      <div className="checkout-content">
        <h2 className="items-title">
          ITEMS IN CART ({addedItems.length.toString().padStart(2, "0")})
        </h2>
        <div className="checkout-layout">
          <div className="left-section">
            <section className="address-block">
              <div className="section-header">
                <h3>Delivery Address</h3>
                <button className="add-new-btn" onClick={handleAddNew}>
                  + Add New Address
                </button>
              </div>

              {addresses.length === 0 ? (
                <div style={{ padding: "20px", color: "gray" }}>No saved addresses found.</div>
              ) : (
                addresses.map((addr) => (
                  <div
                    key={addr._id || addr.id}
                    className={`address-card ${selectedAddress === (addr._id || addr.id) ? "selected" : ""}`}
                    onClick={() => setSelectedAddress(addr._id || addr.id)}
                  >
                    <div className="radio-selection">
                      <div className={`radio-inner ${selectedAddress === (addr._id || addr.id) ? "active" : ""}`}></div>
                    </div>
                    <div className="address-details">
                      <div className="address-name-row">
                        <strong>To, {addr.name}</strong>
                        <div className="address-actions">
                          <EditIcon
                            fontSize="small"
                            className="act-icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(addr);
                            }}
                          />
                          <DeleteIcon
                            fontSize="small"
                            className="act-icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteAddress(addr._id || addr.id);
                            }}
                          />
                        </div>
                      </div>
                      <p>{addr.text}</p>
                      {addr.instructions && (
                        <span className="instruction-text">Instructions: {addr.instructions}</span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </section>

            <section className="payment-block">
              <h3>Payment Options</h3>
              <div className="payment-card">
                <div className="payment-row clickable-row" onClick={() => setPaymentMethod("gpay")}>
                  <div className="payment-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_Logo.svg" alt="GPay" style={{ width: "35px" }} />
                    <span>Google Pay</span>
                  </div>
                  <CheckCircleIcon className={`check-icon ${paymentMethod === "gpay" ? "active" : ""}`} />
                </div>
                {paymentMethod === "gpay" && <button className="pay-now-btn">Pay via Google Pay</button>}

                <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("phonepe")}>
                  <div className="payment-info">
                    <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" style={{ width: "35px" }} />
                    <span>PhonePe</span>
                  </div>
                  <CheckCircleIcon className={`check-icon ${paymentMethod === "phonepe" ? "active" : ""}`} />
                </div>
                {paymentMethod === "phonepe" && (
                  <button className="pay-now-btn" style={{ backgroundColor: "#5f259f" }}>Pay via PhonePe</button>
                )}
                
                <div className="payment-row clickable-row border-dashed" onClick={() => setPaymentMethod("cod")}>
                    <div className="payment-info">
                        <span className="cod-icon">📦</span>
                        <span>Cash on Delivery</span>
                    </div>
                    <CheckCircleIcon className={`check-icon ${paymentMethod === "cod" ? "active" : ""}`} />
                </div>
                {paymentMethod === "cod" && (
                    <button className="pay-now-btn">Pay (Extra ₹10 Fee)</button>
                  )}
              </div>
            </section>
          </div>

          <div className="right-section">
            <div className="summary-card">
              {addedItems.map((item) => (
                <div className="item-preview" key={item.id}>
                  <div className="item-img-container">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <div className="item-title-row">
                      <h4>{item.name}</h4>
                      <DeleteIcon className="remove-item" onClick={() => handleRemoveItem(item.id)} />
                    </div>
                    <p className="delivery-time">⚡ 15-20 Minutes</p>
                    <div className="price-control-row">
                      <span className="current-price">
                        ₹ {item.price} <del>₹ {item.oldPrice || Number(item.price) + 20}</del>
                      </span>
                      <div className="quantity-pill">Qty: {currentCart[item.id]}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="billing-list">
                <div className="bill-line"><span>Item Total</span><span>₹ {offerPrice}</span></div>
                <div className="bill-line"><span>Delivery Fee</span><span>{deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}</span></div>
                <div className="bill-line coupon-row"><span>Coupon Applied</span><span>- ₹ {couponDiscount}</span></div>
                <div className="bill-line amount-to-pay">
                  <strong>AMOUNT TO PAY</strong>
                  <div className="final-price-box">
                    <strong>₹ {finalAmount}</strong>
                    <del>₹ {totalPrice + deliveryCharge}</del>
                  </div>
                </div>
              </div>
              <p className="savings-msg">🎉 Yay! You saved ₹ {totalSavings}</p>
            </div>
                        <div className="policy-note-box">
              <p className="policy-warning">
                Review your order to avoid cancellations
              </p>
              <button className="policy-link">READ REFUND POLICY</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="address-modal enriched">
            <div className="modal-header">
              <div className="header-title-set">
                <LocationOnIcon style={{ color: "#5d1a1a" }} />
                <h3>{editingAddress ? "Edit Address" : "Add New Address"}</h3>
              </div>
              <CloseIcon className="close-modal" onClick={() => setIsModalOpen(false)} />
            </div>
            <div className="modal-body">
              <div className="address-form-scroll">
                <label><InfoIcon fontSize="inherit" /> Address Category</label>
                <div className="category-picker">
                  <div className={`cat-item ${formData.type === "home" ? "active" : ""}`} onClick={() => setFormData({ ...formData, type: "home" })}><HomeIcon fontSize="small" /> Home</div>
                  <div className={`cat-item ${formData.type === "office" ? "active" : ""}`} onClick={() => setFormData({ ...formData, type: "office" })}><WorkIcon fontSize="small" /> Office</div>
                </div>
                <label>Recipient Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. SWAPNA" />
                <label>Complete Address</label>
                <textarea rows="2" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} placeholder="House/Flat No, Landmark..." />
                <label>Delivery Instructions</label>
                <input type="text" value={formData.instructions} onChange={(e) => setFormData({ ...formData, instructions: e.target.value })} placeholder="e.g. Ring the bell" />
                <button className="save-address-btn" onClick={handleSaveAddress}>SAVE ADDRESS AND PROCEED</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="sticky-checkout-bar">
        <span>{paymentMethod === "cod" ? "CONFIRM ORDER" : "PROCEED TO PAY"}</span>
        <span>(₹ {finalAmount})</span>
      </div>
    </div>
  );
};

export default Checkout;