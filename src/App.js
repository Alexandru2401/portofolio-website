import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./main/Home"
import Navbar from "./main/Navbar";
import ContactMe from "./pages/ContactMe";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./main/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
            <Route path="/projectspage" element={<ProjectsPage />}></Route>
            <Route path="/aboutmepage" element={<AboutMePage />}></Route>
            <Route path="/contactme" element={<ContactMe />}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
