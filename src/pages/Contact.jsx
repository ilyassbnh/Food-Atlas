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

    if (validate()) {
      // Success!
      toast.success("Message sent successfully!");
      console.log("Form Data:", formData);
      
      // Clear form after success
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      // Failure
      toast.error("Please fix the errors highlighted in red.");
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className='form'>
        
        {/* LEFT SIDE: Name & Email */}
        <div className="form-left">
          <h2 className='h2'>Contact Us</h2>
          
          {/* Name Input */}
          <input 
            type="text" 
            name="name"
            className='input' 
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            style={{ border: errors.name ? '3px solid #7a0000' : 'none' }}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}

          {/* Email Input */}
          <input 
            type="text" 
            name="email" 
            className='input'
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            style={{ border: errors.email ? '3px solid #7a0000' : 'none' }}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        {/* RIGHT SIDE: Message */}
        <div className="form-right">
          <textarea 
            name="message" 
            className='textarea'
            placeholder="Type your message here..." 
            value={formData.message}
            onChange={handleChange}
            style={{ border: errors.message ? '3px solid #7a0000' : 'none' }}
          ></textarea>
          {errors.message && <span className="error-msg">{errors.message}</span>}
        </div>

        {/* BOTTOM: Submit Button */}
        <button className='button' type="submit">Send Message</button>
        
      </form>
    </div>
  );
};

export default Contact;