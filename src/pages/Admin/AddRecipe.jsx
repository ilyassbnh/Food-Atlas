import React, { useState } from "react";
import "./add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Add() {
  const [input, setInput] = useState({
    name: "",
    category: "",
    image: "",
    ingredients: "",
    description: "",
    steps: "",
  });

  const [loadingImg, setLoadingImg] = useState(false);
  const navigate = useNavigate();

  // 🔹 Changer les inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  // 🔹 Upload Cloudinary avec axios
  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setLoadingImg(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "unsigned_preset");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dtpjdj7m4/image/upload",
        data
      );

      setInput(prev => ({
  ...prev,
  image: res.data.secure_url
}));console.log(prev)
    } catch (error) {
      console.error("Erreur upload image :", error);
    }

    setLoadingImg(false);
  }``

  // 🔹 POST vers JSON Server + vider formulaire
  async function handleSubmit(e) {
    e.preventDefault();

    const newRecette = {
      ...input,
      ingredients: input.ingredients.split(",").map(i => i.trim()), 
      steps: input.steps.split(",").map(s => s.trim()),
    };
      console.log(input)

    try {
      await axios.post("http://localhost:3000/recipes", newRecette);
      alert("Recette enregistrée !");
      
    } catch (error) {
      console.error("Erreur POST :", error);
    }
    console.log(newRecette);
    

    // vider formulaire
    setInput({
      name: "",
      category: "",
      image: "",
      ingredients: "",
      description: "",
      steps: "",
    });
  }
  function handleExit() {
  navigate(-1);
}

  return (
    <form className="formule" onSubmit={handleSubmit}>
      <h2 className="titre">Add a recipe</h2>
      <button type="button" onClick={handleExit} className="Btnexit"> x </button>
      
      <input
        type="text"
        name="name"
        placeholder="title"
        value={input.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Catégorie"
        value={input.category}
        onChange={handleChange}
      />

      {/* Upload Cloudinary */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {loadingImg && <p>Uploading...</p>}
      {input.image && <img src={input.image} width="150" alt="preview" />}

      <textarea
        name="description"
        placeholder="Description"
        value={input.description}
        onChange={handleChange}
      ></textarea>

      <textarea
        name="ingredients"
        placeholder="Ingrédients (séparés par virgules)"
        value={input.ingredients}
        onChange={handleChange}
      ></textarea>

      <textarea
        name="steps"
        placeholder="Étapes (séparées par virgules)"
        value={input.steps}
        onChange={handleChange}
      ></textarea>
      <div className="button-container">
        <button type="button"   className="ManageRecipe"onClick={() => navigate("/manage")}>Change</button>
        <button className="Btn" type="submit" onClick={() => navigate("/recipes")}>Add</button>
      </div>
    </form>
    
  );
}
