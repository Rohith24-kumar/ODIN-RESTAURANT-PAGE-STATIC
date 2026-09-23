
import './Nav.css';
import "../App.css";
import Stats from "./Stats";
import Navigation from "./Navigation";
import homeimg from '../assets/img1.png';
import panner from '../assets/panner.jpeg';
import masala from '../assets/masala.jpeg';
import noodels from '../assets/noodels.jpeg';
import samosa from '../assets/samosa.jpeg';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
     const navigate=useNavigate();
    
    return(
        <>
        <Navigation/>
       <section className="hero-section">
            <div className="hero-left">
            <h1>Good food choices are<br/>good investments.</h1>
             <p>
                From traditional favourites to modern delights,
                explore a wide variety of dishes made with fresh
                ingredients and rich flavours.   
            </p>
            <div className="hero-buttons">
                <button className="order-btn" onClick={()=> navigate('/Explore_food')}>Explore Food →</button>
                <button className="order-outline-btn">View Specials </button>
            </div>
            </div>
            <div className="hero-right">
            <img
                src={homeimg}
                alt="Healthy food"
                className="hIMG"
            />
             </div>
        </section>
       <div className="tagline-badge">
            <span className="star-rating">⭐ Loved By Foodies  
                <span className='dot'>•</span>
                <span className="tagline-features">Freshly prepared daily</span> 
            </span>
        </div>
        <div className='upper-line1'>
            <span>What are you craving today?</span>
        </div>
        <div className='craving-items'>
            <div className='image-tag'>
                    <img src={panner} alt="North Indian"  className='panner'/>
                    <span>North Indian</span>
            </div>
             <div className='image-tag'>
                <img src={masala} alt="South  Indian" className='masala' />
                <span>South  Indian</span>
            </div>
             <div className='image-tag'>
                <img src={noodels} alt="Chinese" className='noodels' />
                <span>Chinese</span>

            </div>
             <div className='image-tag'>
                <img src={samosa} alt="Snacks" className='samosa' />
                <span>Snacks</span>
            </div>
        </div>
        </>
    );

}


