import React from 'react';
import './Home.css';
import { FaCreditCard, FaCheckCircle, FaChartBar } from 'react-icons/fa';
import { BrowserRouter, Router, Route, Routes, Link, Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-container" style={{ 
      backgroundImage: `url('https://images.unsplash.com/photo-1681563103235-4b3b04d5c1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzU2OTR8MHwxfGFsbHw3NHx8fHx8fDJ8fDE2ODE4MjU1OTQ&ixlib=rb-4.0.3')`,
      backgroundSize: 'coverwrap',
      backgroundPosition: 'center',
      height: '200%'
    }}>
    <div className="home-container">
      <div className="hero-image">
        <h1>About Stock Images</h1>
        <p>Stock Images is an online marketplace for high-quality, royalty-free stock images.</p>
      </div>
      <div className="features">
        <div className="feature">
          <FaCreditCard />
          <h3>Credit-based system</h3>
          <p>Users can purchase credits, which can then be used to download images.</p>
        </div>
        <div className="feature">
          <FaCheckCircle />
          <h3>Unlimited use</h3>
          <p>All our images are licensed under the Standard Royalty-Free (SR-EL) license, which allows for unlimited use in commercial and personal projects.</p>
        </div>
        <div className="feature">
          <FaChartBar />
          <h3>Subscription plans</h3>
          <p>Users can also subscribe to our monthly or annual plans, which provide a set number of credits each month, along with additional benefits.</p>
        </div>
      </div>
      <div className="pricing">
        <h2>Pricing</h2>
        <p>Our platform works on a credit-based system. Each image has a credit value based on its size and license type.</p>
        <p>Users can also purchase an Extended License for an additional fee, which provides more flexibility in how the image can be used.</p>
        <Link to='/App1'>  <button style={{height: '30px', width : '100px', justifyContent: 'center'}}>Main</button> </Link>
      </div>
    </div>
    </div>
    
  );
};

export default Home;
