import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'  // <--- The fix: Added ./ before the name

export default function Navbar() {
  return (
   <nav className="navbar">
      <img  className="logo" src="../src/img/remove.png" alt="logo" />
        
        <div className="nav-links">
          {/* We use Link to="" instead of a href="" for React */}
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Add">Add</Link>
          <Link to="/Manage">Manage</Link>
          
        </div>
      </nav>
  )
}