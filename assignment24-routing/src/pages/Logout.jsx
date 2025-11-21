import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setIsAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  }, [navigate, setIsAuthenticated]);

  return <div>Logging out...</div>;
}

export default Logout;
