import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Correct path for the logo
import '../App.css'; // Ensure this file exists
import baliImage from '../assets/bali.jpeg';
import maldivesImage from '../assets/maldives.jpeg';
import dubaiImage from '../assets/dubai.jpeg';
import parisImage from '../assets/paris.jpeg';
import tokyoImage from '../assets/tokyo.jpeg';
import newyorkImage from '../assets/newyork.jpeg';
import romeImage from '../assets/rome.jpeg';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const destinations = [
    { id: 1, name: 'Bali, Indonesia', price: 1200.99, description: 'Explore tropical beaches, lush rice terraces, and vibrant culture.', rating: 4.5, image: baliImage },
    { id: 2, name: 'Maldives', price: 2500.99, description: 'Luxury resorts, pristine coral reefs, and crystal-clear waters await.', rating: 5, image: maldivesImage },
    { id: 3, name: 'Dubai, UAE', price: 1800.99, description: 'Experience modern luxury, desert safaris, and iconic skyscrapers.', rating: 4.7, image: dubaiImage },
    { id: 4, name: 'Paris, France', price: 1500.99, description: 'Romantic cityscapes, Eiffel Tower, and rich art history.', rating: 4.6, image: parisImage },
    { id: 5, name: 'Tokyo, Japan', price: 2200.99, description: 'Blend of ancient temples and futuristic technology.', rating: 4.8, image: tokyoImage },
    { id: 6, name: 'New York, USA', price: 2000.99, description: 'The city that never sleeps, with world-class attractions.', rating: 4.9, image: newyorkImage },
   ];

      return (
        <div className='App'>
          {/* Main Content with sections */}
          <main>
          <section id='home' className='home'>
          <h2 className='bg-text'>Tr@vel</h2>
          <p className='pg-text'>Mood fresh with traveling.</p>
          {/* Discount offer section */}
          <div className='discount-offer'>
            <div className='offer-text'>
              <h2>Special Discount Offer</h2>
              <p>Get <strong>20% Off</strong> on your first purchase</p>
              <p>Use code: <strong>welcome20</strong></p>
              <p>Offer valid until <strong>October 31, 2024</strong>.</p>
            </div>
          </div>
        </section>


        <section id='about' className='about'>
          <h3>Popular Travel Destinations</h3>
          <div className="product-list">
            {destinations.map((destination) => (
              <div key={destination.id} className="product">
                <h4>{destination.name}</h4>
                <img className='product-image' src={destination.image} alt={`${destination.name}`} /> 
                <p>{destination.description}</p>
                <p>Price: ${destination.price.toFixed(2)}</p>

                {/* Star Rating */}
                <div className="star-rating">
                  {'★'.repeat(Math.floor(destination.rating))} {/* Filled stars */}
                  {'☆'.repeat(5 - Math.floor(destination.rating))} {/* Empty stars */}
                  <span>({destination.rating})</span>
                </div>

                {/* Add to Cart button */}
                <button onClick={() => setCartItems([...cartItems, destination])}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id='contact' className='contact'>
  <h2>Welcome to Contact</h2>
  <div className="contact-details">
    <p><strong>Name:</strong> Pritee Shah</p>
    <p><strong>Phone:</strong> 9861840689</p>
    <p><strong>Website:</strong> <a href="https://yourwebsite.com">yourwebsite.com</a></p>
    <p><strong>Location:</strong> Imadol, Lalitpur</p>
  </div>
</section>

      </main>
    </div>
  );
};

export default Home;
