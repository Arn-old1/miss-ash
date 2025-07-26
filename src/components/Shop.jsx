import React,{useState} from "react";
import './Shop.css';
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";



const products = [
  {
    id: 1,
    name: 'Cocktail Dress',
    priceUGX: 330000,
    priceUSD: 92.10,
    category: 'Dresses',
    image: process.env.PUBLIC_URL + '/assets/images/cocktail-dress.webp',
  },
  {
    id: 2,
    name: 'Solid Wrap Dress',
    priceUGX: 210000,
    priceUSD: 58.61,
    category: 'Dresses',
    image: process.env.PUBLIC_URL + '/assets/images/solid-Wrap-dress.jpg',
  },
  {
    id: 3,
    name: 'Shirt Dress',
    priceUGX: 120000,
    priceUSD: 33.49,
    category: 'Dresses',
    image: process.env.PUBLIC_URL + '/assets/images/shirt-dress.jpg',
  },
  {
    id: 4,
    name: 'Bubble shorts',
    priceUGX: 130000,
    priceUSD: 36.28,
    category: 'shorts',
    image: process.env.PUBLIC_URL + '/assets/images/bubble-shorts.webp',
  },
  {
  id: 5,
  name: 'Linga Shorts',
  priceUGX: 120000,
  priceUSD: 33.49,
  category: 'shorts',
  image: process.env.PUBLIC_URL + '/assets/images/linga-shorts.webp',
  },
  {
    id: 6,
    name: 'V jumpsuit',
    priceUGX: 150000,
    priceUSD: 41.86,
    category: 'jumpsuit',
    image: process.env.PUBLIC_URL + '/assets/images/v-jumpsuit.webp',
    },
    {
      id: 7,
      name: 'Jude Jumpsuit',
      priceUGX: 200000,
      priceUSD: 55.82,
      category: 'jumpsuit',
      image: process.env.PUBLIC_URL + '/assets/images/jude-jumpsuit-.webp',
      },
      {
        id: 8,
        name: 'Floral Red beach set',
        priceUGX: 320000,
        priceUSD: 89.31,
        category: 'Set',
        image: process.env.PUBLIC_URL + '/assets/images/floral-red-beach-set.webp',
        },
        {
          id: 9,
          name: 'Blend Smocked Jumpsuit',
          priceUGX: 150000,
          priceUSD: 41.86,
          category: 'jumpsuit',
          image: process.env.PUBLIC_URL + '/assets/images/blend-smocked-jumpsuit.webp',
          },
          {
            id: 10,
            name: 'Cheetah Gown',
            priceUGX: 180000,
            priceUSD: 50.24,
            category: 'Dresses',
            image: process.env.PUBLIC_URL + '/assets/images/cheetah-gown-top.jpg',
            },
            {
              id: 11,
              name: 'Leeveless Jumpsuit',
              priceUGX: 190000,
              priceUSD: 53.03,
              category: 'jumpsuit',
              image: process.env.PUBLIC_URL + '/assets/images/lEEVLESS-jUMPSUIT.jpg',
              },
              {
                id: 12,
                name: 'Striped Tie waist jumpsuit',
                priceUGX: 170000,
                priceUSD: 47.45,
                category: 'jumpsuit',
                image: process.env.PUBLIC_URL + '/assets/images/striped-tie-waist-jumpsuit.webp',
                },
                {
                  id: 13,
                  name: 'Suki Linen Shorts',
                  priceUGX: 140000,
                  priceUSD: 39.07,
                  category: 'shorts',
                  image: process.env.PUBLIC_URL + '/assets/images/suki-linen-shorts.webp',
                  },
                  {
                    id: 14,
                    name: 'Hem Midi Dress',
                    priceUGX: 230000,
                    priceUSD: 64.19,
                    category: 'Dresses',
                    image: process.env.PUBLIC_URL + '/assets/images/hem-midi-dress.webp',
                    },
                    {
                      id: 15,
                      name: 'Haley Coord set',
                      priceUGX: 380000,
                      priceUSD: 106.05,
                      category: 'Set',
                      image: process.env.PUBLIC_URL + '/assets/images/coord.webp',
                      },
                      {
                        id: 16,
                        name: 'Lilley linen belted shorts',
                        priceUGX: 175000,
                        priceUSD: 48.84,
                        category: 'shorts',
                        image: process.env.PUBLIC_URL + '/assets/images/lilley-linen-belted-shorts-.jpg',
                        },
                        {
                          id: 17,
                          name: 'Orange Ombre Trouser',
                          priceUGX: 190000,
                          priceUSD: 53.03,
                          category: 'Trouser',
                          image: process.env.PUBLIC_URL + '/assets/images/orange.jpg',
                          },
                          {
                            id: 18,
                            name: 'Mini Floral Dress',
                            priceUGX: 110000,
                            priceUSD: 30.70,
                            category: 'Dresses',
                            image: process.env.PUBLIC_URL + '/assets/images/mini-floral-dress.webp',
                            },
                            {
                              id: 19,
                              name: 'Coord set',
                              priceUGX: 250000,
                              priceUSD: 69.77,
                              category: 'Set',
                              image: process.env.PUBLIC_URL + '/assets/images/co-ord-set.webp',
                              },
                              {
                                id: 20,
                                name: 'Maya high waisted short',
                                priceUGX: 100000,
                                priceUSD: 27.91,
                                category: 'shorts',
                                image: process.env.PUBLIC_URL + '/assets/images/maya-high-waisted-short.webp',
                                },
                                {
                                  id: 21,
                                  name: 'Orange Ombre Dress',
                                  priceUGX: 280000,
                                  priceUSD: 78.15,
                                  category: 'Dresses',
                                  image: process.env.PUBLIC_URL + '/assets/images/orange-ombre-dress.jpg',
                                  },
                                  {
                                    id: 22,
                                    name: 'Cardinal Red Trouser',
                                    priceUGX: 160000,
                                    priceUSD: 44.65,
                                    category: 'Trousers',
                                    image: process.env.PUBLIC_URL + '/assets/images/harlequin-cardinal-red-trouser.webp',
                                    },
                                    {
                                      id: 23,
                                      name: 'Scalet Straight Trouser',
                                      priceUGX: 180000,
                                      priceUSD: 50.24,
                                      category: 'Trousers',
                                      image: process.env.PUBLIC_URL + '/assets/images/scarlet-straight-trousers.webp',
                                      },
                                      {
                                        id: 24,
                                        name: 'BSB Trouser',
                                        priceUGX: 200000,
                                        priceUSD: 55.82,
                                        category: 'Trousers',
                                        image: process.env.PUBLIC_URL + '/assets/images/bsb-trouser.webp',
                                        },
                                        {
                                          id: 25,
                                          name: 'Black Stain High Waist',
                                          priceUGX: 200000,
                                          priceUSD: 55.82,
                                          category: 'Trousers',
                                          image: process.env.PUBLIC_URL + '/assets/images/black-stain-high-waist.avif',
                                          }


];

