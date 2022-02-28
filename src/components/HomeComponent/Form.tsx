import React from 'react'

export default function FormInput() {
  return (
    <form action="#" method="GET" className="form">
  <fieldset className="form__content">
    <div className="form__flex-container">
      <div className="form__child--1">
        <label 
        // for="email"
        ></label>
        <input type="email" id="email" name="email" placeholder="email@example.com" className="text-input form__text-input" />
      </div>
      <div className="form__child--2">
      <button className="btn form__btn" type="button" role="button">Get Started For Free</button>
      </div>
    </div>
  </fieldset>
</form>

  )
}
