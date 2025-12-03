import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'  // <--- The fix: Added ./ before the name

export default function Navbar() {
  return (
   <nav className="navbar">
    <img  className="logo" src="../public/photo/logo.png" alt="logo" />
        {/* <div className="nav-logo">RecipeFood</div> */}
        <div className="nav-links">
          {/* We use Link to="" instead of a href="" for React */}
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
  )
}