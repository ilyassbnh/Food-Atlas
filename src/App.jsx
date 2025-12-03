import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import './pages/Contact'
import Contact from './pages/Contact'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Test from './components/Test'

function App() {

  return (
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
}

export default App
