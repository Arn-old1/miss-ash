import React from "react";
import './ProductCard.css';
 const ProductCard = ({ product }) => {
  return(
    <div classNAME="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p> UGX {product.priceUGX.tolocaleString()} / ${product.priceUSD}</p>
    <button>Add to Cart</button>
    </div>
  );
 };

 export default ProductCard;