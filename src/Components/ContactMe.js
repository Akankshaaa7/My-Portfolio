import React, { useState } from 'react';
import '../App.css'; // Ensure global CSS is applied

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setIsSubmitted(true); // Set form as submitted
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="page-container">
      {!isSubmitted ? (
        <div className="form-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your message has been sent. We will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
