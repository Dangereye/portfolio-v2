import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { slides } from "../../data/slideshow/slides";
import BgHighlight from "../BgHighlight";
import Image from "next/image";
import Button from "../Button";

export default function Slideshow() {
  const {
    slideshowIsOpen,
    setSlideshowIsOpen,
    slideshowIndex,
    setSlideshowIndex,
  } = useContext(AppContext);

  const closeSlideshow = () => {
    setSlideshowIsOpen(false);
  };

  const nextSlide = (i) => {
    i < slides.length && setSlideshowIndex(i);
  };
  const previousSlide = (i) => {
    i >= 0 && setSlideshowIndex(i);
  };

  return (
    <div className="slideshow">
      <BgHighlight pos="top-left" />
      <BgHighlight pos="bottom-right" />
      <div className="info-bar">
        <div className="container">
          <div className="name">{slides[slideshowIndex].name}</div>
          <div className="results">
            Showing {slideshowIndex + 1} of {slides.length}
          </div>
          <Button
            name="X"
            classes="btn--slideshow close"
            func={closeSlideshow}
          />
        </div>
      </div>
      <div className="container">
        <div className="slides">
          <div
            className="slides__wrapper"
            style={{
              width: `${100 * slides.length}%`,
              left: `${0 - slideshowIndex * 100}%`,
            }}
          >
            {slides.map((slide, i) => (
              <div className="slides__slide">
                <Image
                  src={`/img/photoshop/${slide.src}`}
                  width="1920"
                  height="1080"
                  alt={slide.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="container">
          <Button
            name=">"
            classes="btn--slideshow next"
            func={() => nextSlide(slideshowIndex + 1)}
          />
          <Button
            name="<"
            classes="btn--slideshow previous"
            func={() => previousSlide(slideshowIndex - 1)}
          />
        </div>
      </div>
    </div>
  );
}
