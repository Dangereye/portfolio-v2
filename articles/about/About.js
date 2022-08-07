import Image from "next/image";
import Link from "next/link";
import ArticleHeading from "../../components/ArticleHeading";
import useScaleDown from "../../hooks/animation/useScaleDown";
import useFadeDown from "../../hooks/animation/useFadeDown";

export default function About() {
  const {} = useScaleDown(".about-animate", "#about");
  const {} = useFadeDown(".about-animate-text", "#about");
  return (
    <article className="article article__about" id="about">
      <div className="container">
        <div className="image about-animate">
          <Image
            src="/img/about/profile.jpg"
            width="500"
            height="500"
            alt="Craig Puxty"
          />
        </div>
        <div className="text">
          <header className="article__header about-animate-text">
            <ArticleHeading lead="" h2="About me" />
          </header>
          <p className="body-text about-animate-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <p className="body-text about-animate-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <p className="body-text about-animate-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <p className="body-text about-animate-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            harum. Cum eveniet earum quam recusandae natus reiciendis impedit
            ullam est velit temporibus expedita assumenda, ad itaque minima
            adipisci suscipit fugiat.
          </p>
          <div className="btns ">
            <Link href="/#contact">
              <a className="btn btn--large btn--primary about-animate-text">
                Contact me
              </a>
            </Link>
            <a
              href="/"
              className="btn btn--large btn--tertiary about-animate-text"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
