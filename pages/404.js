import ArticleHeading from "../components/ArticleHeading";
import Link from "next/link";

import useAnimation from "../hooks/useAnimation";

export default function Custom404() {
  const {} = useAnimation("._404-animate", "#_404", {
    y: -300,
    delay: 1,
    stagger: 0.05,
  });
  return (
    <article className="article article__404 " id="_404">
      <div className="container">
        <header className="article__header ">
          <div className="heading heading--lead">404</div>
          <h1 className="heading heading--404">Awkward...</h1>
        </header>
        <p className="body-text">
          We don't know what happened, or why? The page you requested isn't
          here. Sorry!
        </p>
        <div className="btns">
          <Link href="/">
            <a className="btn btn--primary btn--large">Homepage</a>
          </Link>
        </div>
      </div>
    </article>
  );
}
