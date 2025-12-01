import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./Recipes.css";

export default function Recipes() {
  const [recipe, setRecipe] = useState([]);
  const [filtre, setFiltre] = useState("");
  const [pay,setPay] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes")
      .then(res => setRecipe(res.data))
      .catch(error => console.log("Erreur :", error));
  }, []);


  // Filtrer 
  const recettesFiltrees =
    filtre === "" ? recipe : recipe.filter(item => item.country === filtre);

  return (
    <div className="recipes-page">
      <h1 className="text">
        IT's not just a Food <br /> It's an Experience
      </h1>
      <button onClick={() => setPay(true)}>Filter</button>
      {/* PARTIE FILTRE */}
      {pay && (
            <div className="filtre-buttons">
  <button
    className={filtre === "" ? "active" : ""}
    onClick={() => {
      setFiltre("");
      setPay(false);
    }}
  >
    All
  </button>
  <button
    className={filtre === "Maroc" ? "active" : ""}
    onClick={() => {
      setFiltre("Maroc");
      setPay(false);
    }}
  >
    Morocco
  </button>
  <button
    className={filtre === "Italie" ? "active" : ""}
    onClick={() => {
      setFiltre("Italie");
      setPay(false);
    }}
  >
    Italie
  </button>
  <button
    className={filtre === "Thaïlande" ? "active" : ""}
    onClick={() => {
      setFiltre("Thaïlande");
      setPay(false);
    }}
  >
    Thaïlande
  </button>
  <button
    className={filtre === "France" ? "active" : ""}
    onClick={() => {
      setFiltre("France");
      setPay(false);
    }}
  >
    France
  </button>
  <button
    className={filtre === "USA" ? "active" : ""}
    onClick={() => {
      setFiltre("USA");
      setPay(false);
    }}
  >
    USA
  </button>
  <button
    className={filtre === "International" ? "active" : ""}
    onClick={() => {
      setFiltre("International");
      setPay(false);
    }}
  >
    International
  </button>
  <button
    className={filtre === "Inde" ? "active" : ""}
    onClick={() => {
      setFiltre("Inde");
      setPay(false);
    }}
  >
    Inde
  </button>
  <button
    className={filtre === "Mexique" ? "active" : ""}
    onClick={() => {
      setFiltre("Mexique");
      setPay(false);
    }}
  >
    Mexique
  </button>
  <button
    className={filtre === "Japon" ? "active" : ""}
    onClick={() => {
      setFiltre("Japon");
      setPay(false);
    }}
  >
    Japon
  </button>
</div>

      )}
      

      {/*pour affiche le filtre */}
      <div className="filtrepage">
        {filtre === "" ? "Toutes les recettes" : filtre}
      </div>

      {/* Partie recettes */}
      <div className="Recette">
        <p >Recettes</p>
        <div className="recipes-container">
          {recettesFiltrees.length > 0 ? (
            recettesFiltrees.map(item => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                country={item.country}
              />
            ))
          ) : (
            <p className="empty">Aucune recette disponible...</p>
          )}
        </div>
      </div>
    </div>
  );
}
