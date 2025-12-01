import React from "react";
import "./Card.css";

export default function Card({ image, title, country }) {
  return (
    <div className='cardRecipe'>
      <img src={image} alt={title} className="cardRecipe-img" />
      <h3 className="cardRecipe-title">{title}</h3>
      <p className="cardRecipe-country">{country}</p>
    </div>
  );
}
