import { Link } from "react-router-dom";
import MainImage from "../../assets/images/hero-screen.png";
import AppLogo from "../../assets/images/small-logo.png";
import AppStore from "../../assets/images/app_store.png";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-image">
            <img src={MainImage} alt="App Preview" />
          </div>
          <div className="hero-text">
            <img src={AppLogo} alt="Famlicious Logo" />
            <h1>The app for sharing</h1>
            <h1>your family life</h1>
            <p>A new app for sharing the moments of your family life.</p>
            <p>
              Birthdays, Vacations. Weddings, Anniversary, Graduation, 1st day
              of school, making cookies, Christmas, 4th of July, Halloween,
              funny faces...
            </p>
            <p>Be You. Be More. Be Together.</p>
            <div className="app-links">
              <Link to="#">
                <img src={AppStore} alt="App Store" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
