import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Components
import Navbar from './components/Navbar';
import MainLayout from './components/MainLayout';
import Test from './components/Test';

// Pages
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';

// Admin Pages
import Add from './pages/Admin/AddRecipe.jsx';
import ManageRecipes from './pages/Admin/ManageRecipes';

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
     
      <Toaster richColors position='top-right' />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/recipes/:id" element={<MainLayout><RecipeDetails /></MainLayout>} />
        <Route path="/recipes" element={<MainLayout><Recipes/></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/test" element={<MainLayout><Test /></MainLayout>} />

        {/* Admin Routes */}
        <Route path="/manage" element={<ManageRecipes />} />
        <Route path="/admin/add-recipe" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;