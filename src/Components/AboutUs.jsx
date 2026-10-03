import React from 'react'
import Navigation from './Navigation';
import Stats from './Stats';
import './AboutUss.css'
import asstimage from '../assets/asset-sect.png';
function AboutUs() {
  return (
   <>
   <Navigation/>
   <section className="hero-section2">
                   <div className="hero-left2">
                       <h1 >Explore Our<br/>Delicious Food.</h1>
                       <p>
                       At Restorent, we believe that food is more than just a meal — 
                        it’s a feeling, a memory, and a way to bring people closer.
                        Our journey is built on a simple idea: to serve authentic,
                        flavourful and high-quality dishes that make every moment special.
                       </p>   
                       </div>
                   <div className="hero-righ2" >
                       <img
                           src={asstimage}
                           alt="Healthy food"
                           className="hIMG"
                       />
                   </div>
               </section>
   </>
    
  )
}

export default AboutUs