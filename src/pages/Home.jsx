import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "./Home.css";
import jsonFile from '../data/app.json'; 


export default function Home() {
  const countryList = jsonFile && jsonFile.data ? jsonFile.data : [];
  
  // 2. Initialize the navigation hook
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* --- MIDDLE: INTRODUCTION PARAGRAPH --- */}
      <div className="intro-container">
        <div className="paragraph-box">
          <p>
            Welcome to RecipeFood, your gateway to discovering international flavors from around the world. 
            This website was created to make cooking easier, fun, and accessible for everyone—whether 
            you’re a beginner or a food lover looking for new inspiration. Here, you’ll find simple, 
            step-by-step recipes from different cultures so you can explore global cuisine right from 
            your kitchen. Enjoy learning, cooking, and sharing delicious food from every corner of the world.
          </p>
        </div>
      </div>

      {/* --- BOTTOM: CARDS FROM JSON --- */}
      <section className="cardContainer">
        {countryList.map((item, index) => (
          <div className="cardTest" key={index}>
            <h1>{item.Name}</h1>
            <p>{item.description}</p>
            
            <div className="cardButton">
              {/* 3. Make the card buttons functional too */}
              <button onClick={() => navigate('/recipes')}>
                Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* --- NEW BUTTON: GO TO NEXT PAGE --- */}
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