const Shop = ({cart,setCart}) => {
  const [currency, setCurrency] = useState('UGX');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleAddToCart = (item) => {
    setCart ([...cart, item]);
    //console.log('Item added,new cart:',newCart);
    //setCart(newCart);
  }; 
  
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  
  const addToCart = (product) =>{
    const cartItem ={
      ...product, priceUGX: product.priceUGX || (product.priceUSD * 3700)
    };
    //setCart([...cart,product]);
    setCart([...cart,cartItem]);
    console.log('Added to cart:', cartItem);
    console.log('New cart length:', cart.length+1);
    

  };
  

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);
    const cartCount =cart.length;

  return (
    <>
    <section className="shop">
 <div className="container">
      <h2>Shop Our Collection</h2>
     <div className="shop-controls">
      <div className="currency-selector">
        <div className="category-buttons">
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="UGX">UGX</option>
          <option value="USD">USD</option>
        </select>
      </div>


      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Dresses')}>Dresses</button>
        <button onClick={() => setSelectedCategory('Trousers')}>Trousers</button>
        <button onClick={() => setSelectedCategory('Set')}>Set</button>
        <button onClick={() => setSelectedCategory('jumpsuit')}>Jumpsuit</button>
        <button onClick={() => setSelectedCategory('shorts')}>Shorts</button>
        </div>
        </div>
        </div>
        
      
          <div className="product-list">
          {filteredProducts.map((product, index) => (
  <div className="product-card" key={product.id}>
    <div
      className="product-image"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <img src={product.image} alt={product.name} />
    </div>
    <div className="product-info">
      <h3>{product.name}</h3>
      <p className="price">
        {currency === 'UGX' ? `UGX ${product.priceUGX.toLocaleString()}` : product.priceUSD.toLocaleString()}
      </p>
      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
))}

            </div>
            </div>
        </section>
  </>
  );
}
export default Shop;
      
  
