import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./main/Home";
import Navbar from "./main/Navbar";
import Footer from "./main/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
