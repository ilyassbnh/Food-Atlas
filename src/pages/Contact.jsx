import React, { useState, useRef } from 'react';
import './Contact.css';
import { toast } from 'sonner';
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // validation
  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!formData.email.includes('@')) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const Service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const Template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const Public = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors highlighted in red.");
      return;
    }

  emailjs.send(
     Service,   // NOT the public key
  Template,  // your template ID
  {
    name: formData.name,
    email: formData.email,
    message: formData.message
  },             // your form ref
  Public    // your public key
)
    .then(() => {
      toast.success("Message sent successfully!");
      console.log("Email sent!");

      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error("Failed to send message.");
    });
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className='form'>
        
        <div className="form-left">
          <h2 className='h2'>Contact Us</h2>

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

        <button className='button' type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
