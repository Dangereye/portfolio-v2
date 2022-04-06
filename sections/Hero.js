import Link from "next/link";

export default function Hero() {
  return (
    <section className="section section__hero">
      <div className="container">
        <div className="typography-and-cta">
          <h1 className="display-heading">
            <span>Front-End</span>
            <span>Developer</span>
          </h1>
          <p className="body-text">
            Not your average developer - get ready to transform your ideas into
            reality.
          </p>
          <div className="btns">
            <Link href="/#portfolio">
              <a className="btn btn--primary">Recent Projects</a>
            </Link>
          </div>
        </div>
        <div className="highlights">
          <div className="highlight">
            <div className="highlight__icon">
              10<span>+</span>
            </div>
            <div className="highlight__text">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
