import React from "react";
import Navigation from "./Navigation";
import "./AboutUss.css";
import restaurantImage from "../assets/restaurantImage.png";
import chefImage from "../assets/cook.png";
import veggies from "../assets/veggi.png";
import ambienceImage from "../assets/restaurant.png";
import heroFood from "../assets/asset-sect.png";
import aboutImage from "../assets/aboutUs.png";

function AboutUs() {
  return (
    <div className="about-page">

      <Navigation />

      
    <section className="about-hero">

        <div className="hero-content">

          <div className="hero-text">

            <h1>
              Food Brings
              <br />
              People Together
            </h1>

            <p>
              At Restorent, we believe that food is more than just a meal —
              it's a feeling, a memory, and a way to bring people closer.
              Our journey is built on a simple idea: to serve authentic,
              flavourful and high-quality dishes that make every moment special.
            </p>

            <img
              src={aboutImage}
              alt="Good Food Good Vibes Happy People"
              className="good-vibes-image"
            />

          </div>

          <div className="hero-image">
            <img
              src={heroFood}
              alt="Delicious Indian food"
            />
          </div>

        </div>

    </section>


      
      <section className="story-section">

        <div className="story-container">

          
          <div className="story-image-wrapper">
            <img
              src={ambienceImage}
              alt="Restorent interior"
              className="story-image"
            />
          </div>


        
          <div className="story-content">

            <h2>Our Story</h2>

            <p>
              Restorent was founded by a group of food lovers who wanted
              to create a space where tradition meets taste. We started
              small, with a passion for authentic recipes and fresh
              ingredients, and today we are proud to serve a wide variety
              of dishes from across different regions and cultures.
            </p>

            <button className="journey-button">
              Our Journey →
            </button>

          </div>


        
          <div className="special-section">

            <h2>What Makes Us Special</h2>

            <div className="special-grid">

              <div className="special-item">
                <div className="special-icon">🍃</div>

                <div>
                  <h3>Fresh Ingredients</h3>
                  <p>
                    We use only the freshest and highest quality
                    ingredients in every dish.
                  </p>
                </div>
              </div>


              <div className="special-item">
                <div className="special-icon">👨‍🍳</div>

                <div>
                  <h3>Authentic Recipes</h3>
                  <p>
                    Our chefs bring traditional recipes to life
                    with a modern touch.
                  </p>
                </div>
              </div>


              <div className="special-item">
                <div className="special-icon">♡</div>

                <div>
                  <h3>Great Ambience</h3>
                  <p>
                    Enjoy your meal in a warm, comfortable and
                    welcoming environment.
                  </p>
                </div>
              </div>


              <div className="special-item">
                <div className="special-icon">👥</div>

                <div>
                  <h3>Happy Customers</h3>
                  <p>
                    Your satisfaction is our biggest reward.
                    We're grateful for every review and visit.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      
      <section className="team-section">

        <div className="team-text">

          <h2>Our Team</h2>

          <p>
            Behind every great meal is a team that cares. Our chefs,
            staff and food lovers work together to give you the best
            dining experience.
          </p>

        </div>


        <div className="team-images">

          <div className="team-card">
            <img
              src={chefImage}
              alt="Chef preparing food"
            />
          </div>

          <div className="team-card">
            <img
              src={veggies}
              alt="Fresh ingredients"
            />
          </div>

          <div className="team-card">
            <img
              src={restaurantImage}
              alt="Restaurant ambience"
            />
          </div>

        </div>


        <div className="team-quote">

          <span>❯</span>

          <p>
            More than a
            <br />
            restaurant, it's a
            <br />
            <strong>feeling.</strong>
          </p>

        </div>

      </section>


      
      <section className="stats-section">

        <div className="stat-box">

          <h3>30+</h3>

          <p>
            AUTHENTIC DISHES
          </p>

        </div>


        <div className="stat-divider"></div>


        <div className="stat-box">

          <h3>15+</h3>

          <p>
            REGIONAL FLAVOURS
          </p>

        </div>


        <div className="stat-divider"></div>


        <div className="stat-box">

          <h3>10+</h3>

          <p>
            CHEF SPECIALS
          </p>

        </div>

      </section>

    </div>
  );
}

export default AboutUs;