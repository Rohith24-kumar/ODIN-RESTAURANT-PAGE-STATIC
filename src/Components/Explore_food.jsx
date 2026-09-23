import './ExploreFood.css';
import Stats from './Stats';
import Navigation from './Navigation';
import topimage from '../assets/top.jpeg';
export default function Explore_food() {
    return(
        <>
        <Navigation/>
             <section className="hero-section">
                <div className="hero-left">
                    <h1>Explore Our<br/>Delicious Food.</h1>
                    <p>
                   From traditional favourites to modern delights,
                   explore a wide variety of dishes made with fresh ingredients and rich flavours.
                    </p>   
                    </div>
                <div className="hero-right">
                    <img
                        src={topimage}
                        alt="Healthy food"
                        className="hIMG"
                    />
                </div>
            </section>
        <Stats/>
        </>
    );

}