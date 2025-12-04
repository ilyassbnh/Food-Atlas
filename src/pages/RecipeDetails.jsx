import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        // Ensure we are fetching data from the correct endpoint (e.g., /recipes/1)
        const response = await axios.get(`http://localhost:5000/recipes/${id}`);
        setRecipe(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setError("Impossible de charger la recette. Vérifiez que JSON Server est lancé sur le port 5000.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  // --- Loading and Error States ---
  if (loading) {
    return (
      <div className="container text-center mt-5" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="spinner-border text-primary mx-auto" role="status"></div>
        <p className="mt-3 text-muted">Mise en place des ingrédients...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center mt-5">
        <div className="alert alert-danger shadow-sm">
          <h4 className="alert-heading">Oups ! 😕</h4>
          <p>{error}</p>
          <hr />
          <Link to="/" className="btn btn-danger">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return <div className="container mt-5 text-center">Recette introuvable.</div>;
  }
  // -------------------------------

  return (
    <div className="container my-5 bg-white text-dark">
      {/* Back Button */}
      <Link to="/" className="btn btn-outline-secondary mb-4 shadow-sm">
        <i className="bi bi-arrow-left"></i> &larr; Retour aux recettes
      </Link>

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark mb-3">{recipe.title}</h1>
        <span className="badge bg-warning text-dark fs-6 px-4 py-2 rounded-pill shadow-sm">
          📍 {recipe.country}
        </span>
      </div>

      {/* Main Image */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="img-fluid w-100 rounded-4 shadow-lg"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="row text-center mb-5 g-3">
        <div className="col-6 col-md-3">
          <div className="p-3 border bg-white rounded-3 shadow-sm h-100">
            <small className="text-muted text-uppercase fw-bold">Préparation</small>
            <p className="fs-5 fw-bold text-primary mb-0">{recipe.prep_time}</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border bg-white rounded-3 shadow-sm h-100">
            <small className="text-muted text-uppercase fw-bold">Cuisson</small>
            <p className="fs-5 fw-bold text-primary mb-0">{recipe.cook_time}</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border bg-white rounded-3 shadow-sm h-100">
            <small className="text-muted text-uppercase fw-bold">Difficulté</small>
            <p className={`fs-5 fw-bold mb-0 ${recipe.difficulty === 'Easy' ? 'text-success' : recipe.difficulty === 'Medium' ? 'text-warning' : 'text-danger'}`}>
              {recipe.difficulty}
            </p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border bg-white rounded-3 shadow-sm h-100">
            <small className="text-muted text-uppercase fw-bold">Portions</small>
            <p className="fs-5 fw-bold text-dark mb-0">{recipe.servings} pers.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="mb-5">
            <h3 className="border-bottom pb-2 mb-3 text-primary">À propos de ce plat</h3>
            {recipe.description ? (
              <p className="lead text-secondary">{recipe.description}</p>
            ) : (
              <p className="lead text-muted">Aucune description disponible pour cette recette.</p>
            )}
          </div>

          {/* Instructions Section */}
          {recipe.instructions && recipe.instructions.length > 0 ? (
            <div className="mb-5">
              <h3 className="border-bottom pb-2 mb-4 text-primary">Étapes de préparation</h3>
              <div className="vstack gap-4">
                {recipe.instructions.map((instr, index) => (
                  <div key={index} className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '40px', height: '40px' }}>
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <p className="mb-0 fs-5 text-dark">{instr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Fallback for missing instructions */
            <div className="alert alert-info">
              <h4 className="alert-heading">Instructions manquantes</h4>
              <p>Les étapes de préparation ne sont pas encore disponibles pour cette recette.</p>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Ingredients (FIXED) */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 bg-light p-3 sticky-top" style={{ top: '20px' }}>
            <h3 className="card-title text-center text-dark mb-4">Ingrédients 🥗</h3>
            {recipe.ingredients && recipe.ingredients.length > 0 ? (
              <ul className="list-group list-group-flush">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item bg-light d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-3"></i>
                    {/* FIX: Ingredient is the string itself, not an object property */}
                    <span className="text-dark">{ingredient}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="alert alert-warning m-3">Liste des ingrédients non disponible.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;