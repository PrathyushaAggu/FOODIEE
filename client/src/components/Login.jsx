// import React, { useState } from 'react';
// import './Login.css';

// const Login = ({ isOpen, onClose }) => {
//   const [isLoginView, setIsLoginView] = useState(true);

//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="minimal-card" onClick={(e) => e.stopPropagation()}>
//         <button className="close-icon" onClick={onClose}>&times;</button>

//         <div className="card-body">
//           <header className="auth-header">
//             <h2>{isLoginView ? 'Welcome Back' : 'Join Savour'}</h2>
//             <p>
//               {isLoginView ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 className="toggle-link"
//                 onClick={() => setIsLoginView(!isLoginView)}
//               >
//                 {isLoginView ? ' Create one' : ' Login here'}
//               </button>
//             </p>
//           </header>

//           <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
//             {!isLoginView && (
//               <div className="input-field">
//                 <input type="text" placeholder="Full Name" required />
//               </div>
//             )}

//             <div className="input-field">
//               <input type="tel" placeholder="Phone Number" required />
//             </div>

//             <button className="main-submit-btn">
//               {isLoginView ? 'LOG IN' : 'SIGN UP'}
//             </button>
//           </form>

//           <footer className="form-footer">
//             <p>Secure login with OTP verification</p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from 'react';
// import './Login.css';

// const Login = ({ isOpen, onClose, initialIsLogin = true }) => {
//   // Sets the view (Login or SignUp) based on the prop from App.jsx
//   const [isLoginView, setIsLoginView] = useState(initialIsLogin);

//   // Sync state if the modal is closed and re-opened with a different button
//   useEffect(() => {
//     setIsLoginView(initialIsLogin);
//   }, [initialIsLogin, isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="minimal-card" onClick={(e) => e.stopPropagation()}>
//         <button className="close-icon" onClick={onClose}>&times;</button>

//         <div className="card-body">
//           <header className="auth-header">
//             {/* Title changes based on view state */}
//             <h2>{isLoginView ? 'Welcome Back' : 'Join Savour'}</h2>
//             <p>
//               {isLoginView ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 className="toggle-link"
//                 onClick={() => setIsLoginView(!isLoginView)}
//               >
//                 {isLoginView ? ' Create one' : ' Login here'}
//               </button>
//             </p>
//           </header>

//           <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
//             {/* Show Full Name field ONLY if in Sign Up view */}
//             {!isLoginView && (
//               <div className="input-field">
//                 <input type="text" placeholder="Full Name" required />
//               </div>
//             )}

//             <div className="input-field">
//               <input type="tel" placeholder="Phone Number" required />
//             </div>
//              <div className="input-field">
//               <input type="email" placeholder="Email" required />
//             </div>

//             <button className="main-submit-btn">
//               {isLoginView ? 'LOG IN' : 'SIGN UP'}
//             </button>
//           </form>

//           <footer className="form-footer">
//             <p>Secure login with OTP verification</p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from 'react';
// import './Login.css';

// const Login = ({ isOpen, onClose, initialIsLogin = true }) => {
//   const [isLoginView, setIsLoginView] = useState(initialIsLogin);
//   const [agreed, setAgreed] = useState(false);

//   useEffect(() => {
//     setIsLoginView(initialIsLogin);
//   }, [initialIsLogin, isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="minimal-card" onClick={(e) => e.stopPropagation()}>
//         <button className="close-icon" onClick={onClose}>&times;</button>

//         <div className="card-body">
//           <header className="auth-header">
//             <h2>{isLoginView ? 'Welcome Back' : 'Join Savour'}</h2>
//           </header>

//           <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
//             {!isLoginView && (
//               <div className="input-field">
//                 <input type="text" placeholder="Full Name" required />
//               </div>
//             )}

//             <div className="input-field">
//               <input type="tel" placeholder="Phone Number" required />
//             </div>

//             {!isLoginView && (
//               <div className="input-field">
//                 <input type="email" placeholder="Email Address" required />
//               </div>
//             )}

//             {/* Terms and Conditions (as seen in image 2) */}
//             {!isLoginView && (
//               <div className="terms-container">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   checked={agreed}
//                   onChange={() => setAgreed(!agreed)}
//                 />
//                 <label htmlFor="terms">
//                   I agree to Savor's <span className="red-text">Terms of Service, Privacy Policy</span> and <span className="red-text">Content Policies</span>
//                 </label>
//               </div>
//             )}

//             <button
//               className={`main-submit-btn ${!isLoginView && !agreed ? 'disabled' : ''}`}
//               disabled={!isLoginView && !agreed}
//             >
//               {isLoginView ? 'LOG IN' : 'Create account'}
//             </button>
//           </form>

//           <div className="divider"><span>or</span></div>

// <button className="google-btn" type="button">
//   <img
//     src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
//     alt="Google Logo"
//   />
//   <span>Sign in with Google</span>
// </button>

