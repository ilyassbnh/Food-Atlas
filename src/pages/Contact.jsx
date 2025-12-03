import { useState } from "react";
 import '../pages/Contact.css'
 import "../components/Navbar"
 export default function Contact() {


  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Merci ${form.name}, message envoyé !`);
    setForm({ name: "", email: "", message: "" });
  
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "40px auto" }}>
      
      <h2>Contact</h2>

      <input 
        name="name"
        placeholder="Nom"
        value={form.name}
        onChange={handleChange}
        required
      /><br/>

      <input 
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      /><br/>

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea><br/>

      <button type="submit">Envoyer</button>
    </form>
  );
}
