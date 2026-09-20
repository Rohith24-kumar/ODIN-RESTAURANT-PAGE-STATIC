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
        </>
    );

}


