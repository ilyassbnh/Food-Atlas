<<<<<<< HEAD

=======
import { useState } from 'react'
import Add from '../pages/Admin/AddRecipe.jsx'
import { BrowserRouter ,Routes, Route , } from 'react-router-dom'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Contact from './pages/Contact';
import Test from './components/Test';
import Recipes from './pages/Recipes';
import ManageRecipes from './pages/Admin/ManageRecipes'
>>>>>>> f144da44ad7e8b5ae6038a3e2a7ff84a0ae24fe4

import './App.css';
import { Toaster } from 'sonner';

function App() {
  const cld = new Cloudinary({
    cloud: { cloudName: 'dtpjdj7m4' }
  });

  return (
<<<<<<< HEAD
    <>
       <BrowserRouter>
       <Navbar/>
         <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/test' element={<Test/>} />
                


         </Routes>
       
       </BrowserRouter>
    </>
  )
=======
     
    <BrowserRouter>
      <Navbar />
      <Toaster richColors position='top-right' />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="/manage" element={<ManageRecipes />} />
        <Route path="/admin/add-recipe" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> f144da44ad7e8b5ae6038a3e2a7ff84a0ae24fe4
}

export default App;