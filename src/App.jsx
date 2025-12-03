

import './App.css'

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
