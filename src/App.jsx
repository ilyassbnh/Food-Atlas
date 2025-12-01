import { useState } from 'react'

import './App.css'
// import ManageRecipes from './pages/Admin/ManageRecipes'
// import SideBar from './components/SideBar'
import Card from './components/Card'
import ManageRecipes from './pages/Admin/ManageRecipes'
import Add from './pages/Admin/AddRecipe'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Toaster } from 'sonner';
function App() {

  return (
    <>
       <Toaster richColors position='top-right' />
       <ManageRecipes/>
    </>
  )
}

export default App
