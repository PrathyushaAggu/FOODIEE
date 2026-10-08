// import React, { useState, useRef } from 'react';
// import './Profile.css';
// import {
//   PersonOutline, MailOutline, PhoneIphone, Map,
//   ShoppingBag, CameraAlt, Save, Close, Verified,
//   ExitToApp, DeleteForever, ChevronRight
// } from '@mui/icons-material';

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('profile'); // profile, orders, locations
//   const [isEditing, setIsEditing] = useState({ name: false, email: false });
//   const fileInputRef = useRef(null);

//   const [user, setUser] = useState({
//     fullName: localStorage.getItem('userName') || 'User Name',
//     email: localStorage.getItem('userEmail') || 'user@example.com',
//     phoneNumber: localStorage.getItem('userPhone') || '9876543210',
//     profilePic: localStorage.getItem('userPic') || null
//   });

//   // Mock Data for Orders & Locations
//   const orders = [
//     { id: '#SAV2026', date: 'Feb 10, 2026', status: 'Delivered', total: '₹450' },
//     { id: '#SAV1988', date: 'Jan 28, 2026', status: 'In Progress', total: '₹1,200' }
//   ];

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = '/';
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUser({ ...user, profilePic: reader.result });
//         localStorage.setItem('userPic', reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-dashboard">
//       <div className="dashboard-container">

//         {/* LEFT NAVIGATION SIDEBAR */}
//         <aside className="sidebar">
//           <div className="user-profile-summary">
//             <div className="avatar-container" onClick={() => fileInputRef.current.click()}>
//               {user.profilePic ? (
//                 <img src={user.profilePic} alt="Profile" className="profile-img" />
//               ) : (
//                 <div className="avatar-initials">{user.fullName.charAt(0)}</div>
//               )}
//               <div className="camera-overlay"><CameraAlt /></div>
//               <input type="file" ref={fileInputRef} hidden onChange={handleImageUpload} accept="image/*" />
//             </div>
//             <h3>{user.fullName} <Verified className="v-icon" /></h3>
//             <p>{user.email}</p>
//           </div>

//           <nav className="side-nav">
//             <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
//               <PersonOutline /> Account Details
//             </button>
//             <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
//               <ShoppingBag /> My Orders
//             </button>
//             <button className={activeTab === 'locations' ? 'active' : ''} onClick={() => setActiveTab('locations')}>
//               <Map /> Saved Locations
//             </button>
//             <hr />
//             <button className="logout-btn-nav" onClick={handleLogout}><ExitToApp /> Sign Out</button>
//           </nav>
//         </aside>

//         {/* MAIN CONTENT AREA */}
//         <main className="main-content">

//           {/* TAB 1: PROFILE EDIT */}
//           {activeTab === 'profile' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Profile Settings</h2>
//                 <p>Update your personal information and contact details</p>
//               </header>

//               <div className="settings-grid">
//                 <div className="setting-card">
//                   <div className="card-top">
//                     <label>Full Name</label>
//                     <button onClick={() => setIsEditing({...isEditing, name: !isEditing.name})}>
//                       {isEditing.name ? <Save className="save-icon"/> : 'Edit'}
//                     </button>
//                   </div>
//                   {isEditing.name ? (
//                     <input className="edit-input" value={user.fullName} onChange={(e) => setUser({...user, fullName: e.target.value})} />
//                   ) : <p>{user.fullName}</p>}
//                 </div>

//                 <div className="setting-card">
//                   <div className="card-top">
//                     <label>Email Address</label>
//                     <button onClick={() => setIsEditing({...isEditing, email: !isEditing.email})}>
//                       {isEditing.email ? <Save className="save-icon"/> : 'Edit'}
//                     </button>
//                   </div>
//                   {isEditing.email ? (
//                     <input className="edit-input" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
//                   ) : <p>{user.email}</p>}
//                 </div>

//                 <div className="setting-card disabled">
//                   <div className="card-top">
//                     <label>Phone Number</label>
//                     <span className="lock-label">Locked</span>
//                   </div>
//                   <p>{user.phoneNumber}</p>
//                 </div>
//               </div>

