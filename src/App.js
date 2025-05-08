import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";  // Import the Home component
import Explore from "./Explore"; // Create Explore page later

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
