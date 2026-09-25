import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore_food from './Components/Explore_food'
import Review from './Components/Review'; 

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Explore_food" element={<Explore_food/>}/>
        <Route path="/Review" element={<Review/>}/>
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
