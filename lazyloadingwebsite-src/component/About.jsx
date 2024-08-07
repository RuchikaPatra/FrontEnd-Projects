import React from 'react'

function About() {
  return (
    <div className="about-container">
      <div className="header">
        <h1>About Us</h1>
        <p>Welcome to our café, where every delightful bite tells a story of craftsmanship and passion. </p>
        <p>From decadent cakes to artisanal pastries, we invite you to indulge in our handcrafted desserts that are as rich in flavor as they are in tradition.</p>
      </div>

      <div className="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Specialty Coffee</h3>
            <p>Enjoy our freshly brewed specialty coffees made from the finest beans.</p>
          </div>
          <div className="menu-item">
            <h3>Homemade Pastries</h3>
            <p>Indulge in our delicious homemade pastries, baked fresh every day.</p>
          </div>
          <div className="menu-item">
            <h3>Decadent Cakes</h3>
            <p>Satisfy your sweet cravings with our indulgent and decadent cakes.</p>
          </div>
          <div className="menu-item">
            <h3>Artisanal Pastries</h3>
            <p>Experience the artistry of our artisanal pastries crafted with love and care.</p>
          </div>
          <div className="menu-item">
            <h3>Healthy Smoothies</h3>
            <p>Stay refreshed with our selection of healthy and delicious smoothies, made with fresh fruits.</p>
          </div>
        </div>
      </div>

      <div className="ambiance">
        <h2>Our Ambiance</h2>
        <div className="ambiance-details">
          <div className="ambiance-item">
            <h3>Cozy Atmosphere</h3>
            <p>Relax and unwind in our cozy seating area, perfect for catching up with friends or enjoying a quiet moment.</p>
          </div>
          <div className="ambiance-item">
            <h3>Live Music</h3>
            <p>Experience the joy of live music performances by local artists every weekend.</p>
          </div>
          <div className="ambiance-item">
            <h3>Outdoor Patio</h3>
            <p>Enjoy the beautiful weather on our outdoor patio, the perfect spot for al fresco dining.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;