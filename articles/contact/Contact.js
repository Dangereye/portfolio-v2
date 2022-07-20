import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import emailjs from "emailjs-com";
import ArticleHeading from "../../components/ArticleHeading";
import BgHighlight from "../../components/BgHighlight";
import InputGroup from "./InputGroup";
import TextAreaGroup from "./TextAreaGroup";
import Button from "../../components/Button";

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const defaultState = {
  name: { value: "", error_msg: "" },
  email: { value: "", error_msg: "" },
  message: { value: "", error_msg: "" },
  complete: false,
};

export default function Contact() {
  const { setToast } = useContext(AppContext);
  const [state, setState] = useState(defaultState);

  const useToast = (message) => {
    setToast({ isActive: true, message });
    setTimeout(() => {
      setToast({ isActive: false, message: "" });
    }, 5000);
  };

  const handleUpdateInput = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: {
        value,
        error_msg: "",
      },
    });
  };

  const resetValidation = () => {
    setState((prev) => ({
      ...prev,
      complete: false,
      name: { ...prev.name, error_msg: "" },
      email: { ...prev.email, error_msg: "" },
      message: { ...prev.message, error_msg: "" },
    }));

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
          ...prev.name,
          error_msg: "3 characters min.",
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
        email: { ...prev.email, error_msg: "Please enter your email." },
      }));

      const target = document.querySelector("[name='email']");
      target.classList.add("error");
      return;
    }

    if (!state.email.value.includes("@")) {
      setState((prev) => ({
        ...prev,
        email: { ...prev.email, error_msg: "Please enter a valid email." },
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
        message: { ...prev.message, error_msg: "Please enter your message." },
      }));

      const target = document.querySelector("[name='message']");
      target.classList.add("error");
      return;
    }

    const target = document.querySelector("[name='message']");
    target.classList.remove("error");
    target.classList.add("success");
    setState((prev) => ({ ...prev, complete: true }));
  };
  const sendMail = (e) => {
    if (state.complete) {
      emailjs
        .sendForm(
          "gmail",
          "portfolio_template",
          e.target,
          `${process.env.NEXT_PUBLIC_EMAIL_JS_KEY}`
        )
        .then(
          (result) => {
            useToast("Message sent Successfully!");
            resetValidation();
            setState(defaultState);
          },
          (error) => {
            useToast("Oops! Something went wrong. Please, try again.");
          }
        );
    }
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
    sendMail(e);
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
