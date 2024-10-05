import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Correct path for Home component
import AdminPage from './AdminLogin'; // Correct path for AdminPage component
import Navbar from './components/Navbar'; // Import the Navbar component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is added once here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/admin" element={<AdminPage />} /> {/* Admin route */}
      </Routes>
    </Router>
  );
};

export default App;
