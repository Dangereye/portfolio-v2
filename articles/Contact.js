import ArticleHeading from "../components/ArticleHeading";
import BgHighlight from "../components/BgHighlight";
import Button from "../components/Button";

import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contact() {
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
          <div className="form__input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form__input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form__textarea-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" />
          </div>
          <div className="btns">
            <Button classes="btn--primary btn--large" name="Send message" />
          </div>
        </form>
      </div>
    </article>
  );
}
