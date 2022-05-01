import Image from "next/image";
import ArticleHeading from "../../components/ArticleHeading";
import Button from "../../components/Button";

export default function Photoshop() {
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
          <div className="grid__item beechfield-beanie">
            <Image src="/img/photoshop/beechfield-beanie.jpg" layout="fill" />
          </div>
          <div className="grid__item axq">
            <Image src="/img/photoshop/axq.jpg" layout="fill" />
          </div>
          <div className="grid__item beechfield-morp">
            <Image src="/img/photoshop/beechfield-morp.jpg" layout="fill" />
          </div>
          <div className="grid__item yoko">
            <Image src="/img/photoshop/yoko.jpg" layout="fill" />
          </div>
          <div className="grid__item fruit-of-the-loom">
            <Image src="/img/photoshop/fruit-of-the-loom.jpg" layout="fill" />
          </div>
          <div className="grid__item portwest">
            <Image src="/img/photoshop/portwest.jpg" layout="fill" />
          </div>
          <div className="grid__item premier">
            <Image src="/img/photoshop/premier.jpg" layout="fill" />
          </div>
          <div className="grid__item bandc">
            <Image src="/img/photoshop/bandc.jpg" layout="fill" />
          </div>
          <div className="grid__item workguard">
            <Image src="/img/photoshop/workguard.jpg" layout="fill" />
          </div>
        </div>
        <div className="btns">
          <Button name="Open slideshow" classes="btn--large btn--primary" />
        </div>
      </div>
    </article>
  );
}
