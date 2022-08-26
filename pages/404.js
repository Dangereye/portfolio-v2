// Components
import Link from "next/link";

// Animation hook
import useAnimation from "../hooks/useAnimation";

export default function Custom404() {
  // Animation
  // useHook(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation("._404-animate", "#_404", {
    y: -300,
    delay: 1,
    stagger: 0.05,
    ease: "back.out(1.4)",
  });
  return (
    <article className="article article__404 " id="_404">
      <div className="container">
        <header className="article__header ">
          <div className="heading heading--lead _404-animate">404</div>
          <h1 className="heading heading--404 _404-animate">Awkward...</h1>
        </header>
        <p className="body-text _404-animate">
          We don't know what happened, or why? The page you requested isn't
          here. Sorry!
        </p>
        <div className="btns _404-animate">
          <Link href="/">
            <a className="btn btn--primary btn--large">Homepage</a>
          </Link>
        </div>
      </div>
    </article>
  );
}
