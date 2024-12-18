import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from './pages/HomePage/Homepage'
import HotelListing from './pages/HotelListing/HotelListing';
import FlightsListing from './pages/FlightsListing/FlightsListing';
import ActivitiesListing from './pages/ActivitiesListing/ActivitiesListing';
import HotelDetails from './pages/HotelListing/HotelDetails';
import HotelCheckout from './pages/HotelListing/HotelCheckout';
function App() {
  const [count, setCount] = useState(0)

  return (    
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/HotelListing" element={<HotelListing />} />
        <Route path="/FlightsListing" element={<FlightsListing />} />
        <Route path="/ActivitiesListing" element={<ActivitiesListing />} />
        <Route path="/HotelDetails" element={<HotelDetails />} />
        <Route path="/HotelCheckout" element={<HotelCheckout />} />
      </Routes>
    </Router>
  );
}

export default App
