import { Link } from "react-router-dom";
import MainLogo from "../../../assets/images/main-logo.png";
import FacebookLogo from "../../../assets/images/fb.png";
import TwitterLogo from "../../../assets/images/tw.png";
import TelegramLogo from "../../../assets/images/tg.png";
import FooterScreen from "../../../assets/images/footer-screen.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <img className="logo" src={MainLogo} alt="Famlicious Logo" />
            <p>
              Our goal is to create a trusted platform for families to share
              their lives with each other.
            </p>

            <div className="social-icons">
              <a href="#">
                <img src={FacebookLogo} alt="Facebook" />
              </a>
              <a href="#">
                <img src={TwitterLogo} alt="Twitter" />
              </a>
              <a href="#">
                <img src={TelegramLogo} alt="Telegram" />
              </a>
            </div>
            <div className="contact-info">
              <p>
                <i className="fa fa-phone phone-icon"></i>415-713-2578
              </p>
              <div className="contact-separator-empty-div"></div>
              <p className="envolope-text">
                <Link className="email-link" to="mailto:help@famlicious.com">
                  <i className="fa fa-envelope envelope-icon"></i>
                  help@famlicious.com
                </Link>
              </p>
            </div>
          </div>

          <div className="footer-section footer-links">
            <div className="footer-quick-link">
              <p className="section-title">Quick</p>
              <br />
              <p>
                <a href="/about-us">About Us</a>
              </p>
              <p>
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
              <p>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </p>
              <p>
                <a href="/contact-us">Contact Us</a>
              </p>
            </div>
          </div>
          <div className="footer-section footer-links">
            <div className="footer-quick-link">
              <p className="section-title">Links</p>
              <br />
              <p>
                <a href="#">App Store</a>
              </p>
            </div>
          </div>
          <div className="footer-section">
            <img
              className="screenshot"
              src={FooterScreen}
              alt="Mobile Screenshot"
            />
          </div>
        </div>
        <div className="footer-bottom-line"></div>
        <div className="footer-bottom">
          <span>©2023 Famlicious.com All Rights Reserved</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
