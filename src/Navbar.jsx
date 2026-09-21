import { useState } from "react";
import './Nav.css';
import "./App.css";
import logoImg from './assets/resorent.png';
import homeimg from './assets/home-page.png';
export default function Navbar() {
    const [activeTab,setActiveTab]=useState('Home')
    return(
        <>
        <nav className="resto-nav">
            <div className="resto-logo">
                <img src={logoImg} className="resto-img" alt="Restaurent-Image"/>
            </div>
            <div className="nav-tabs">
                <button
                className={`tab-item ${activeTab==='Home' ?'active':'' }`}
                onClick={()=> setActiveTab('Home')}>Home</button>
                
                <button
                className={`tab-item ${activeTab==='Explore Food' ? 'active':''}`}
                onClick={()=> setActiveTab('Explore Food')}>Explore Food</button>
                
                <button
                className={`tab-item ${activeTab=== 'Review' ? 'active':''}`}
                onClick={()=>setActiveTab('Review')}>Review</button>
                
                <button
                className={`tab-item ${activeTab=== 'About Us' ? 'active':''}`}
                onClick={()=>setActiveTab('About Us')}>About Us</button>

                <button
                className={`tab-item ${activeTab=== 'FAQ' ? 'active' : ''}`}
                onClick={()=>setActiveTab('FAQ')}>FAQ</button>
            </div>
        </nav>
       <section className="hero-section">

    <div className="hero-left">
        <h1>Good food choices are<br/>good investments.</h1>

        <p>
        Enjoy delicious meals made with fresh ingredients, rich flavors,
        and a touch of love. Discover food that makes every bite worth it.
        </p>

        <div className="hero-buttons">
            <button className="order-btn">Order Now</button>
            <button className="order-outline-btn"> Explore Food →</button>
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

<div className="footer-stats">

    <div className="stat">
        <h3>30+</h3>
        <p>AUTHENTIC DISHES</p>
    </div>

    <div className="stat">
        <h3>15+</h3>
        <p>REGIONAL FLAVOURS</p>
    </div>

    <div className="stat">
        <h3>10+</h3>
        <p>CHEF SPECIALS</p>
    </div>

</div>
        </>
    );

}


