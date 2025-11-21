import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuthenticated(false); // update state
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h2>Dashboard Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
