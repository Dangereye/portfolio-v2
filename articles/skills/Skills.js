import Image from "next/image";
import ArticleHeading from "../../components/ArticleHeading";
import BgHighlight from "../../components/BgHighlight";

export default function Skills() {
  return (
    <article className="article article__skills" id="skills">
      <div className="container">
        <BgHighlight pos="top-left" />
        <BgHighlight pos="bottom-right" />
        <div className="image">
          <Image src="/img/skills-article.png" layout="fill" />
        </div>
        <div className="content">
          <ArticleHeading lead="Skills" h2="Knowledge & experience" />
          <p className="body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            tenetur maxime, tempore aspernatur aperiam ut fugit recusandae odit
            corrupti at excepturi doloribus, tempora non? Autem assumenda neque
            quisquam non id!
          </p>
          <div className="content">
            <div className="lists">
              <div className="list-group">
                <h3 className="heading heading--h3">Environment</h3>
                <ul className="list">
                  <li className="list__item">Windows</li>
                  <li className="list__item">VS Code</li>
                  <li className="list__item">NPM</li>
                  <li className="list__item">Github</li>
                </ul>
              </div>
              <div className="list-group">
                <h3 className="heading heading--h3">Design tools</h3>
                <ul className="list">
                  <li className="list__item">Photoshop</li>
                  <li className="list__item">Illustrator</li>
                  <li className="list__item">Experience design (Xd)</li>
                </ul>
              </div>
              <div className="list-group">
                <h3 className="heading heading--h3">Front-end</h3>
                <ul className="list">
                  <li className="list__item">HTML5</li>
                  <li className="list__item">CSS3</li>
                  <li className="list__item">SCSS (SASS)</li>
                  <li className="list__item">JavaScript</li>
                  <li className="list__item">JavaScript</li>
                  <li className="list__item">React JS</li>
                  <li className="list__item">Redux</li>
                  <li className="list__item">Next JS</li>
                </ul>
              </div>
              <div className="list-group">
                <h3 className="heading heading--h3">Back-end</h3>
                <ul className="list">
                  <li className="list__item">Node</li>
                  <li className="list__item">Express</li>
                  <li className="list__item">Mongoose</li>
                  <li className="list__item">MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
