import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the ID from the URL (e.g., /recipes/1)
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true); // Start loading
        // Make sure this port matches your running JSON Server (5000)
        const response = await axios.get(`http://localhost:5000/recipes/${id}`);
        
        console.log("✅ Data received:", response.data);
        setRecipe(response.data);
        setError(null); // Clear any previous errors

      } catch (err) {
        console.error("❌ Error fetching recipe:", err);
        setError("Impossible de charger la recette. Vérifiez que le serveur est lancé.");
      } finally {
        setLoading(false); // STOP LOADING (Crucial Step!)
      }
    };

    fetchRecipe();
  }, [id]);

  // 1. Loading State
  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
        <p className="mt-2">Chargement de la recette...</p>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-danger">
          <h4>Oups ! Une erreur est survenue.</h4>
          <p>{error}</p>
          <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  // 3. Not Found State (Data is empty)
  if (!recipe) {
    return <div className="container mt-5 text-center">Recette introuvable.</div>;
  }

  // 4. Success State (Render the UI)
  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        &larr; Retour aux recettes
      </Link>

      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-dark">{recipe.title}</h1>
          <span className="badge bg-warning text-dark fs-6 px-3 py-2 rounded-pill">
            📍 {recipe.country}
          </span>
        </div>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-md-10">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="img-fluid w-100 rounded shadow-lg" 
            style={{ maxHeight: '500px', objectFit: 'cover' }} 
          />
        </div>
      </div>

      {/* Meta Data */}
      <div className="row text-center mb-5">
        <div className="col-md-3 col-6 mb-3">
          <div className="p-3 border rounded bg-light">
            <h6 className="text-muted text-uppercase mb-1">Préparation</h6>
            <span className="fw-bold">{recipe.prep_time}</span>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="p-3 border rounded bg-light">
            <h6 className="text-muted text-uppercase mb-1">Cuisson</h6>
            <span className="fw-bold">{recipe.cook_time}</span>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="p-3 border rounded bg-light">
            <h6 className="text-muted text-uppercase mb-1">Difficulté</h6>
            <span className={recipe.difficulty === 'Easy' ? 'text-success fw-bold' : recipe.difficulty === 'Medium' ? 'text-warning fw-bold' : 'text-danger fw-bold'}>
              {recipe.difficulty}
            </span>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="p-3 border rounded bg-light">
            <h6 className="text-muted text-uppercase mb-1">Portions</h6>
            <span className="fw-bold">{recipe.servings} pers.</span>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Description & Instructions */}
        <div className="col-lg-8">
          <div className="mb-5">
            <h3 className="border-bottom pb-2 mb-3 text-primary">À propos</h3>
            <p className="lead text-secondary">{recipe.description}</p>
          </div>

          <div className="mb-5">
            <h3 className="border-bottom pb-2 mb-4 text-primary">Préparation</h3>
            <div className="vstack gap-4">
              {recipe.instructions && recipe.instructions.map((instruction, index) => (
                <div key={index} className="d-flex">
                  <div className="flex-shrink-0">
                    <span 
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                      style={{ width: '40px', height: '40px' }}
                    >
                      {instruction.step || index + 1}
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-3 pt-2">
                    <p className="mb-0 fs-5">{instruction.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm bg-light sticky-top" style={{ top: '20px', zIndex: 1 }}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">🛒 Ingrédients</h4>
              <ul className="list-group list-group-flush bg-transparent">
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item bg-transparent px-0 py-2 border-bottom">
                    <input className="form-check-input me-2" type="checkbox" value="" id={`ing-${index}`} />
                    <label className="form-check-label stretched-link" htmlFor={`ing-${index}`}>
                      {ingredient}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;