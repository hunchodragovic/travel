import { useState } from "react";
import { addContactMessage } from "../config/firebase"; // Import Firestore function
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    await addContactMessage(formData); // Send data to Firestore

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <h1>!راسلنا الآن</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="الإسم الكامل"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="number"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email الإيمايل"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="مضمون رسالتك"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
};

export default ContactForm;