//               <div className="danger-zone-card">
//                 <h4>Danger Zone</h4>
//                 <p>Deleting your account will remove all your data permanently.</p>
//                 <button className="del-btn"><DeleteForever /> Delete My Account</button>
//               </div>
//             </div>
//           )}

//           {/* TAB 2: MY ORDERS */}
//           {activeTab === 'orders' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Your Orders</h2>
//                 <p>Track your current orders and view history</p>
//               </header>
//               <div className="order-list">
//                 {orders.map(order => (
//                   <div className="order-item" key={order.id}>
//                     <div className="order-info">
//                       <span className="order-id">{order.id}</span>
//                       <span className="order-date">{order.date}</span>
//                     </div>
//                     <div className="order-status-row">
//                       <span className={`status ${order.status.replace(/\s/g, '').toLowerCase()}`}>{order.status}</span>
//                       <span className="order-total">{order.total}</span>
//                     </div>
//                     <ChevronRight className="arrow-icon" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* TAB 3: SAVED LOCATIONS */}
//           {activeTab === 'locations' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Saved Locations</h2>
//                 <p>Manage your delivery addresses</p>
//               </header>
//               <div className="location-card">
//                 <div className="loc-icon"><Map /></div>
//                 <div className="loc-details">
//                   <h5>Home</h5>
//                   <p>123 Savour Street, Jubilee Hills, Hyderabad</p>
//                 </div>
//                 <button className="edit-btn-text">Edit</button>
//               </div>
//               <button className="add-location-btn">+ Add New Address</button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useRef } from 'react';
// import './Profile.css';
// import {
//   PersonOutline, MailOutline, PhoneIphone, Map,
//   ShoppingBag, CameraAlt, Save, Close, Verified,
//   ExitToApp, DeleteForever, ChevronRight
// } from '@mui/icons-material';

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('profile'); // profile, orders, locations
//   const [isEditing, setIsEditing] = useState({ name: false, email: false });
//   const fileInputRef = useRef(null);

//   const [user, setUser] = useState({
//     fullName: localStorage.getItem('userName') || 'User Name',
//     email: localStorage.getItem('userEmail') || 'user@example.com',
//     phoneNumber: localStorage.getItem('userPhone') || '9876543210',
//     profilePic: localStorage.getItem('userPic') || null
//   });

//   // Mock Data for Orders & Locations
//   const orders = [
//     { id: '#SAV2026', date: 'Feb 10, 2026', status: 'Delivered', total: '₹450' },
//     { id: '#SAV1988', date: 'Jan 28, 2026', status: 'In Progress', total: '₹1,200' }
//   ];

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = '/';
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUser({ ...user, profilePic: reader.result });
//         localStorage.setItem('userPic', reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-dashboard">
//       <div className="dashboard-container">

//         {/* LEFT NAVIGATION SIDEBAR */}
//         <aside className="sidebar">
//           <div className="user-profile-summary">
//             <div className="avatar-container" onClick={() => fileInputRef.current.click()}>
//               {user.profilePic ? (
//                 <img src={user.profilePic} alt="Profile" className="profile-img" />
//               ) : (
//                 <div className="avatar-initials">{user.fullName.charAt(0)}</div>
//               )}
//               <div className="camera-overlay"><CameraAlt /></div>
//               <input type="file" ref={fileInputRef} hidden onChange={handleImageUpload} accept="image/*" />
//             </div>
//             <h3>{user.fullName} <Verified className="v-icon" /></h3>
//             <p>{user.email}</p>
//           </div>

//           <nav className="side-nav">
//             <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
//               <PersonOutline /> Account Details
//             </button>
//             <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
//               <ShoppingBag /> My Orders
//             </button>
//             <button className={activeTab === 'locations' ? 'active' : ''} onClick={() => setActiveTab('locations')}>
//               <Map /> Saved Locations
//             </button>
//             <hr />
//             <button className="logout-btn-nav" onClick={handleLogout}><ExitToApp /> Sign Out</button>
//           </nav>
//         </aside>

//         {/* MAIN CONTENT AREA */}
//         <main className="main-content">

//           {/* TAB 1: PROFILE EDIT */}
//           {activeTab === 'profile' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Profile Settings</h2>
//                 <p>Update your personal information and contact details</p>
//               </header>

