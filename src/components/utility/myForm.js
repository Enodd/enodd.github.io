import React from "react";
import "../../styles/contactform/contactform.scss";

const MyForm = () => {
  return (
    <form
      action="https://formsubmit.co/foxnacity@gmail.com"
      method="POST"
      enctype="application/x-www-form-urlencoded"
      className="contactform"
    >
      <label className="contactform__label" for="name">
        <p className="contactform__label__content">Name</p>
        <input
          type="text"
          name="name"
          id="name"
          className="contactform__input"
        />
      </label>
      <label className="contactform__label" for="email">
        <p className="contactform__label__content">Email</p>
        <input
          type="email"
          name="email"
          id="email"
          className="contactform__input"
        />
      </label>
      <label className="contactform__label" for="message">
        <p className="contactform__label__content">Your Message</p>
        <textarea
          id="message"
          name="message"
          className="contactform__textarea"
          rows={10}
        ></textarea>
      </label>
      <input
        type="submit"
        value="Send Message"
        className="contactform__submit"
      />
    </form>
  );
};
export default MyForm;
