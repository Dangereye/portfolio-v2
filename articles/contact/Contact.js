import { useState } from "react";
import ArticleHeading from "../../components/ArticleHeading";
import BgHighlight from "../../components/BgHighlight";
import Button from "../../components/Button";

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import InputGroup from "./InputGroup";

const defaultState = {
  name: { value: "", error_msg: "" },
  email: { value: "", error_msg: "" },
  message: { value: "", error_msg: "" },
};

export default function Contact() {
  const [state, setState] = useState(defaultState);

  const handleUpdateInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: { value, error_msg: "" } });
  };

  const validation = () => {
    setState({ ...state, isError: false, error_msg: "" });
    const target = document.querySelectorAll("input");
    target.forEach((input) => {
      input.classList.remove("error");
    });

    if (state.name.value === "") {
      setState({
        ...state,
        name: { value: "", error_msg: "Please enter your name." },
      });
      const target = document.querySelector("[name='name']");
      target.classList.add("error");
      return;
    }
    if (state.email.value === "") {
      setState({
        ...state,
        email: { value: "", error_msg: "Please enter your email." },
      });
      const target = document.querySelector("[name='email']");
      target.classList.add("error");
      return;
    }
    console.log("Success!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <article className="article article__contact" id="contact">
      <BgHighlight pos="top-left" />
      <BgHighlight pos="bottom-right" />
      <div className="container">
        <header className="article__header">
          <ArticleHeading lead="Contact" h2="Let's talk!" />
          <p className="body-text">
            To discuss career & freelance opportunities, contact me directly or
            fill out the form and I'll get back to you promptly.
          </p>
          <div className="icon-text">
            <span>
              <MdEmail />
            </span>
            <span>craig_puxty@talktalk.net</span>
          </div>
          <div className="btns">
            <a href="/" className="social-icon github">
              <BsGithub />
            </a>
            <a href="/" className="social-icon linkedin">
              <BsLinkedin />
            </a>
          </div>
        </header>

        <form className="form">
          <InputGroup
            label="Name"
            type="text"
            name="name"
            value={state.name.value}
            func={handleUpdateInput}
            error={state.name.error_msg}
          />
          <InputGroup
            label="Email"
            type="email"
            name="email"
            value={state.email.value}
            func={handleUpdateInput}
            error={state.email.error_msg}
          />
          <div className="form__textarea-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" />
          </div>
          <div className="btns">
            <Button
              classes="btn--primary btn--large"
              name="Send message"
              func={handleSubmit}
            />
          </div>
        </form>
      </div>
    </article>
  );
}
