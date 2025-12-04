import React from 'react'; // Optional in newer React, but fine to keep
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Components
import Navbar from './components/Navbar';
import Test from './components/Test';

// Pages
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import ManageRecipes from './pages/Admin/ManageRecipes';
import Add from './pages/Admin/AddRecipe';

// Styles
import './App.css';

// NOTE: I removed the Cloudinary imports (AdvancedImage, auto, etc.) 
// because you were not using them in the return() statement yet.
// If you need to configure Cloudinary globally, do it in a separate file or context.

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* This handles the pop-up notifications */}
      <Toaster richColors position='top-right' />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        
        {/* Admin Routes */}
        <Route path="/manage" element={<ManageRecipes />} />
        <Route path="/admin/add-recipe" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;