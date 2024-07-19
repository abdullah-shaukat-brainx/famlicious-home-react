import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { contactUs } from "../../services/homeServices";
import { isValidEmailFormat } from "../../services/utilServices";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, comment } = formData;

    if (!name || !email || !phone || !comment) {
      setResponseMessage("Please fill out all fields.");
      return;
    }

    if (!isValidEmailFormat(email)) {
      setResponseMessage("Please enter a valid email address.");
      return;
    }

    try {
      if (!recaptchaVerified) {
        alert("Please verify the ReCAPTCHA first");
        return;
      }
      const response = await contactUs(formData);
      setResponseMessage(
        response?.message || "Your message has been sent successfully!"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        comment: "",
      });
    } catch (err) {
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="contact-body">
        <div className="contact-container">
          <h1>Contact Us</h1>
          {responseMessage && (
            <div className="response-message">{responseMessage}</div>
          )}
          <div className="company-info">
            <h2>Famlicious Inc.</h2>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              rows="5"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>
            <div className="captcha">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(value) => setRecaptchaVerified(!!value)}
                size="compact"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
