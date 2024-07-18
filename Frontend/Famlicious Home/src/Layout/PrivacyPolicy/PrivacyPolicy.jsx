import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="privacy-policy-container">
        <h1>Privacy Policy for Famlicious</h1>
        <p>
          <strong>Effective Date:</strong> 7/3/2024
        </p>
        <p>
          This Privacy Policy describes how Famlicious, Inc. (“we,” “us,” or
          “our”) collects, uses, and discloses information in connection with
          your use of our mobile application, Famlicious (the “App”).
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect several types of information from and about users of our
          App:
        </p>
        <ul>
          <li>
            <strong>Account Information:</strong> When you create an account, we
            collect certain account information, such as your name, email
            address, and a username or password. For parents creating accounts
            for children under 13, we may also collect your relationship to the
            child.
          </li>
          <li>
            <strong>User-Generated Content:</strong> The App allows users to
            post text, images, and stories (collectively, “User-Generated
            Content”). Parents creating accounts for children under 13 are
            responsible for obtaining their child's consent before posting any
            User-Generated Content that contains their image or likeness.
          </li>
          <li>
            <strong>Device Information:</strong> We collect certain information
            about the device you use to access the App, such as device type,
            operating system, and unique device identifier.
          </li>
          <li>
            <strong>Log Data:</strong> When you use the App, we automatically
            collect information about your activity, such as the pages you
            visit, the time and date of your visit, and the features you use.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and operate the App</li>
          <li>Create and manage your account</li>
          <li>
            Send you important information about the App, including updates,
            security alerts, and support messages
          </li>
          <li>Respond to your inquiries and requests</li>
          <li>Personalize your experience within the App</li>
          <li>Analyze how the App is used and improve our services</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We will not share your personal information with third parties without
          your consent, except in the following limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with third-party service providers who help us operate the App, such
            as cloud storage providers or data analytics providers. These
            service providers are obligated to use your information only to
            provide the services we have contracted for.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if we are required to do so by law, in response to a
            court order or subpoena, or to prevent fraud or other illegal
            activity.
          </li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>
          We understand the importance of protecting the privacy of children.
          Our App is designed for use by families, and we allow parents to
          create accounts for children under 13. We will never knowingly collect
          personal information from a child under 13 without verifiable parental
          consent. If we learn that we have collected personal information from
          a child under 13 without verifiable parental consent, we will take
          steps to delete the information.
        </p>
        <p>Parents should be aware that:</p>
        <ul>
          <li>
            They are responsible for monitoring their child's use of the App.
          </li>
          <li>
            The App allows users to communicate with each other, and parents
            should talk to their children about online safety.
          </li>
        </ul>

        <h2>Your Choices</h2>
        <p>You have several choices regarding your information:</p>
        <ul>
          <li>
            <strong>Access and Update Your Information:</strong> You can access
            and update your account information at any time through the App
            settings.
          </li>
          <li>
            <strong>Control Your User-Generated Content:</strong> You can delete
            your User-Generated Content at any time through the App.
          </li>
          <li>
            <strong>Delete Your Account:</strong> You can delete your account at
            any time in the app or by contacting us at
            <Link to="mailto:help@famlicious.com"> help@famlicious.com</Link>.
          </li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We take reasonable steps to protect the information you provide to us
          from loss, misuse, unauthorized access, disclosure, alteration, or
          destruction. However, no internet transmission or electronic storage
          is ever completely secure.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on the App.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <Link to="mailto:help@famlicious.com">help@famlicious.com</Link>.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
