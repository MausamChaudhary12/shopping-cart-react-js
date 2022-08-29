import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
<div className="section">
  <div className='music'>
    <h1>Online  <span>Store</span> </h1>
    <p>Online Store.com Online Shopping in Nepal. <br /> Deals on top best online shopping site in Kathmandu. <br /> We help people shopping online from nearby store <br />to get quality product with amazing discount.</p>
   <div className="iconfooter">
   <i class="bi bi-instagram"></i>
   <i class="bi bi-facebook"></i>
   <i class="bi bi-youtube"></i>
   <i class="bi bi-whatsapp"></i>
   </div>
     
  </div>
  <div className='about'>
  <h1>About</h1>
  <ul>
    <li>Histry</li>
    <li>Our Team</li>
    <li>Brand Guidline</li>
    <li>Term & Condition</li>
    <li>Privacy</li>
  </ul>
  </div>
  <div className='service'>
  <h1>Service</h1>
  <ul>
    <li>How To Order</li>
    <li>Our Products</li>
    <li>Order Status</li>
    <li>Promo</li>
    <li>Payment Method</li>
  </ul>
  </div>
  <div className='Others'>
  <h1>Others</h1>
  <ul>
    <li>Cotact Us </li>
    <li>Help</li>
    <li>Privacy</li>
  </ul>
  </div>
</div>
    </div>
  );
};

export default Footer;
