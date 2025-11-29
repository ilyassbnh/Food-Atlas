import { useState } from 'react'

import './App.css'
// import ManageRecipes from './pages/Admin/ManageRecipes'
// import SideBar from './components/SideBar'
import Card from './components/Card'
import ManageRecipes from './pages/Admin/ManageRecipes'
import Add from './pages/Admin/AddRecipe'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/manage" element={<ManageRecipes/>} />
            <Route path='/add' element={<Add/>} />

         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
