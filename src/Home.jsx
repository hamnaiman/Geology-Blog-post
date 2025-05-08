import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // For future routing
import "./App.css"

const Home = () => {
  useEffect(() => {
    // Create stars dynamically for a better effect
    const starContainer = document.querySelector(".falling-stars");
    const totalStars = 100;

    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration for different speeds
      star.style.animationDelay = `${Math.random() * 5}s`; // Random delay
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="full-screen">
    <div className="falling-stars"></div>
  
    {/* Heading at the top */}
    <h1 className="heading">All About Geology</h1>
  
    {/* Centered description and button */}
    <div className="center-content">
      <p>
        Dive into the fascinating world of Geology! Learn about Earth's structure, rocks,
        and how they shape the environment we live in.
      </p>
      <Link to="/explore" className="explore-btn">
        Let's Explore More
      </Link>
    </div>
  </div>
  
  );
};

export default Home;
