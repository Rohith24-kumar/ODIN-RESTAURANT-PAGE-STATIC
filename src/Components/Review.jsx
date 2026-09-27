import { useState } from "react";
import Navigation from "./Navigation";
import ProfileIcon from "./ProfileIcon";
import Stats from "./Stats";
import topimage from "../assets/review-top.png";
import chickenFriedRice from "../assets/chickenFriedRice.jpeg";
import chickenPakora from "../assets/chickenPakora.png";
import chickenTikka from "../assets/chickenTikka.jpeg";
import chilliPaneer from "../assets/chilliPaneer.jpeg";
import chole from "../assets/chole.png";
import idli from "../assets/idli.png";
import manchurian from "../assets/manchurian.png";
import masala from "../assets/masala.jpeg";
import meduVada from "../assets/meduVada.jpeg";
import noodels from "../assets/noodels.jpeg";
import ravaDosa from "../assets/ravaDosa.jpeg";
import samosa from "../assets/samosa.jpeg";

import "./ReviewPage.css";

export default function Review() {
    const [foodReview, setFoodReview] = useState("All");
    const [searchText, setSearchText] = useState("");

    const ratingsData = [
        { stars: 5, percentage: 72 },
        { stars: 4, percentage: 18 },
        { stars: 3, percentage: 6 },
        { stars: 2, percentage: 3 },
        { stars: 1, percentage: 1 }
    ];

    const customerReviews = [
        {
            id: 1,
            name: "Ananya Sharma",
            date: "12 Aug 2025",
            rating: 5,
            text: "Absolutely loved the food! The chicken tikka was rich and flavorful. The ambiance is also very cozy. Will definitely visit again!",
            dishName: "Chicken Tikka",
            dishCategory: "Food",
            dishImage: chickenTikka,
            dishDescription: "Rich • Spicy • Delicious",
            avatarColor: "#ffeef2"
        },
        {
            id: 2,
            name: "Rohit Kumar",
            date: "8 Aug 2025",
            rating: 5,
            text: "The fried rice was just amazing! Full of flavour and perfectly cooked. Great portion size and value for money.",
            dishName: "Chicken Fried Rice",
            dishCategory: "Food",
            dishImage: chickenFriedRice,
            dishDescription: "Aromatic • Fresh • Tasty",
            avatarColor: "#e8f7f0"
        },
        {
            id: 3,
            name: "Sneha Patil",
            date: "5 Aug 2025",
            rating: 4.5,
            text: "The masala dish was crispy and perfectly made. Chutney was on point! A must-try for South Indian food lovers.",
            dishName: "Masala",
            dishCategory: "Food",
            dishImage: masala,
            dishDescription: "Crispy • Authentic • Flavourful",
            avatarColor: "#fff9e6"
        },
        {
            id: 4,
            name: "Vikram Malhotra",
            date: "28 Jul 2025",
            rating: 5,
            text: "The chilli paneer was an absolute masterpiece. The flavour was rich and perfectly balanced. Definitely worth trying!",
            dishName: "Chilli Paneer",
            dishCategory: "Food",
            dishImage: chilliPaneer,
            dishDescription: "Spicy • Fresh • Delicious",
            avatarColor: "#ffeef2"
        },
        {
            id: 5,
            name: "Rahul Verma",
            date: "20 Jul 2025",
            rating: 5,
            text: "The staff here is incredibly attentive! Our server guided us through the regional specials with great recommendations. Lightning-fast service.",
            dishName: "Chicken Pakora",
            dishCategory: "Service",
            dishImage: chickenPakora,
            dishDescription: "Crispy • Hot • Tasty",
            avatarColor: "#e8f7f0"
        },
        {
            id: 6,
            name: "Pooja Hegde",
            date: "15 Jul 2025",
            rating: 4.5,
            text: "We had a wonderful experience here. The hospitality was exceptional and the food was served fresh and hot.",
            dishName: "Samosa",
            dishCategory: "Service",
            dishImage: samosa,
            dishDescription: "Crispy • Fresh • Spicy",
            avatarColor: "#fff9e6"
        },
        {
            id: 7,
            name: "Karan Johar",
            date: "10 Jul 2025",
            rating: 4.5,
            text: "The soft warm lighting, classical music, and gorgeous traditional decor create an unmatched dining mood.",
            dishName: "Chole",
            dishCategory: "Ambience",
            dishImage: chole,
            dishDescription: "Rich • Spicy • Traditional",
            avatarColor: "#ffeef2"
        },
        {
            id: 8,
            name: "Meera Nair",
            date: "04 Jul 2025",
            rating: 5,
            text: "Super clean layout, beautifully set tables, and a very relaxing family atmosphere. The seating options are incredibly comfortable.",
            dishName: "Idli",
            dishCategory: "Ambience",
            dishImage: idli,
            dishDescription: "Soft • Fresh • Healthy",
            avatarColor: "#e8f7f0"
        },
        {
            id: 9,
            name: "Amit Patel",
            date: "29 Jun 2025",
            rating: 4,
            text: "The food is incredibly filling and reasonably priced. You get a great variety of authentic dishes for a good bargain.",
            dishName: "Medu Vada",
            dishCategory: "Value for Money",
            dishImage: meduVada,
            dishDescription: "Crispy • Fresh • Affordable",
            avatarColor: "#fff9e6"
        },
        {
            id: 10,
            name: "Divya Das",
            date: "22 Jun 2025",
            rating: 4.5,
            text: "Huge portions! The food is easily enough to satisfy two hungry adults. Totally worth every rupee.",
            dishName: "Rava Dosa",
            dishCategory: "Value for Money",
            dishImage: ravaDosa,
            dishDescription: "Crispy • Fresh • Filling",
            avatarColor: "#ffeef2"
        },
        {
            id: 11,
            name: "Suresh Raina",
            date: "18 Jun 2025",
            rating: 3.5,
            text: "The noodles were decent and the service was quick. The vegetables were fresh and the portion was good.",
            dishName: "Veg Noodles",
            dishCategory: "Food",
            dishImage: noodels,
            dishDescription: "Fresh • Spicy • Crunchy",
            avatarColor: "#e8f7f0"
        },
        {
            id: 12,
            name: "Neha Kakkar",
            date: "12 Jun 2025",
            rating: 5,
            text: "Outstanding value for money. The food was delicious and the portion size was perfect for a satisfying meal.",
            dishName: "Manchurian",
            dishCategory: "Value for Money",
            dishImage: manchurian,
            dishDescription: "Spicy • Fresh • Tasty",
            avatarColor: "#fff9e6"
        }
    ];

    const buttonRows = [
        ["All", "Food", "Service"],
        ["Ambience", "Value for Money"]
    ];

    const filteredReviews = customerReviews.filter((review) => {
        const matchesCategory =
            foodReview === "All" ||
            review.dishCategory === foodReview;

        const search = searchText.toLowerCase();

        const matchesSearch =
            review.name.toLowerCase().includes(search) ||
            review.dishName.toLowerCase().includes(search) ||
            review.text.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Navigation />

            <section className="hero-section">
                <div className="hero-left1">
                    <h1>
                        What Our Customers
                        <br />
                        Are Saying
                    </h1>

                    <p>
                        Real stories. Genuine feedback. Our customers'
                        reviews inspire us to serve better, cook better,
                        and bring more delicious moments to your table.
                    </p>
                </div>

                <div className="hero-right">
                    <img
                        src={topimage}
                        alt="Delicious food"
                        className="hIMG2"
                    />
                </div>
            </section>

            <div className="ratings">
                <span className="rate-badge">
                    <span className="star">⭐</span>
                    <span className="rateGot">4.6</span>
                    <span className="outOf">/5</span>
                </span>

                <span className="review-count">
                    Based on 1,250+ customer reviews
                </span>
            </div>

            <div className="breakdown-contianer">
                <h2 className="breakdown-title">
                    Overall Rating Breakdown
                </h2>

                <div className="breakdown-content-wrapper">
                    <div className="breakdown-rows">
                        {ratingsData.map((row) => (
                            <div
                                key={row.stars}
                                className="breakdown-row"
                            >
                                <div className="star-label">
                                    <span>{row.stars}</span>
                                    <span className="start-icon">⭐</span>
                                </div>

                                <div className="bar-track">
                                    <div
                                        className="bar-fill"
                                        style={{
                                            width: `${row.percentage}%`
                                        }}
                                    />
                                </div>

                                <div className="percentage-label">
                                    {row.percentage}%
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="breakdown-dashboard">
                        <div className="highlights-grid">
                            <div className="highlight-card">
                                <div className="icon-wrapper taste">
                                    🍴
                                </div>

                                <div className="card-text">
                                    <h3>Great Taste</h3>
                                    <strong>92%</strong>
                                    <p>
                                        of customers loved the food quality
                                    </p>
                                </div>
                            </div>

                            <div className="highlight-card">
                                <div className="icon-wrapper staff">
                                    ❤️
                                </div>

                                <div className="card-text">
                                    <h3>Friendly Staff</h3>
                                    <strong>89%</strong>
                                    <p>
                                        appreciated our service
                                    </p>
                                </div>
                            </div>

                            <div className="highlight-card">
                                <div className="icon-wrapper ingredients">
                                    🌱
                                </div>

                                <div className="card-text">
                                    <h3>Fresh Ingredients</h3>
                                    <strong>94%</strong>
                                    <p>
                                        found the ingredients fresh and healthy
                                    </p>
                                </div>
                            </div>

                            <div className="highlight-card">
                                <div className="icon-wrapper experience">
                                    ⭐
                                </div>

                                <div className="card-text">
                                    <h3>Overall Experience</h3>
                                    <strong>90%</strong>
                                    <p>
                                        would recommend us to others
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="filter-panel">
                            <div className="heading">
                                <span>Filter Review</span>
                            </div>

                            <div className="filter-pills">
                                {buttonRows.map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className="pill-row"
                                    >
                                        {row.map((category) => (
                                            <button
                                                key={category}
                                                className={`pill ${
                                                    foodReview === category
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setFoodReview(category)
                                                }
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="reviews-search-wrapper">
                                <span className="search-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle
                                            cx="11"
                                            cy="11"
                                            r="8"
                                        />
                                        <line
                                            x1="21"
                                            y1="21"
                                            x2="16.65"
                                            y2="16.65"
                                        />
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    placeholder="Search reviews..."
                                    className="search-input"
                                    value={searchText}
                                    onChange={(e) =>
                                        setSearchText(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Customer-say">
                <div className="customer-say-title">
                    <p>What Our Customers Say</p>
                </div>

                <div className="review-card-container">
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
                            <div className="review-card" key={review.id}>
                                <div className="review-user">
                                    <div className="icon-position-wrapper" >                               
                                        <ProfileIcon />
                                    </div>
                                    <div className="user-details">
                                        <h3>{review.name}</h3>
                                        <div className="review-rating">
                                            <span className="stars">
                                                {"⭐".repeat(
                                                    Math.floor(review.rating)
                                                )}
                                            </span>
                                            <span className="date">
                                                {review.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="review-text">
                                    {review.text}
                                </p>

                                <div className="dish-info">
                                    <img
                                        src={review.dishImage}
                                        alt={review.dishName}
                                        className="dish-image"
                                    />

                                    <div className="dish-details">
                                        <h4>{review.dishName}</h4>

                                        <p>
                                            {review.dishDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-reviews">
                            No reviews found.
                        </p>
                    )}
                </div>
            </div>
            <Stats/>
           
        </>
    );
}