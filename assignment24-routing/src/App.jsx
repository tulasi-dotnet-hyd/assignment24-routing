import React, { useState } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import './App.css'
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