//           {/* Toggle Link moved to bottom */}
//           <footer className="auth-footer-toggle">
//             <p>
//               {isLoginView ? "Don't have an account?" : "Already have an account?"}
//               <button
//                 className="toggle-link"
//                 onClick={() => setIsLoginView(!isLoginView)}
//               >
//                 {isLoginView ? ' Create one' : ' Login here'}
//               </button>
//             </p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import './Login.css';

// const Login = ({ isOpen, onClose, initialIsLogin = true }) => {
//   const [isLoginView, setIsLoginView] = useState(initialIsLogin);
//   const [agreed, setAgreed] = useState(false);

//   useEffect(() => {
//     setIsLoginView(initialIsLogin);
//   }, [initialIsLogin, isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className={`minimal-card ${!isLoginView ? 'signup-active' : ''}`} onClick={(e) => e.stopPropagation()}>
//         <button className="close-icon" onClick={onClose}>
//           <CloseIcon fontSize="small" />
//         </button>

//         <div className="card-body">
//           <header className="auth-header">
//             <h2>{isLoginView ? 'Welcome Back' : 'Create Account at Savour'}</h2>
//           </header>

//           <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
//             {!isLoginView && (
//               <div className="input-wrapper">
//                 <PersonOutlineIcon className="input-icon" />
//                 <input type="text" placeholder="Full Name" required />
//               </div>
//             )}

//             <div className="input-wrapper">
//               <PhoneIphoneIcon className="input-icon" />
//               <input type="tel" placeholder="Phone Number" required />
//             </div>

//             {!isLoginView && (
//               <div className="input-wrapper">
//                 <MailOutlineIcon className="input-icon" />
//                 <input type="email" placeholder="Email Address" required />
//               </div>
//             )}

//             {!isLoginView && (
//               <div className="terms-container">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   checked={agreed}
//                   onChange={() => setAgreed(!agreed)}
//                 />
//                 <label htmlFor="terms">
//                   I agree to Savor's <span className="red-text">Terms, Privacy Policy</span>
//                 </label>
//               </div>
//             )}

//             <button
//               className={`main-submit-btn ${!isLoginView && !agreed ? 'disabled' : ''}`}
//               disabled={!isLoginView && !agreed}
//             >
//               {isLoginView ? 'LOG IN' : 'Create account'}
//             </button>
//           </form>

//           <div className="divider"><span>or</span></div>

//           <button className="google-btn" type="button">
//             <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="G" />
//             <span>Sign in with Google</span>
//           </button>

//           <footer className="auth-footer-toggle">
//             <p>
//               {isLoginView ? "New here?" : "Joined already?"}
//               <button className="toggle-link" onClick={() => setIsLoginView(!isLoginView)}>
//                 {isLoginView ? ' Create account' : ' Login here'}
//               </button>
//             </p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import savourLogo from '../assets/savourlogo.jpeg';
// import './Login.css';

// const Login = ({ isOpen, onClose, initialIsLogin = true }) => {
//   const navigate = useNavigate();
//   const [isLoginView, setIsLoginView] = useState(initialIsLogin);
//   const [agreed, setAgreed] = useState(false);
//   const [loading, setLoading] = useState(false); // To handle button state during Atlas call

//   // State for form inputs
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phoneNumber: '',
//     email: '',
//     password: ''
//   });

//   // Sync the view (Login or Signup) when modal opens
//   useEffect(() => {
//     setIsLoginView(initialIsLogin);
//   }, [initialIsLogin, isOpen]);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Switch between Signup and Login endpoints
//     const API_BASE = "http://localhost:5000";
//     const endpoint = isLoginView ? '/api/login' : '/api/signup';

//     try {
//       const response = await fetch(`${API_BASE}${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (!isLoginView) {
//           // CASE: Successful Signup
//           alert("Account created in Savour! Now please log in.");
//           setIsLoginView(true); // Automatically switch to login view
//         } else {
//           // CASE: Successful Login
//           localStorage.setItem('token', data.token);
//           localStorage.setItem('userName', data.user.fullName);
//           onClose(); // Close the modal
//           navigate('/home-makers'); // ONLY NOW navigate to the page
//         }
//       } else {
//         // CASE: Backend Error (e.g. User already exists)
//         alert(data.message || "Authentication failed");
//       }
//     } catch (err) {
//       alert("Cannot connect to server. Ensure your Node.js backend is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className={`minimal-card ${!isLoginView ? 'signup-active' : ''}`} onClick={(e) => e.stopPropagation()}>
//         <button className="close-icon" onClick={onClose}>
//           <CloseIcon fontSize="small" />
//         </button>

//         <div className="card-body">
//           <header className="auth-header">
//             <div className="title-with-logo">
//                <img src={savourLogo} alt="Savour" className="auth-logo" />
//                <h2>{isLoginView ? 'Welcome Back' : 'Create Account'}</h2>
//             </div>
//           </header>

