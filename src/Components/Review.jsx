import Stats from "./Stats";
import Navigation from "./Navigation"
import topimage from "../assets/review-top.png"
import "./ReviewPage.css"
export default  function Review(){
    const ratingsData = [
    { stars: 5, percentage: 72 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 1 },
  ];
    return(
        <>
                <Navigation/>
                     <section className="hero-section">
                        <div className="hero-left1">
                            <h1>What Our Customers<br/> Are Saying</h1>
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
                        <div className="breakdown-rows">
                            {ratingsData.map((row)=>(
                                <div key={row.stars} className="breakdown-row">
                                    <div className="star-label">
                                        <span>{row.stars}</span>
                                        <span className="start-icon">⭐</span>
                                    </div>
                                    <div className="bar-track">
                                        <div className="bar-fill" style={{width:`${row.percentage}%`}}>
                                        </div>
                                    </div>
                                    <div className="percentage-label">
                                        {row.percentage}%
                                    </div>
                                </div>
                            ))};
                        </div>
                    </div>
        </>
    );
}