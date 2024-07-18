import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Header />
      <div className="aboutus-body">
        <div className="aboutus-container">
          <h1>About Us</h1>
          <p>
            Welcome to Famlicious! We are dedicated to creating a
            family-friendly content sharing platform where families can share
            and connect. Our mission is to provide a safe and engaging space for
            families to stay connected, share stories, and create lasting
            memories.
          </p>
          <h2>Our Story</h2>
          <p>
            Famlicious was foundedby a group of passionate individuals who saw a
            need for a dedicated space for families. We believe in the power of
            storytelling and the importance of family connections. With this
            vision in mind, we created Famlicious, a platform that brings
            families closer together.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a safe, secure, and fun environment for
            families to connect, share, and create. We are committed to
            protecting your privacy and ensuring that your experience on
            Famlicious is both enjoyable and meaningful.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feedback, or suggestions, we would love
            to hear from you. Feel free to reach out to us at
            <Link to="mailto:help@famlicious.com"> help@famlicious.com</Link>.
          </p>
          <p>Thank you for being a part of the Famlicious community!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
