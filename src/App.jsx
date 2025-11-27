import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Cloudinary Imports
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

// Page Imports
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails'; 

function App() {
  const cld = new Cloudinary({ 
    cloud: { cloudName: 'dtpjdj7m4' } 
  });


  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;