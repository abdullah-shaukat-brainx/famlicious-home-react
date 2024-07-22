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
          <strong>2.1 Your Responsibility for User Content.</strong> You are
          solely responsible for all your User Content. You represent and
          warrant that: (i) you own all your User Content or you have all rights
          that are necessary to grant us the license rights in your User Content
          under these Terms; (ii) you have obtained all consents and permissions
          from all Authorized Users and others, for your collection of the User
          Content contributed by them, and transmission and use thereof to
          Famlicious as contemplated herein; and (iii) neither your User
          Content, nor your use and provision of your User Content to be made
          available through the Services, nor any use of your User Content by
          Famlicious on or through the Services will infringe, misappropriate or
          violate a third party’s intellectual property rights, or rights of
          publicity or privacy, or result in the violation of any applicable law
          or regulation (including, any applicable local, national and
          international laws). You are responsible for all content you post,
          share, or submit on the App ("User Content"). This includes text,
          images, videos, and stories. This also includes consent from other
          people included in your content such as in pictures, videos or text.
          Our service allows the user to select who can see the content. You are
          responsible for this selection and management of your content. You can
          delete any content in the app or email us for help at{" "}
          <Link to="mailto:help@famlicious.com">help@famlicious.com</Link>.
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
          <strong>2.3</strong> We reserve the right to view and remove any User
          Content that violates these Terms or that we deem inappropriate.
        </p>
        <p>
          <strong>2.4</strong> We are not responsible for the loss of content
          while using the service. We use 3rd party services to store content.
          We are not responsible for the loss of content from those 3rd party
          services or from our service.
        </p>
        <p>
          <strong>2.5 Storage.</strong> Famlicious IS NOT RESPONSIBLE FOR
          STORING ANY USER CONTENT, AND WE RECOMMEND THAT YOU APPROPRIATELY
          BACK-UP ALL YOUR USER CONTENT. IN THE EVENT OF ANY LOSS OR CORRUPTION
          OF USER CONTENT, Famlicious WILL USE ITS COMMERCIALLY REASONABLE
          EFFORTS TO RESTORE THE LOST OR CORRUPTED USER CONTENT FROM THE LATEST
          BACKUP OF SUCH USER CONTENT MAINTAINED BY Famlicious IN THE NORMAL
          COURSE OF BUSINESS USING ITS STANDARD ARCHIVAL PROCEDURES. Famlicious
          WILL NOT BE RESPONSIBLE FOR ANY LOSS, DESTRUCTION, ALTERATION,
          UNAUTHORIZED DISCLOSURE OR CORRUPTION OF ANY USER CONTENT. Famlicious
          EFFORTS TO RESTORE LOST OR CORRUPTED USER CONTENT PURSUANT TO THIS
          SECTION WILL CONSTITUTE OUR SOLE LIABILITY AND YOUR SOLE AND EXCLUSIVE
          REMEDY IN THE EVENT OF ANY LOSS OR CORRUPTION OF USER CONTENT.
        </p>

        <h3>3. Parental Controls</h3>
        <p>
          <strong>3.1</strong> Parents can manage, edit, and delete his/her
          child’s account at any time. A child account is intended for use for
          users under 13 years of age. The parent is responsible for the child
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
          reason, at any time, without notice. You also may delete your account
          and/or any content in the app at any time.
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
        <p>
          <strong>a. Mandatory Arbitration of Disputes.</strong> We each agree
          that any dispute, claim or controversy arising out of or relating to
          these Terms or the breach, termination, enforcement, interpretation or
          validity thereof or the use of the Services or Content (collectively,
          “Disputes”) will be resolved solely by binding, individual arbitration
          and not in a class, representative or consolidated action or
          proceeding. You and Famlicious agree that the U.S. Federal Arbitration
          Act governs the interpretation and enforcement of these Terms, and
          that you and Famlicious are each waiving the right to a trial by jury
          or to participate in a class action. This arbitration provision shall
          survive termination of these Terms.
        </p>
        <p>
          <strong>b. Class Action Waiver.</strong> YOU AND Famlicious AGREE THAT
          EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL
          CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED
          CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and
          Famlicious agree otherwise, the arbitrator may not consolidate more
          than one person’s claims, and may not otherwise preside over any form
          of a representative or class proceeding.
        </p>

        <h3>11. Entire Agreement</h3>
        <p>
          <strong>11.1 </strong>These Terms constitute the entire agreement
          between you and us regarding your use of the App.
        </p>

        <h3>12. Changes to These Terms</h3>
        <p>
          <strong>12.1</strong> We reserve the right to update these Terms at
          any time. Changes will be effective when posted in the App. Your
          continued use of the App after changes are posted constitutes your
          acceptance of the updated Terms.
        </p>

        <h3>13. Contact Us</h3>
        <p>
          <strong>13.1</strong> If you have any questions or concerns about
          these Terms, please contact us at{" "}
          <Link to="mailto:help@famlicious.com">help@famlicious.com</Link>.
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