//           <form className="minimal-form" onSubmit={handleSubmit}>
//             {/* FULL NAME: Only for Signup */}
//             {!isLoginView && (
//               <div className="input-wrapper">
//                 <PersonOutlineIcon className="input-icon" />
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             )}

//             {/* PHONE NUMBER: Always needed */}
//             <div className="input-wrapper">
//               <PhoneIphoneIcon className="input-icon" />
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 value={formData.phoneNumber}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             {/* EMAIL: Only for Signup */}
//             {!isLoginView && (
//               <div className="input-wrapper">
//                 <MailOutlineIcon className="input-icon" />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             )}

//             {/* PASSWORD: Always needed for Database connection */}
//             <div className="input-wrapper">
//               <LockOpenIcon className="input-icon" />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             {/* TERMS: Only for Signup */}
//             {!isLoginView && (
//               <div className="terms-container">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   checked={agreed}
//                   onChange={() => setAgreed(!agreed)}
//                 />
//                 <label htmlFor="terms">
//                   I agree to Savour's <span className="red-text">Terms, Privacy Policy</span>
//                 </label>
//               </div>
//             )}

//             <button
//               type="submit"
//               className={`main-submit-btn ${!isLoginView && !agreed ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
//               disabled={(!isLoginView && !agreed) || loading}
//             >
//               {loading ? 'Processing...' : (isLoginView ? 'LOG IN' : 'Create account')}
//             </button>
//           </form>

//           <div className="divider"><span>or</span></div>

//           <button className="google-btn" type="button">
//             <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="G" />
//             <span>Sign in with Google</span>
//           </button>

//           <footer className="auth-footer-toggle">
//             <p>
//               {isLoginView ? "New here?" : "Joined already?"}
//               <button className="toggle-link" onClick={() => setIsLoginView(!isLoginView)}>
//                 {isLoginView ? ' Create account' : ' Login here'}
//               </button>
//             </p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./Login.css";

const Login = ({ isOpen, onClose, initialIsLogin = true }) => {
  const navigate = useNavigate();
  const [isLoginView, setIsLoginView] = useState(initialIsLogin);
  const [agreed, setAgreed] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setIsLoginView(initialIsLogin);
  }, [initialIsLogin, isOpen]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // UPDATED HANDLESUBMIT: Bridges the Frontend to your Node.js Backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // API_BASE matches your server.js PORT
    const API_BASE = "http://localhost:5000";
    // Modified to include '/auth' to match: app.use('/api/auth', authRoutes)
    const endpoint = isLoginView ? "/api/auth/login" : "/api/auth/signup";

    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (!isLoginView) {
          // Success case for Registration
          alert("Account created at Savour! Please log in.");
          setIsLoginView(true);
        } else {
          // Success case for Login: Store data in browser
          localStorage.setItem("token", data.token);
          localStorage.setItem("userName", data.user.fullName);
          localStorage.setItem("userEmail", data.user.email); // Add this
          localStorage.setItem("userPhone", data.user.phoneNumber); // Add this
          onClose(); // Close modal
          navigate("/home-makers"); // Move to the next page
        }
      } else {
        // Displays error from Backend (e.g., "User already exists")
        alert(data.message || "Authentication failed");
      }
    } catch (err) {
      // Catch-all for when the server is not running
      alert(
        "Server connection failed. Make sure your backend (node server.js) is running!",
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`minimal-card ${!isLoginView ? "signup-active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-icon" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </button>

        <div className="card-body">
          <header className="auth-header">
            <h2>{isLoginView ? "Welcome Back" : "Create Account at Savour"}</h2>
          </header>

          <form className="minimal-form" onSubmit={handleSubmit}>
            {!isLoginView && (
              <div className="input-wrapper">
                <PersonOutlineIcon className="input-icon" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <div className="input-wrapper">
              <PhoneIphoneIcon className="input-icon" />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {!isLoginView && (
              <div className="input-wrapper">
                <MailOutlineIcon className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <div className="input-wrapper">
              <LockOpenIcon className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {!isLoginView && (
              <div className="terms-container">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                />
                <label htmlFor="terms">
                  I agree to Savor's{" "}
                  <span className="red-text">Terms, Privacy Policy</span>
                </label>
              </div>
            )}

            <button
              type="submit"
              className={`main-submit-btn ${!isLoginView && !agreed ? "disabled" : ""}`}
              disabled={!isLoginView && !agreed}
            >
              {isLoginView ? "LOG IN" : "Create account"}
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button className="google-btn" type="button">
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="G"
            />
            <span>Sign in with Google</span>
          </button>

          <footer className="auth-footer-toggle">
            <p>
              {isLoginView ? "New here?" : "Joined already?"}
              <button
                className="toggle-link"
                onClick={() => setIsLoginView(!isLoginView)}
              >
                {isLoginView ? " Create account" : " Login here"}
              </button>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
