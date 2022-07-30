import Image from "next/image";
import Link from "next/link";
import ArticleHeading from "../../components/ArticleHeading";

export default function About() {
  return (
    <article className="article article__about" id="about">
      <div className="container">
        <div className="image">
          <Image
            src="/img/about/profile.jpg"
            width="500"
            height="500"
            alt="Craig Puxty"
          />
        </div>
        <div className="text">
          <header className="article__header">
            <ArticleHeading lead="" h2="About me" />
          </header>
          <p className="body-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <p className="body-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <p className="body-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <p className="body-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <div className="btns">
            <Link href="/#contact">
              <a className="btn btn--large btn--primary">Contact me</a>
            </Link>
            <a href="/" className="btn btn--large btn-secondary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
