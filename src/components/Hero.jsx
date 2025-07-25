import React from "react";
import'./Hero.css';

const Hero =() => {
  return(
    <section className="hero" data-aos= "fade-up">
<div className="hero-content">
  <h1>Welcome to Miss Ash</h1>
  <p>Discover the lastest trends in fashion</p>
  <a href ="/shop" className="shop-now-btn">Shop Now</a>
</div>
    </section>
  );
};
export default Hero;