import HomeCard from "../HomeComponent/HomeCard";

import bgquote from "../../assets/images/bg-quotes.png";

const HomeTestinomials = () =>
{
  return (
    <section className="testimonials">
      <div className="testimonials__content">
        <div className="testimonials__img-container--relative img-container">
          <img
            src={bgquote}
            alt="A light green quote"
            title="See customers' testimonials"
            role="img"
            className="img"
          />
        </div>
        <div className="testimonials__flex-container">

          <HomeCard
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            imgSrc="profile-1.jpg"
            imgAlt="A customer named Satish Patel"
            imgTitle="Read our customer's testimonials"
            cardId="1"
            name="Satish Patel"
            job="Founder & CEO, Huddle"
          ></HomeCard>

          <HomeCard
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            imgSrc="profile-2.jpg"
            imgAlt="A customer named Bruce McKenzie"
            imgTitle="Read our customer's testimonials"
            cardId="2"
            name="Bruce McKenzie"
            job="Founder & CEO, Huddle"
          ></HomeCard>

          <HomeCard

            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
            imgSrc="profile-3.jpg"
            imgAlt="A customer named Iva Boyd"
            imgTitle="Read our customer's testimonials"
            cardId="3"
            name="Iva Boyd"
            job="Founder & CEO, Huddle"
          ></HomeCard>

        </div>
      </div>
    </section>
  );
}

export default HomeTestinomials;