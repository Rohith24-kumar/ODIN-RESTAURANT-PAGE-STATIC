import Stats from "./Stats";
import Navigation from "./Navigation"
import topimage from "../assets/review-top.png"
import "./ReviewPage.css"

export default function Review() {
    const ratingsData = [
        { stars: 5, percentage: 72 },
        { stars: 4, percentage: 18 },
        { stars: 3, percentage: 6 },
        { stars: 2, percentage: 3 },
        { stars: 1, percentage: 1 },
    ];

    return (
        <>
            <Navigation />
            
            
            <section className="hero-section">
                <div className="hero-left1">
                    <h1>What Our Customers<br /> Are Saying</h1>
                    <p>
                        Real stories. Genuine feedback. Our customers reviews inspire us to serve better, cook better, and bring more delicious moments to your table.
                    </p>
                </div>
                <div className="hero-right">
                    <img
                        src={topimage}
                        alt="Healthy food"
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
                <span className="review-count">Based on 1,250+ customer reviews</span>
            </div>

            
            <div className="breakdown-contianer">
                <h2 className="breakdown-title">Overall Rating Breakdown</h2>
                
                <div className="breakdown-content-wrapper">
                    
                    
                    <div className="breakdown-rows">
                        {ratingsData.map((row) => (
                            <div key={row.stars} className="breakdown-row">
                                <div className="star-label">
                                    <span>{row.stars}</span>
                                    <span className="start-icon">⭐</span>
                                </div>
                                <div className="bar-track">
                                    <div className="bar-fill" style={{ width: `${row.percentage}%` }}></div>
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
                                <div className="icon-wrapper taste">🍴</div>
                                <div className="card-text">
                                    <h3>Great Taste</h3>
                                    <strong>92%</strong>
                                    <p>of customers loved the food quality</p>
                                </div>
                            </div>

                            <div className="highlight-card">
                                <div className="icon-wrapper staff">❤️</div>
                                <div className="card-text">
                                    <h3>Friendly Staff</h3>
                                    <strong>89%</strong>
                                    <p>appreciated our service</p>
                                </div>
                            </div>

                            <div className="highlight-card">
                                <div className="icon-wrapper ingredients">🌱</div>
                                <div className="card-text">
                                    <h3>Fresh Ingredients</h3>
                                    <strong>94%</strong>
                                    <p>found the ingredients fresh and healthy</p>
                                </div>
                            </div>

                            <div className="highlight-card">
                                <div className="icon-wrapper experience">⭐</div>
                                <div className="card-text">
                                    <h3>Overall Experience</h3>
                                    <strong>90%</strong>
                                    <p>would recommend us to others</p>
                                </div>
                            </div>
                        </div>

                        



                    </div>
                </div>
            </div>
        </>
    );
}
