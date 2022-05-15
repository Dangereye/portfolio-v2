import Image from "next/image";
import ArticleHeading from "../../components/ArticleHeading";
import BgHighlight from "../../components/BgHighlight";
import ListGroup from "./ListGroup";
import { environment } from "../../data/skills/environment";
import { designTools } from "../../data/skills/designTools";
import { frontEnd } from "../../data/skills/frontEnd";
import { backEnd } from "../../data/skills/backEnd";

export default function Skills() {
  return (
    <article className="article article__skills" id="skills">
      <div className="container">
        <BgHighlight pos="top-left" />
        <BgHighlight pos="bottom-right" />
        <div className="image">
          <div className="image__wrapper">
            <Image src="/img/skills/skills-article.png" layout="fill" />
          </div>
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
              <ListGroup
                heading={environment.heading}
                list={environment.list}
              />
              <ListGroup
                heading={designTools.heading}
                list={designTools.list}
              />
              <ListGroup heading={frontEnd.heading} list={frontEnd.list} />
              <ListGroup heading={backEnd.heading} list={backEnd.list} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
