import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";
import jsonFile from '../data/app.json'; 

export default function Home() {
  // FIX 1: Change 'jsonFile.data' to 'jsonFile.categories'
  const countryList = jsonFile && jsonFile.categories ? jsonFile.categories : [];
  
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* --- MIDDLE: INTRODUCTION PARAGRAPH --- */}
      <div className="intro-container">
        <div className="paragraph-box">
          <p>
            Welcome to RecipeFood, your gateway to discovering international flavors...
          </p>
        </div>
      </div>

      {/* --- BOTTOM: CARDS FROM JSON --- */}
      <section className="cardContainer">
        {countryList.map((item, index) => (
          <div className="cardTest" key={index}>
            {/* FIX 2: Your JSON has an "image" link, let's show it! */}
            <img 
              src={item.image} 
              alt={item.name} 
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />

            {/* FIX 3: Your JSON uses lowercase "name", not "Name" */}
            <h1>{item.name}</h1>
            
            {/* Note: Your current JSON snippet doesn't have a 'description' field, 
                so this will be empty unless you add it to the JSON. */}
            <p>{item.description}</p> 
            
            <div className="cardButton">
              <button onClick={() => navigate('/recipes')}>
                Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* --- BUTTON: GO TO NEXT PAGE --- */}
      <div className="ccc" style={{ paddingBottom: '40px' }}>
        <button 
          className="main-cta-btn" 
          onClick={() => navigate('/recipes')}
        >
          Explore All Recipes
        </button>
      </div>

    </div>
  );
}