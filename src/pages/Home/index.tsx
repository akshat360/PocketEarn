import HomeHero  from "../../components/HomePage/HomeHero";
import HomeDemo  from "../../components/HomePage/HomeDemo";
import HomeFeature  from "../../components/HomePage/HomeFeature";
import HomeTestinomials  from "../../components/HomePage/HomeTestinomials";
import HomeRegistration  from "../../components/HomePage/HomeRegistration";

import "../../styles/scss/main.scss";
import Navbar from "../../components/HomeComponent/Navbar";
import Footer from "../../components/HomeComponent/Footer";

function HomePage() {

    return (
      <div>
        <Navbar />
        <HomeHero />
        <HomeFeature />
        <HomeDemo />
        <HomeTestinomials />
        <HomeRegistration />
        <Footer />
      </div>
  
    );
}

export default HomePage;