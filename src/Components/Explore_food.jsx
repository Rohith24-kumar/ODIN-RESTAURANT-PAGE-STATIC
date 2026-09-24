import './ExploreFood.css';
import Stats from './Stats';
import { useState } from 'react';
import Navigation from './Navigation';
import topimage from '../assets/top.png';
import chickenTikka from "../assets/chickenTikka.jpeg";
import paneer from "../assets/panner.jpeg";
import chole from "../assets/chole.png";
import idli from "../assets/idli.png";
import meduVada from "../assets/meduVada.jpeg";
import ravaDosa from "../assets/ravaDosa.jpeg";
import manchurian from "../assets/manchurian.png";
import chickenFriedRice from "../assets/chickenFriedRice.jpeg";
import chilliPaneer from "../assets/chilliPaneer.jpeg";
import samosa from "../assets/samosa.jpeg";
import fries from "../assets/fries.png";
import chickenPakora from "../assets/chickenPakora.png";
import lassi from "../assets/lassi.jpeg";
import coldCoffee from "../assets/coldCoffee.jpeg";
import limeSoda from "../assets/limeSoda.jpeg";
export default function Explore_food() {
    const[foodCategory,setfoodCategory]=useState('All');
    const [foodItems, setFoodItems] = useState([
  {
    name: "Paneer Butter Masala",
    description:
      "Soft paneer cubes in a rich, creamy tomato-butter gravy.",
    rating: 4.7,
    price: 199,
    category: "North Indian",
    image: paneer,
  },
  {
    name: "Chicken Tikka Masala",
    description:
      "Smoky grilled chicken pieces in a spiced, creamy curry.",
    rating: 4.8,
    price: 279,
    category: "North Indian",
    image: chickenTikka,
  },
  {
    name: "Chole Bhature",
    description:
      "Spicy chickpea curry served with fluffy, golden fried bread.",
    rating: 4.6,
    price: 149,
    category: "North Indian",
    image: chole,
  },
  {
    name: "Idli Sambar",
    description:
      "Soft steamed rice cakes served with flavorful sambar and coconut chutney.",
    rating: 4.6,
    price: 79,
    category: "South Indian",
    image: idli,
  },
  {
    name: "Medu Vada",
    description:
      "Crispy golden lentil doughnuts served with sambar and chutney.",
    rating: 4.5,
    price: 89,
    category: "South Indian",
    image: meduVada,
  },
  {
    name: "Onion Rava Dosa",
    description:
      "Thin, crispy semolina dosa topped with onions and served with chutneys.",
    rating: 4.7,
    price: 119,
    category: "South Indian",
    image: ravaDosa,
  },
  {
    name: "Veg Manchurian",
    description:
      "Crispy vegetable balls tossed in a tangy, spicy Indo-Chinese sauce.",
    rating: 4.5,
    price: 149,
    category: "Chinese",
    image: manchurian,
  },
  {
    name: "Chicken Fried Rice",
    description:
      "Wok-tossed rice with chicken, fresh vegetables, and aromatic seasonings.",
    rating: 4.6,
    price: 189,
    category: "Chinese",
    image: chickenFriedRice,
  },
  {
    name: "Chilli Paneer",
    description:
      "Paneer cubes tossed with bell peppers, onions, and spicy chilli sauce.",
    rating: 4.7,
    price: 179,
    category: "Chinese",
    image: chilliPaneer,
  },
  {
    name: "Punjabi Samosa",
    description:
      "Crispy pastry filled with spiced potatoes and peas, served with chutney.",
    rating: 4.6,
    price: 49,
    category: "Snacks",
    image: samosa,
  },
  {
    name: "French Fries",
    description:
      "Golden, crispy potato fries seasoned with salt and herbs.",
    rating: 4.4,
    price: 99,
    category: "Snacks",
    image: fries,
  },
  {
    name: "Chicken Pakora",
    description:
      "Juicy chicken pieces coated in spiced batter and fried until crispy.",
    rating: 4.7,
    price: 169,
    category: "Snacks",
    image: chickenPakora,
  },
  {
    name: "Mango Lassi",
    description:
      "A refreshing blend of ripe mangoes, creamy yogurt, and a touch of sweetness.",
    rating: 4.8,
    price: 89,
    category: "Beverages",
    image: lassi,
  },
  {
    name: "Cold Coffee",
    description:
      "Chilled coffee blended with milk, ice, and a hint of chocolate.",
    rating: 4.6,
    price: 99,
    category: "Beverages",
    image: coldCoffee,
  },
  {
    name: "Fresh Lime Soda",
    description:
      "A refreshing fizzy lime drink with fresh lemon juice and mint.",
    rating: 4.5,
    price: 59,
    category: "Beverages",
    image: limeSoda,
  },
]);
const filteredFoods  = foodCategory  === 'All' ? foodItems : foodItems.filter((food)=> food.category=== foodCategory);   
const categories = [
  "All",
  "North Indian",
  "South Indian",
  "Chinese",
  "Snacks",
  "Beverages",
];
    return(
        <>
        <Navigation/>
             <section className="hero-section">
                <div className="hero-left1">
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
            <div className="category-buttons">
                {categories.map((category)=>(
                    <button
                    key={category} className={foodCategory === category ? "active" : ""}
                    onClick={()=>setfoodCategory(category)}>{category}</button>
                ))}
            </div>
            <div className='food-container'>
                {filteredFoods.map((food,index)=>(
                    <div className='food-card' key={index}>
                        <img src={food.image} alt={food.name}/>
                        <div className='food-info'>
                            <h3>{food.name}</h3>
                            <p>{food.description}</p>
                            <p>⭐{food.rating}</p>
                            <h4>₹{food.price}</h4>
                            <button>Order Now</button>
                        </div>
                    </div>
                ))}
            </div>


        <Stats/>
            
                
           
   
        </>
    );

}