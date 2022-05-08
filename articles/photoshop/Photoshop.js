import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { slides } from "../../data/slideshow/slides";
import Image from "next/image";
import ArticleHeading from "../../components/ArticleHeading";
import Button from "../../components/Button";

export default function Photoshop() {
  const { setSlideshowIsOpen, setSlideshowIndex } = useContext(AppContext);
  const openSlideshow = (i) => {
    i && setSlideshowIndex(i);
    setSlideshowIsOpen(true);
  };
  return (
    <article className="article article__photoshop" id="photoshop">
      <div className="container">
        <ArticleHeading lead="Photoshop" h2="Product Slides" />
        <p className="body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta
          quo vel excepturi consectetur esse ex quasi doloribus, eius eligendi
          assumenda asperiores! Temporibus quaerat excepturi nulla repellendus
          perferendis asperiores consectetur.
        </p>
        <div className="grid">
          {slides.map((slide, i) => (
            <div className={`grid__item ${slide.classes}`}>
              <Image
                src={`/img/photoshop/${slide.src}`}
                layout="fill"
                onClick={() => openSlideshow(i)}
              />
            </div>
          ))}
        </div>
        <div className="btns">
          <Button
            name="Open slideshow"
            classes="btn--large btn--primary"
            func={openSlideshow}
          />
        </div>
      </div>
    </article>
  );
}
