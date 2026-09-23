import './Nav.css';
import "../App.css";
import { useRef } from 'react'; 
import Stats from "./Stats";
import Navigation from "./Navigation";
import homeimg from '../assets/img1.png';
import panner from '../assets/panner.jpeg';
import masala from '../assets/masala.jpeg';
import noodels from '../assets/noodels.jpeg';
import samosa from '../assets/samosa.jpeg';
import idli from '../assets/idli.png';
import chole from '../assets/chole.png';
import chinees from '../assets/chinees.png';
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    const specialsRef = useRef(null);
    const scrollToSpecials = () => {
        specialsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <Navigation />

            <section className="hero-section">
                <div className="hero-left">
                    <h1>
                        Good food choices are
                        <br />
                        good investments.
                    </h1>

                    <p>
                        From traditional favourites to modern delights,
                        explore a wide variety of dishes made with fresh
                        ingredients and rich flavours.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="order-btn"
                            onClick={() => navigate('/Explore_food')}
                        >
                            Explore Food →
                        </button>

                        
                        <button 
                            className="order-outline-btn"
                            onClick={scrollToSpecials}
                        >
                            View Specials
                        </button>
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
                <span className="star-rating">
                    ⭐ Loved By Foodies

                    <span className="dot">•</span>

                    <span className="tagline-features">
                        Freshly prepared daily
                    </span>
                </span>
            </div>

            <div className="upper-line1">
                <span>What are you craving today?</span>
            </div>

            <div className="craving-items">
                <div className="image-tag">
                    <img
                        src={panner}
                        alt="North Indian"
                        className="panner"
                    />
                    <span>North Indian</span>
                </div>

                <div className="image-tag">
                    <img
                        src={masala}
                        alt="South Indian"
                        className="masala"
                    />
                    <span>South Indian</span>
                </div>

                <div className="image-tag">
                    <img
                        src={noodels}
                        alt="Chinese"
                        className="noodels"
                    />
                    <span>Chinese</span>
                </div>

                <div className="image-tag">
                    <img
                        src={samosa}
                        alt="Snacks"
                        className="samosa"
                    />
                    <span>Snacks</span>
                </div>
            </div>

            <div className="lower-line1">
                <span>Today's Specials</span>
            </div>

            <section id='spl-items' ref={specialsRef}>
                <div className="special-items">
                    <div className="image">
                        <img src={idli} alt="Idli Sambar" />

                        <div className="image-info">
                            <span className="name">Idli</span>

                            <span>
                                Soft, fluffy steamed rice cakes served with
                                flavorful sambar and fresh coconut chutney.
                            </span>

                            <span>⭐ 4.7</span>

                            <div className="price-btn-row">
                                <span>₹99</span>

                                <div className="order-btn1">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image">
                        <img src={chinees} alt="Veg Manchurian" />

                        <div className="image-info">
                            <span className="name">Veg Manchurian</span>

                            <span>
                                Crispy vegetable balls tossed in a flavorful,
                                spicy Indo-Chinese sauce with fresh vegetables.
                            </span>

                            <span>⭐ 4.6</span>

                            <div className="price-btn-row">
                                <span>₹169</span>

                                <div className="order-btn1">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image">
                        <img src={chole} alt="Chole Bhature" />

                        <div className="image-info">
                            <span className="name">Chole Bhature</span>

                            <span>
                                Fluffy, golden bhature served with spicy
                                chickpea curry, fresh onions, and tangy pickles.
                            </span>

                            <span>⭐ 4.8</span>

                            <div className="price-btn-row">
                                <span>₹199</span>

                                <div className="order-btn1">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
           
            <Stats />
        </>
    );
}
