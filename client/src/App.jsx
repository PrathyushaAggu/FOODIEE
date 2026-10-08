
// import { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Categories from './components/Categories';
// import HomeMakers from './components/HomeMakers';
// import Footer from './components/Footer';
// import Login from './components/Login'; 

// function App() {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

//   return (
//     <div className="App">

//       <Header onLoginClick={() => setIsLoginOpen(true)} />
      
//       <Hero />
//       <Categories />
//       <HomeMakers />
//       <Footer />
      
     
//       <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
//     </div>
//   );
// }

// export default App;











// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomeMakers from './pages/HomeMakers';
// // Import other components like Hero, Footer, etc.

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Define the Home/Default path */}
//         <Route path="/" element={
//           <>
//             {/* Your Landing Page Components (Hero, etc.) */}
//             <div style={{padding: '20px'}}>Welcome to Savour! Select Home Makers above.</div>
//           </>
//         } />
        
//         {/* Define the Home Makers path */}
//         <Route path="/home-makers" element={<HomeMakers />} />
        
//         {/* Add more routes here as you build Cloud Kitchen, etc. */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;







// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomeMakers from './pages/HomeMakers';
// import Hero from './components/Hero'; // Assuming you have a Hero component for the main page


// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* This is your landing page */}
//         <Route path="/" element={<Hero />} /> 

      
        
//         {/* This is your Home Makers page */}
//         <Route path="/home-makers" element={<HomeMakers />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;










// import React, { useState } from 'react'; // Add useState
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomeMakers from './pages/HomeMakers';
// import Hero from './components/Hero';
// import Login from './components/Login'; // Import Login

// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [initialIsLogin, setInitialIsLogin] = useState(true);

//   // Function to open modal specifically for Sign Up
//   const handleSignUpClick = () => {
//     setInitialIsLogin(false); // Set to Sign Up view
//     setShowLogin(true);
//   };

//   return (
//     <Router>
//       {/* Pass the new handler to Header */}
//       <Header onLoginClick={handleSignUpClick} />

//       {/* Render Login Modal based on state */}
//       <Login 
//         isOpen={showLogin} 
//         onClose={() => setShowLogin(false)} 
//         initialIsLogin={initialIsLogin} 
//       />

//       <Routes>
//         <Route path="/" element={<Hero />} /> 
//         <Route path="/home-makers" element={<HomeMakers />} />
//         <Route path="/" element={<HomeMakers />} />
//         <Route path="/kitchen/:id" element={<KitchenDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;











// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomeMakers from './pages/HomeMakers';
// import Checkout from './pages/Checkout';
// import KitchenDetails from './pages/KitchenDetails'; // FIXED: Must import this
// import Hero from './components/Hero';
// import Login from './components/Login';


// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [initialIsLogin, setInitialIsLogin] = useState(true);

//   const handleSignUpClick = () => {
//     setInitialIsLogin(false);
//     setShowLogin(true);
//   };

//   // Add this to handle Login vs Signup from the Header
//   const handleLoginClick = () => {
//     setInitialIsLogin(true);
//     setShowLogin(true);
//   };

//   return (
//     <Router>
//       {/* Professional Tip: Header usually needs both Login and Signup triggers */}
//       <Header onSignUpClick={handleSignUpClick} onLoginClick={handleLoginClick} />

//       <Login 
//         isOpen={showLogin} 
//         onClose={() => setShowLogin(false)} 
//         initialIsLogin={initialIsLogin} 
//       />

//       <Routes>
//         <Route path="/" element={<Hero />} /> 
//         <Route path="/home-makers" element={<HomeMakers />} />
//         {/* FIXED: Removed duplicate "/" route that was pointing to HomeMakers */}
//         <Route path="/kitchen/:id" element={<KitchenDetails />} />

//         <Route path="/checkout" element={<Checkout />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




















// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomeMakers from './pages/HomeMakers';
// import Checkout from './pages/Checkout';
// import KitchenDetails from './pages/KitchenDetails'; // FIXED: Must import this
// import Hero from './components/Hero';
// import Login from './components/Login';


// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [initialIsLogin, setInitialIsLogin] = useState(true);

//   const handleSignUpClick = () => {
//     setInitialIsLogin(false);
//     setShowLogin(true);
//   };

//   // Add this to handle Login vs Signup from the Header
//   const handleLoginClick = () => {
//     setInitialIsLogin(true);
//     setShowLogin(true);
//   };

//   return (
//     <Router>
//       {/* Professional Tip: Header usually needs both Login and Signup triggers */}
//       <Header onSignUpClick={handleSignUpClick} onLoginClick={handleLoginClick} />

//       <Login 
//         isOpen={showLogin} 
//         onClose={() => setShowLogin(false)} 
//         initialIsLogin={initialIsLogin} 
//       />

//       <Routes>
//         <Route path="/" element={<Hero />} /> 
//         <Route path="/home-makers" element={<HomeMakers />} />
//         {/* FIXED: Removed duplicate "/" route that was pointing to HomeMakers */}
//         <Route path="/kitchen/:id" element={<KitchenDetails />} />

//         <Route path="/checkout" element={<Checkout />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HomeMakers from './pages/HomeMakers';
// import Checkout from './pages/Checkout';
// import KitchenDetails from './pages/KitchenDetails'; 
// import Hero from './components/Hero';
// import Login from './components/Login';
// import Profile from './pages/Profile';


// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [initialIsLogin, setInitialIsLogin] = useState(true);

//   const handleSignUpClick = () => {
//     setInitialIsLogin(false);
//     setShowLogin(true);
//   };

//   const handleLoginClick = () => {
//     setInitialIsLogin(true);
//     setShowLogin(true);
//   };

  
//   return (
//     <Router>
//       <Header onSignUpClick={handleSignUpClick} onLoginClick={handleLoginClick} />

//       <Login 
//         isOpen={showLogin} 
//         onClose={() => setShowLogin(false)} 
//         initialIsLogin={initialIsLogin} 
//       />

//       <Routes>
//         <Route path="/" element={<Hero />} /> 
//         <Route path="/home-makers" element={<HomeMakers />} />
        

//         <Route path="/kitchen/:id" element={<KitchenDetails />} />
//         <Route path="/checkout" element={<Checkout />} />
       
// <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;















import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeMakers from './pages/HomeMakers';
import Checkout from './pages/Checkout';
import KitchenDetails from './pages/KitchenDetails'; 
import Hero from './components/Hero';
import Login from './components/Login';
import Profile from './pages/Profile';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [initialIsLogin, setInitialIsLogin] = useState(true);
  
  // 1. SEARCH STATE ADDED HERE
  const [searchText, setSearchText] = useState("");

  const handleSignUpClick = () => {
    setInitialIsLogin(false);
    setShowLogin(true);
  };

  const handleLoginClick = () => {
    setInitialIsLogin(true);
    setShowLogin(true);
  };

  return (
    <Router>
      {/* 2. PASS setSearchText to Header */}
      <Header 
        onSignUpClick={handleSignUpClick} 
        onLoginClick={handleLoginClick} 
        setSearchText={setSearchText} 
      />

      <Login 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        initialIsLogin={initialIsLogin} 
      />

      <Routes>
        <Route path="/" element={<Hero />} /> 
        
        {/* 3. PASS searchText to HomeMakers */}
        <Route path="/home-makers" element={<HomeMakers searchText={searchText} />} />

        <Route path="/kitchen/:id" element={<KitchenDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;