// import illustrationIntro from "../../assets/images/illustration-intro.png";
import illustrationIntro from "../../assets/images/herowallpaper.jpg";

const HomeHero = () =>{
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__img-container img-container">
          <img
            src={illustrationIntro}
            alt="Color illustration showing two people saving and sorting multiple files within a folder"
            title="All files in one single location"
            role="img"
            className="img"
          />
        </div>
        <div className="hero__text-container">
          <h2 className="hero__title">Get your pocket money monthly.</h2>
          <p className="hero__description">
            PocketEarn stores all your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends family, and
            co-workers.
          </p>
          <a href="#" role="link" className="hero__link btn">Get started</a>
        </div>
      </div>
    </section>

  );
}

export default HomeHero;