//               <div className="settings-grid">
//                 <div className="setting-card">
//                   <div className="card-top">
//                     <label>Full Name</label>
//                     <button onClick={() => setIsEditing({...isEditing, name: !isEditing.name})}>
//                       {isEditing.name ? <Save className="save-icon"/> : 'Edit'}
//                     </button>
//                   </div>
//                   {isEditing.name ? (
//                     <input className="edit-input" value={user.fullName} onChange={(e) => setUser({...user, fullName: e.target.value})} />
//                   ) : <p>{user.fullName}</p>}
//                 </div>

//                 <div className="setting-card">
//                   <div className="card-top">
//                     <label>Email Address</label>
//                     <button onClick={() => setIsEditing({...isEditing, email: !isEditing.email})}>
//                       {isEditing.email ? <Save className="save-icon"/> : 'Edit'}
//                     </button>
//                   </div>
//                   {isEditing.email ? (
//                     <input className="edit-input" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
//                   ) : <p>{user.email}</p>}
//                 </div>

//                 <div className="setting-card disabled">
//                   <div className="card-top">
//                     <label>Phone Number</label>
//                     <span className="lock-label">Locked</span>
//                   </div>
//                   <p>{user.phoneNumber}</p>
//                 </div>
//               </div>

//               <div className="danger-zone-card">
//                 <h4>Danger Zone</h4>
//                 <p>Deleting your account will remove all your data permanently.</p>
//                 <button className="del-btn"><DeleteForever /> Delete My Account</button>
//               </div>
//             </div>
//           )}

//           {/* TAB 2: MY ORDERS */}
//           {activeTab === 'orders' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Your Orders</h2>
//                 <p>Track your current orders and view history</p>
//               </header>
//               <div className="order-list">
//                 {orders.map(order => (
//                   <div className="order-item" key={order.id}>
//                     <div className="order-info">
//                       <span className="order-id">{order.id}</span>
//                       <span className="order-date">{order.date}</span>
//                     </div>
//                     <div className="order-status-row">
//                       <span className={`status ${order.status.replace(/\s/g, '').toLowerCase()}`}>{order.status}</span>
//                       <span className="order-total">{order.total}</span>
//                     </div>
//                     <ChevronRight className="arrow-icon" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* TAB 3: SAVED LOCATIONS */}
//           {activeTab === 'locations' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Saved Locations</h2>
//                 <p>Manage your delivery addresses</p>
//               </header>
//               <div className="location-card">
//                 <div className="loc-icon"><Map /></div>
//                 <div className="loc-details">
//                   <h5>Home</h5>
//                   <p>123 Savour Street, Jubilee Hills, Hyderabad</p>
//                 </div>
//                 <button className="edit-btn-text">Edit</button>
//               </div>
//               <button className="add-location-btn">+ Add New Address</button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useRef, useEffect } from 'react';
// import './Profile.css';
// import {
//   PersonOutline, MailOutline, PhoneIphone, Map,
//   ShoppingBag, CameraAlt, Save, Close, Verified,
//   ExitToApp, DeleteForever, ChevronRight
// } from '@mui/icons-material';

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [isEditing, setIsEditing] = useState({ name: false, email: false });
//   const fileInputRef = useRef(null);

//   const [user, setUser] = useState({
//     fullName: localStorage.getItem('userName') || 'User Name',
//     email: localStorage.getItem('userEmail') || 'user@example.com',
//     phoneNumber: localStorage.getItem('userPhone') || '9876543210',
//     profilePic: localStorage.getItem('userPic') || null,
//     addresses: [], // New state for DB addresses
//     orders: []     // New state for DB orders
//   });

// useEffect(() => {
//   const fetchUserData = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       // 1. Fetch Basic Profile (Name, Email)
//       const authRes = await fetch('http://localhost:5000/api/auth/me', {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       const authData = await authRes.json();

//       // 2. Fetch Latest Addresses (The important part!)
//       const addrRes = await fetch('http://localhost:5000/api/user/addresses', {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       const addrData = await addrRes.json();

