import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./Recipes.css";

export default function Recipes() {
  const [recipe, setRecipe] = useState([]);
  const [filtre, setFiltre] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then(res => setRecipe(res.data))
      .catch(error => console.log("Erreur :", error));
  }, []);

  const recettesFiltrees =
    filtre === "" ? recipe : recipe.filter(item => item.country === filtre);

  return (
    <div className="recipes-page">
      <h1 className="text"> IT's not just a Food <br /> It's an Experience </h1>

      {/* Partie filtre + search */}
      <div className="fsearch">
        <input 
          className="search" 
          type="text" 
          placeholder="Search by name..." 
          onChange={(event) => setSearch(event.target.value)} 
        />

        <select 
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
          className="select-filtre"
        >
          <option value="">All</option>
          <option value="Maroc">Maroc</option>
          <option value="Italie">Italie</option>
          <option value="Thaïlande">Thaïlande</option>
          <option value="France">France</option>
          <option value="USA">USA</option>
          <option value="International">International</option>
          <option value="Inde">Inde</option>
          <option value="Mexique">Mexique</option>
          <option value="Japon">Japon</option>
        </select>
      </div>

      {/* Partie recettes */}
      {/* Partie recettes */}
<div className="recipes-container">

  {recettesFiltrees
      .filter(item =>
        search === "" 
          ? true 
          : item.title.toLowerCase().includes(search.toLowerCase())
      )
      .length > 0 ? (

      recettesFiltrees
        .filter(item =>
          search === "" 
            ? true 
            : item.title.toLowerCase().includes(search.toLowerCase())
        )
        .map(item => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            country={item.country}
          />
        ))

    ) : (
      <div className="empty">
        <p>No recipes found...</p>
      </div>
    )
  }

</div>

    </div>
  );
}