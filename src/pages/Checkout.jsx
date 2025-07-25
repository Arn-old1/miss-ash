import React, { useState } from 'react';
import './Checkout.css';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart,setCart }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const total = cart.reduce((sum, item) => sum + item.priceUGX, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const navigate =useNavigate();
  const handlePlaceOrder = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert('Please fill all fields');
      return;
    }

    const orderDetails = cart.map(item =>
      `${item.name} - UGX ${item.priceUGX.toLocaleString()}`
    ).join('\n');
    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      message: orderDetails,
      total: `UGX ${total.toLocaleString()}`,
      title: "New Order",
      time: new Date().toLocaleDateString()
    };
    console.log("Sending email with:", templateParams);
      emailjs.send(
  'service_fx0cm8d',            
  'template_tf5tq7p',            
  templateParams,
  '4DBf2IGimofCTS_Op'             
)
    
    .then(() => {
      alert('Order placed successfully! We will contact you soon.');
      setForm({
        name: '',
        email: '',
        address: '',
        phone: ''
      });
      setCart([]);
      navigate('/thank-you');
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      alert('There was a problem placing your order. Please try again.');
    });
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-content">
        <form className="checkout-form">
          <h3>Customer Details</h3>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
          <textarea name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} />
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>UGX {item.priceUGX.toLocaleString()}</p>
              </div>
            </div>
          ))}
          <h4>Total: UGX {total.toLocaleString()}</h4>
          <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;