//       if (authRes.ok) {
//         setUser(prev => ({
//           ...prev,
//           fullName: authData.fullName || prev.fullName,
//           email: authData.email || prev.email,
//           phoneNumber: authData.phoneNumber || prev.phoneNumber,
//           // Update addresses with the fresh data from the server
//           addresses: Array.isArray(addrData) ? addrData : [],
//           orders: authData.orders || []
//         }));
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   // Fetch data whenever the user switches to the 'locations' tab
//   if (activeTab === 'locations' || activeTab === 'profile') {
//     fetchUserData();
//   }
// }, [activeTab]); // Trigger refresh when tab changes

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = '/';
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUser({ ...user, profilePic: reader.result });
//         localStorage.setItem('userPic', reader.result);
//         // Tip: You should also call an API here to save user.profilePic to MongoDB
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-dashboard">
//       <div className="dashboard-container">

//         {/* LEFT NAVIGATION SIDEBAR */}
//         <aside className="sidebar">
//           <div className="user-profile-summary">
//             <div className="avatar-container" onClick={() => fileInputRef.current.click()}>
//               {user.profilePic ? (
//                 <img src={user.profilePic} alt="Profile" className="profile-img" />
//               ) : (
//                 <div className="avatar-initials">{user.fullName.charAt(0)}</div>
//               )}
//               <div className="camera-overlay"><CameraAlt /></div>
//               <input type="file" ref={fileInputRef} hidden onChange={handleImageUpload} accept="image/*" />
//             </div>
//             <h3>{user.fullName} <Verified className="v-icon" /></h3>
//             <p>{user.email}</p>
//           </div>

//           <nav className="side-nav">
//             <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
//               <PersonOutline /> Account Details
//             </button>
//             <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
//               <ShoppingBag /> My Orders
//             </button>
//             <button className={activeTab === 'locations' ? 'active' : ''} onClick={() => setActiveTab('locations')}>
//               <Map /> Saved Locations
//             </button>
//             <hr />
//             <button className="logout-btn-nav" onClick={handleLogout}><ExitToApp /> Sign Out</button>
//           </nav>
//         </aside>

//         {/* MAIN CONTENT AREA */}
//         <main className="main-content">

//           {/* TAB 1: PROFILE EDIT */}
//           {activeTab === 'profile' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Profile Settings</h2>
//                 <p>Update your personal information and contact details</p>
//               </header>

//               <div className="settings-grid">
//                 <div className="setting-card">
//                   <div className="card-top">
//                     <label>Full Name</label>
//                     <button onClick={() => setIsEditing({...isEditing, name: !isEditing.name})}>
//                       {isEditing.name ? <Save className="save-icon"/> : 'Edit'}
//                     </button>
//                   </div>
//                   {isEditing.name ? (
//                     <input className="edit-input" value={user.fullName} onChange={(e) => setUser({...user, fullName: e.target.value})} />
//                   ) : <p>{user.fullName}</p>}
//                 </div>

//                 <div className="setting-card">
//                   <div className="card-top">
//                     <label>Email Address</label>
//                     <button onClick={() => setIsEditing({...isEditing, email: !isEditing.email})}>
//                       {isEditing.email ? <Save className="save-icon"/> : 'Edit'}
//                     </button>
//                   </div>
//                   {isEditing.email ? (
//                     <input className="edit-input" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
//                   ) : <p>{user.email}</p>}
//                 </div>

//                 <div className="setting-card disabled">
//                   <div className="card-top">
//                     <label>Phone Number</label>
//                     <span className="lock-label">Locked</span>
//                   </div>
//                   <p>{user.phoneNumber}</p>
//                 </div>
//               </div>

//               <div className="danger-zone-card">
//                 <h4>Danger Zone</h4>
//                 <p>Deleting your account will remove all your data permanently.</p>
//                 <button className="del-btn"><DeleteForever /> Delete My Account</button>
//               </div>
//             </div>
//           )}

