import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // <--- The fix: Added ./ before the name

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src="../public/photo/remove.png" alt="logo" />
      </Link>
      {/* <div className="nav-logo">RecipeFood</div> */}
      <div className="nav-links">
        {/* We use Link to="" instead of a href="" for React */}

        <Link to="/recipes">Recipes</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin/add-recipe">Add</Link>
        <Link to="/manage">Manage</Link>
      </div>
    </nav>
  );
}
