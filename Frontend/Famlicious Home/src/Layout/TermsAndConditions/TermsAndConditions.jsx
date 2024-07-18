import "./TermsAndConditions.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="terms-container">
        <h1>Welcome to Famlicious!</h1>
        <h2>Terms and Conditions</h2>
        <p>
          These Terms and Conditions ("Terms") govern your access and use of the
          Famlicious mobile application ("App") developed and operated by
          Famlicious, Inc ("we," "us," or "our"). By downloading, installing, or
          using the App, you agree to be bound by these Terms. If you disagree
          with any of these Terms, you may not use the App.
        </p>

        <h3>1. Eligibility</h3>
        <p>
          <strong>1.1</strong> You must be at least 13 years old to create an
          account for yourself on the App.
        </p>
        <p>
          <strong>1.2</strong> For users under 13:
          <ul>
            <li>
              A parent or legal guardian ("Parent") must create the child's
              account and agree to these Terms on the child's behalf.
            </li>
            <li>
              The Parent is responsible for supervising the child's use of the
              App.
            </li>
          </ul>
        </p>

        <h3>2. Content</h3>
        <p>
          <strong>2.1</strong> You are responsible for all content you post,
          share, or submit on the App ("User Content"). This includes text,
          images, videos, and stories.
        </p>
        <p>
          <strong>2.2</strong> User Content must be appropriate for a family
          audience. This means it cannot be:
          <ul>
            <li>Profane, vulgar, or offensive.</li>
            <li>Threatening, harassing, or bullying.</li>
            <li>Hateful, discriminatory, or racist.</li>
            <li>Sexually suggestive or explicit.</li>
            <li>Promoting violence or illegal activity.</li>
            <li>Violating the privacy rights of others.</li>
          </ul>
        </p>
        <p>
          <strong>2.3</strong> We reserve the right to remove any User Content
          that violates these Terms or that we deem inappropriate.
        </p>

        <h3>3. Parental Controls</h3>
        <p>
          <strong>3.1</strong> Parents can manage, edit, and delete his/her
          child’s account at any time. The parent is responsible for the child
          account and content the child sees.
        </p>

        <h3>4. Privacy</h3>
        <p>
          <strong>4.1</strong> We take your privacy seriously. Please see our
          separate Privacy Policy for details on how we collect, use, and
          disclose your information.
        </p>

        <h3>5. Third-Party Services</h3>
        <p>
          <strong>5.1</strong> The App may integrate with third-party services.
          Your use of these services is subject to their own terms and
          conditions.
        </p>

        <h3>6. Disclaimer</h3>
        <p>
          <strong>6.1</strong> The App is provided "as is" and without warranty
          of any kind, express or implied. We disclaim all warranties,
          including, but not limited to, warranties of merchantability, fitness
          for a particular purpose, and non-infringement.
        </p>

        <h3>7. Limitation of Liability</h3>
        <p>
          <strong>7.1</strong> We will not be liable for any damages arising out
          of your use of the App, including, but not limited to, direct,
          indirect, incidental, consequential, or punitive damages.
        </p>

        <h3>8. Termination</h3>
        <p>
          <strong>8.1</strong> We may terminate your access to the App for any
          reason, at any time, without notice.
        </p>

        <h3>9. Governing Law</h3>
        <p>
          <strong>9.1</strong> These Terms will be governed by and construed in
          accordance with the laws of the State of Oregon.
        </p>

        <h3>10. Dispute Resolution</h3>
        <p>
          <strong>10.1</strong> If you experience a problem with the App, please
          contact us at{" "}
          <Link to="mailto:help@famlicious.com">help@famlicious.com</Link>. We
          reserve the right to resolve any problem for 45 days from when we
          respond to any inquiry. Any dispute arising out of or relating to
          these Terms will be resolved by binding arbitration in accordance with
          the rules of the American Arbitration Association.
        </p>

        <h3>11. Entire Agreement</h3>
        <p>
          <strong>11.1</strong> These Terms constitute the entire agreement
          between you and us regarding your use of the App.
        </p>

        <h3>12. Changes to These Terms</h3>
        <p>
          <strong>12.1</strong> We may update these Terms from time to time. We
          will notify you of any changes by posting the new Terms on the App.
          Your continued use of the App after the posting of the revised Terms
          means that you accept and agree to the changes.
        </p>

        <h3>13. Contact Us</h3>
        <p>
          <strong>13.1</strong> If you have any questions about these Terms,
          please contact us at
          <Link to="mailto:help@famlicious.com"> help@famlicious.com</Link>.
        </p>

        <p>
          <strong>Thank you for using Famlicious!</strong>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default TermsAndConditions;
