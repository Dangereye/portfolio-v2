import { useState } from "react";
import ArticleHeading from "../../components/ArticleHeading";
import BgHighlight from "../../components/BgHighlight";
import Button from "../../components/Button";

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import InputGroup from "./InputGroup";
import { TextAreaGroup } from "./TextAreaGroup";

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

  const resetValidation = () => {
    setState({ ...state, isError: false, error_msg: "" });
    const input = document.querySelectorAll("input");
    input.forEach((input) => {
      input.classList.remove("success");
      input.classList.remove("error");
    });
    const textArea = document.querySelector("textarea");
    textArea.classList.remove("success");
    textArea.classList.remove("error");
  };

  const checkName = () => {
    if (state.name.value.length < 1) {
      setState((prev) => ({
        ...prev,
        name: { ...state.name, error_msg: "Please enter your name." },
      }));
      const target = document.querySelector("[name='name']");
      target.classList.add("error");
      return;
    }

    if (state.name.value.length < 3) {
      setState((prev) => ({
        ...prev,
        name: {
          ...state.name,
          error_msg: "Minimum of 3 characters.",
        },
      }));
      const target = document.querySelector("[name='name']");
      target.classList.add("error");
      return;
    }
    const target = document.querySelector("[name='name']");
    target.classList.remove("error");
    target.classList.add("success");
  };

  const checkEmail = () => {
    if (state.email.value.length < 1) {
      setState((prev) => ({
        ...prev,
        email: { ...state.email, error_msg: "Please enter your email." },
      }));
      const target = document.querySelector("[name='email']");
      target.classList.add("error");
      return;
    }

    if (!state.email.value.includes("@")) {
      setState((prev) => ({
        ...prev,
        email: { ...state.email, error_msg: "Please enter a vaild email." },
      }));
      const target = document.querySelector("[name='email']");
      target.classList.add("error");
      return;
    }
    const target = document.querySelector("[name='email']");
    target.classList.remove("error");
    target.classList.add("success");
  };

  const checkMessage = () => {
    if (state.message.value.length < 1) {
      setState((prev) => ({
        ...prev,
        message: { ...state.message, error_msg: "Please enter your message." },
      }));
      const target = document.querySelector("[name='message']");
      target.classList.add("error");
      return;
    }
    const target = document.querySelector("[name='message']");
    target.classList.remove("error");
    target.classList.add("success");
  };

  const validation = () => {
    resetValidation();
    checkName();
    checkEmail();
    checkMessage();
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

        <form className="form" onSubmit={handleSubmit}>
          <InputGroup
            type="text"
            name="name"
            value={state.name.value}
            handleChange={handleUpdateInput}
            handleBlur={checkName}
            error_msg={state.name.error_msg}
          />
          <InputGroup
            type="email"
            name="email"
            value={state.email.value}
            handleChange={handleUpdateInput}
            handleBlur={checkEmail}
            error_msg={state.email.error_msg}
          />
          <TextAreaGroup
            name="message"
            value={state.message.value}
            handleChange={handleUpdateInput}
            handleBlur={checkMessage}
            error_msg={state.message.error_msg}
          />

          <div className="btns">
            <Button classes="btn--primary btn--large" name="Send message" />
          </div>
        </form>
      </div>
    </article>
  );
}
