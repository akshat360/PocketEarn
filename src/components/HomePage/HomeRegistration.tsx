import FormInput from "../HomeComponent/Form";

const HeroHome=() => {
    return (
      <section className="registration">
      <div className="registration__content">
        <h2 className="registration__title">Get early access today</h2>
        <p className="registration__text">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
        </p>
        <FormInput />
        {/* <include src="./components/form.html"></include> */}
      </div>
    </section>
    );
}

export default HeroHome;