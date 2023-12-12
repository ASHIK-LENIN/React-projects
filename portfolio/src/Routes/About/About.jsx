import React from 'react';
import './About.css'; // Import your CSS file

const About = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="your-image-url.jpg" alt="Your Image" />
      </div>
      <div className="content-container">
        <h1>Your Content Title</h1>
        <p>Your content goes here...</p>
      </div>
    </div>
  );
};

export default About;
