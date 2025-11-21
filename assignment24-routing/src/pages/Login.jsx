import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [uname, setUname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (uname.trim() === "tulasi") {
      localStorage.setItem("isAuth", "true"); 
      setIsAuthenticated(true);
      alert("Login successful")
      navigate("/dashboard");
    } else {
      setError("Invalid username!");
    }
  };

  return (
    <div className="login">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        Enter Username:{" "}
        <input
          type="text"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br/>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