//           {/* TAB 2: MY ORDERS */}
//           {activeTab === 'orders' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Your Orders</h2>
//                 <p>Track your current orders and view history</p>
//               </header>
//               <div className="order-list">
//                 {user.orders.length > 0 ? (
//                   user.orders.map(order => (
//                     <div className="order-item" key={order.orderId}>
//                       <div className="order-info">
//                         <span className="order-id">#{order.orderId}</span>
//                         <span className="order-date">{new Date(order.date).toLocaleDateString()}</span>
//                       </div>
//                       <div className="order-status-row">
//                         <span className={`status ${order.status.replace(/\s/g, '').toLowerCase()}`}>{order.status}</span>
//                         <span className="order-total">{order.total}</span>
//                       </div>
//                       <ChevronRight className="arrow-icon" />
//                     </div>
//                   ))
//                 ) : (
//                   <p className="no-data">No orders found.</p>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* TAB 3: SAVED LOCATIONS */}
//           {activeTab === 'locations' && (
//             <div className="tab-view animate-fade">
//               <header className="view-header">
//                 <h2>Saved Locations</h2>
//                 <p>Manage your delivery addresses</p>
//               </header>
//               <div className="location-list">
//                 {user.addresses.length > 0 ? (
//                   user.addresses.map((addr, index) => (
//                     <div className="location-card" key={index}>
//                       <div className="loc-icon"><Map /></div>
//                       <div className="loc-details">
//                         <h5>{addr.type.toUpperCase()}</h5>
//                         <p>{addr.text}</p>
//                         {addr.instructions && <small>Instructions: {addr.instructions}</small>}
//                       </div>
//                       <button className="edit-btn-text">Edit</button>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="no-data">No saved addresses yet.</p>
//                 )}
//               </div>
//               <button className="add-location-btn">+ Add New Address</button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import './Profile.css';
import {
  PersonOutline, MailOutline, PhoneIphone, Map,
  ShoppingBag, CameraAlt, Save, Close, Verified,
  ExitToApp, DeleteForever, ChevronRight
} from '@mui/icons-material';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState({ name: false, email: false });
  const fileInputRef = useRef(null);

  const [user, setUser] = useState({
    fullName: localStorage.getItem('userName') || 'User Name',
    email: localStorage.getItem('userEmail') || 'user@example.com',
    phoneNumber: localStorage.getItem('userPhone') || '9876543210',
    profilePic: localStorage.getItem('userPic') || null,
    addresses: [],
    orders: []
  });

  // PROTECT ROUTE: If no token exists, kick user to landing page immediately
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  // FETCH DATA: Centralized and safe fetching logic
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        // 1. Fetch Profile
        const authRes = await fetch('http://localhost:5000/api/auth/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const authData = await authRes.json();

        // 2. Fetch Addresses
        const addrRes = await fetch('http://localhost:5000/api/user/addresses', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const addrData = await addrRes.json();

        if (authRes.ok) {
          setUser(prev => ({
            ...prev,
            fullName: authData.fullName || prev.fullName,
            email: authData.email || prev.email,
            phoneNumber: authData.phoneNumber || prev.phoneNumber,
            addresses: Array.isArray(addrData) ? addrData : [],
            orders: authData.orders || []
          }));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (activeTab === 'locations' || activeTab === 'profile') {
      fetchUserData();
    }
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.clear();
    // Using window.location.href forces a full state reset
    window.location.href = '/';
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePic: reader.result });
        localStorage.setItem('userPic', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

const handleDeleteAccount = async () => {
  const confirmDelete = window.confirm(
    "WARNING: This will permanently delete your account. Proceed?"
  );

  if (confirmDelete) {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:5000/api/auth/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Check if response is actually JSON before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (response.ok) {
          localStorage.clear();
          alert("Account successfully deleted.");
          window.location.href = '/';
        } else {
          alert(data.message || "Deletion failed");
        }
      } else {
        // This triggers if you get a 404 HTML page instead of JSON
        const textError = await response.text();
        console.error("Server returned non-JSON:", textError);
        alert("Server Error: Endpoint not found (404). Check backend routes.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Connection Refused. Is your backend running on port 5000?");
    }
  }
};

  return (
    <div className="profile-dashboard">
      <div className="dashboard-container">
        {/* LEFT NAVIGATION SIDEBAR */}
        <aside className="sidebar">
          <div className="user-profile-summary">
            <div className="avatar-container" onClick={() => fileInputRef.current.click()}>
              {user.profilePic ? (
                <img src={user.profilePic} alt="Profile" className="profile-img" />
              ) : (
                <div className="avatar-initials">{user.fullName.charAt(0)}</div>
              )}
              <div className="camera-overlay"><CameraAlt /></div>
              <input type="file" ref={fileInputRef} hidden onChange={handleImageUpload} accept="image/*" />
            </div>
            <h3>{user.fullName} <Verified className="v-icon" /></h3>
            <p>{user.email}</p>
          </div>

          <nav className="side-nav">
            <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
              <PersonOutline /> Account Details
            </button>
            <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
              <ShoppingBag /> My Orders
            </button>
            <button className={activeTab === 'locations' ? 'active' : ''} onClick={() => setActiveTab('locations')}>
              <Map /> Saved Locations
            </button>
            <hr />
            <button className="logout-btn-nav" onClick={handleLogout}><ExitToApp />Logout</button>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="main-content">
          {activeTab === 'profile' && (
            <div className="tab-view animate-fade">
              <header className="view-header">
                <h2>Profile Settings</h2>
                <p>Update your personal information</p>
              </header>

              <div className="settings-grid">
                <div className="setting-card">
                  <div className="card-top">
                    <label>Full Name</label>
                    <button onClick={() => setIsEditing({...isEditing, name: !isEditing.name})}>
                      {isEditing.name ? <Save className="save-icon"/> : 'Edit'}
                    </button>
                  </div>
                  {isEditing.name ? (
                    <input className="edit-input" value={user.fullName} onChange={(e) => setUser({...user, fullName: e.target.value})} />
                  ) : <p>{user.fullName}</p>}
                </div>

                <div className="setting-card">
                  <div className="card-top">
                    <label>Email Address</label>
                    <button onClick={() => setIsEditing({...isEditing, email: !isEditing.email})}>
                      {isEditing.email ? <Save className="save-icon"/> : 'Edit'}
                    </button>
                  </div>
                  {isEditing.email ? (
                    <input className="edit-input" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                  ) : <p>{user.email}</p>}
                </div>

                <div className="setting-card disabled">
                  <div className="card-top">
                    <label>Phone Number</label>
                    <span className="lock-label">Locked</span>
                  </div>
                  <p>{user.phoneNumber}</p>
                </div>
              </div>

              <div className="danger-zone-card">
                <h4>Danger Zone</h4>
                <p>Deleting your account will remove all your data permanently from our servers.</p>
                <button className="del-btn" onClick={handleDeleteAccount}>
                  <DeleteForever /> Delete My Account
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ORDERS */}
          {activeTab === 'orders' && (
            <div className="tab-view animate-fade">
              <header className="view-header">
                <h2>Your Orders</h2>
              </header>
              <div className="order-list">
                {user.orders.length > 0 ? (
                  user.orders.map(order => (
                    <div className="order-item" key={order.orderId}>
                      <div className="order-info">
                        <span className="order-id">#{order.orderId}</span>
                        <span className="order-date">{new Date(order.date).toLocaleDateString()}</span>
                      </div>
                      <div className="order-status-row">
                        <span className={`status ${order.status.replace(/\s/g, '').toLowerCase()}`}>{order.status}</span>
                        <span className="order-total">{order.total}</span>
                      </div>
                      <ChevronRight className="arrow-icon" />
                    </div>
                  ))
                ) : <p className="no-data">No orders found.</p>}
              </div>
            </div>
          )}

          {/* TAB 3: LOCATIONS */}
          {activeTab === 'locations' && (
            <div className="tab-view animate-fade">
              <header className="view-header">
                <h2>Saved Locations</h2>
              </header>
              <div className="location-list">
                {user.addresses.length > 0 ? (
                  user.addresses.map((addr, index) => (
                    <div className="location-card" key={index}>
                      <div className="loc-icon"><Map /></div>
                      <div className="loc-details">
                        <h5>{addr.type.toUpperCase()}</h5>
                        <p>{addr.text}</p>
                      </div>
                      <button className="edit-btn-text">Edit</button>
                    </div>
                  ))
                ) : <p className="no-data">No saved addresses yet.</p>}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;