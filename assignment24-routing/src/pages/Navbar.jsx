import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
    </div>
  )
}

export default Navbar