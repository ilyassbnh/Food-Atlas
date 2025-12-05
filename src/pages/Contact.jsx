import React, { useState } from 'react';
import './Contact.css';
import { toast } from 'sonner';

const Contact = () => {
  // 1. State to hold the input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. State to hold the error messages
  const [errors, setErrors] = useState({});

  // Handle typing in inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update value
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this specific field immediately when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // 3. Validation Logic
  const validate = () => {
    let newErrors = {};
    let isValid = true;

    // Check Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Check Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!formData.email.includes('@')) {
      newErrors.email = "Email must contain an '@' symbol.";
      isValid = false;
    }

    // Check Message
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

  return (
    <form className="form-contact" onSubmit={handleSubmit} style={{ width: "300px", margin: "40px auto" }}>
      
      <h2 className="h2-contact">Contact</h2>

      <input 
      className="input-contact"
        name="name"
        placeholder="Nom"
        value={form.name}
        onChange={handleChange}
        required
      /><br/>

      <input
      className="input-contact" 
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      /><br/>

      <textarea
      className="input-contact"
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea><br/>

      <button className="btn-contact" type="submit">Envoyer</button>
    </form>
  );
};

export default Contact;