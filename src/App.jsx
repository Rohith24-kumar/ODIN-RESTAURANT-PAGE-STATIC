import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore_food from './Components/Explore_food'
import Review from './Components/Review'; 
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Explore_food" element={<Explore_food/>}/>
        <Route path="/Review" element={<Review/>}/>
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
