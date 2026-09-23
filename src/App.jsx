import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Explore_food from './Components/Explore_food'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Explore_food" element={<Explore_food/>}/>
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
