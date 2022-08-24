// Context
import { AppContext } from "../../context/AppContext";

// React hooks
import { useState, useContext } from "react";

// Email JS
import emailjs from "emailjs-com";

// Components
import ArticleHeading from "../../components/ArticleHeading";
import InputGroup from "./InputGroup";
import TextAreaGroup from "./TextAreaGroup";
import Button from "../../components/Button";
import SocialIcons from "./SocialIcons";
import IconText from "../../components/IconText";

// Icons
import { MdEmail } from "react-icons/md";
import { VscPassFilled } from "react-icons/vsc";
import { MdOutlineError } from "react-icons/md";

// Data
import { Connect } from "../../data/Connect";

// Animation hook
import useAnimation from "../../hooks/useAnimation";

const defaultState = {
  name: { value: "", error_msg: "" },
  email: { value: "", error_msg: "" },
  message: { value: "", error_msg: "" },
  complete: false,
};

export default function Contact() {
  const { toast, setToast } = useContext(AppContext);
  const [state, setState] = useState(defaultState);

  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation(".contact-animate-form", "#contact", {
    x: 300,
    y: 0,
    stagger: 0.05,
    ease: "back.out(1.4)",
  });

  const {} = useAnimation(".contact-animate", "#contact", {
    x: -300,
    y: 0,
    stagger: 0.05,
    ease: "back.out(1.4)",
  });

  // Functions
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
            useToast(
              "Message sent successfully!",
              "success",
              <VscPassFilled />
            );
            resetValidation();
            setState(defaultState);
          },
          (error) => {
            useToast(
              "Message NOT sent. Please, try again.",
              "error",
              <MdOutlineError />
            );
            console.log(toast.status);
          }
        );
    }
  };

  const useToast = (message, status, icon) => {
    setToast({ message, status, icon });
    setTimeout(() => {
      setToast({ message: "", status: "unused", icon: "" });
    }, 6000);
  };

  return (
    <article className="article article__contact" id="contact">
      <div className="container">
        <header className="article__header">
          <ArticleHeading
            lead="Contact"
            h2="Let's talk!"
            anim="contact-animate"
          />
          <p className="body-text contact-animate">
            To discuss career & freelance opportunities, contact me directly or
            fill out the form and I'll get back to you promptly.
          </p>
          <IconText
            icon={<MdEmail />}
            text="contactpux@gmail.com"
            anim="contact-animate"
          />
          <SocialIcons list={Connect} anim="contact-animate" />
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <InputGroup
            type="text"
            name="name"
            value={state.name.value}
            handleChange={handleUpdateInput}
            handleBlur={checkName}
            error_msg={state.name.error_msg}
            anim="contact-animate-form"
          />
          <InputGroup
            type="email"
            name="email"
            value={state.email.value}
            handleChange={handleUpdateInput}
            handleBlur={checkEmail}
            error_msg={state.email.error_msg}
            anim="contact-animate-form"
          />
          <TextAreaGroup
            name="message"
            value={state.message.value}
            handleChange={handleUpdateInput}
            handleBlur={checkMessage}
            error_msg={state.message.error_msg}
            anim="contact-animate-form"
          />
          <div className="btns contact-animate-form">
            <Button classes="btn--primary btn--large" name="Send message" />
          </div>
        </form>
      </div>
    </article>
  );
}
