// File: src/pages/contact.js
// Author: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-01-30
import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: 'Akanksha',
    lastName: 'Gurram',
    contactNumber: '9876543211',
    email: 'Akankshagurram076@gmail.com',
    message: 'Thankyou!',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
