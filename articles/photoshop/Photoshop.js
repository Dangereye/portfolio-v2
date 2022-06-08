import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Image from "next/image";
import ArticleHeading from "../../components/ArticleHeading";
import Button from "../../components/Button";

export default function Photoshop() {
  const { setSlideshowIsOpen, setSlideshowIndex } = useContext(AppContext);

  const openSlideshow = () => {
    setSlideshowIndex(0);
    setSlideshowIsOpen(true);
  };

  return (
    <article className="article article__photoshop" id="photoshop">
      <div className="container">
        <header className="article__header">
          <ArticleHeading lead="Photoshop" h2="Product Slides" />
          <p className="body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta
            quo vel excepturi consectetur esse ex quasi doloribus, eius eligendi
            assumenda asperiores! Temporibus quaerat excepturi nulla repellendus
            perferendis asperiores consectetur.
          </p>
          <div className="btns">
            <Button
              name="View slideshow"
              classes="btn--large btn--primary"
              func={openSlideshow}
            />
          </div>
        </header>
        <div className="images">
          <div className="image">
            <div className="image__wrapper">
              <Image
                src="/img/photoshop/axq.jpg"
                layout="fill"
                alt="AXQ face cover"
              />
            </div>
          </div>
          <div className="image">
            <div className="image__wrapper">
              <Image
                src="/img/photoshop/fruit-of-the-loom.jpg"
                layout="fill"
                alt="AXQ face cover"
              />
            </div>
          </div>
          <div className="image">
            <div className="image__wrapper">
              <Image
                src="/img/photoshop/bandc.jpg"
                layout="fill"
                alt="AXQ face cover"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
