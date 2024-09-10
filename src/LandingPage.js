import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const images = [
    '/images/img1.jpg', '/images/img3.png', '/images/img4.png', 
    '/images/img5.jpg', '/images/img2.jpg', '/images/img7.jpg',
    '/images/img8.jpg', '/images/img9.jpg'
];

const LandingPage = () => {

    useEffect(() => {
      document.title = 'Molten Zarak';
    }, []);
    const [activeImage, setActiveImage] = useState(null); // Track which image is clicked
  
    // Handler for clicking an image
    const handleImageClick = (index) => {
      setActiveImage(index); // Set the clicked image as active
    };
  
    // Handler for closing the popup (click outside)
    const handleClose = () => {
      setActiveImage(null); // Reset the active image
    };
    
    return (
      <div className="landing-page">
        {images.map((img, index) => (
          <div 
            className="rectangle" 
            key={index} 
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => handleImageClick(index)} // Click handler for image
          >
          </div>
        ))}
  
        {activeImage !== null && (
          <div className="popup-overlay" onClick={handleClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img src={images[activeImage]} alt={`image-${activeImage}`} className="full-image" />
            </div>
          </div>
        )}
      </div>
    );
  };

export default LandingPage;
