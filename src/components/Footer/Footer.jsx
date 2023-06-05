import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Groceries</span>
          <span>Electronics</span>
          <span>Apprels</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Pages</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis deserunt error numquam maxime dignissimos minus quibusdam deleniti impedit ipsam nihil totam, nostrum blanditiis hic rem ipsa quas doloribus molestias. Fugiat?</p>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis deserunt error numquam maxime dignissimos minus quibusdam deleniti impedit ipsam nihil totam, nostrum blanditiis hic rem ipsa quas doloribus molestias. Fugiat?</p>
        </div>
        
      </div>
      <div className="bottom">
        <div className="left">
         <span className="logo">ShopMe </span>
         <span className="copyright"> © Copyrights 2023 | All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/imgs/payment.png" alt="paymentImg" className="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer