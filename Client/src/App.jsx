import React from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
const App = () => {
  return (
    <>
        <BrowserRouter>
       <Routes>

        <Route path='/' element={<Signup/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
       </Routes>
       </BrowserRouter> 
       
    </>
  )
}

export default App