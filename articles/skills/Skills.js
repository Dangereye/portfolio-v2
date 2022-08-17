import ArticleHeading from "../../components/ArticleHeading";
import ListGroup from "../../components/ListGroup";
import { environment } from "../../data/skills/environment";
import { designTools } from "../../data/skills/designTools";
import { frontEnd } from "../../data/skills/frontEnd";
import { backEnd } from "../../data/skills/backEnd";
import useScaleDown from "../../hooks/animation/useScaleDown";
import useFadeDown from "../../hooks/animation/useFadeDown";

export default function Skills() {
  const {} = useScaleDown(".skills-animate-bg", "#skills");
  const {} = useFadeDown(".skills-animate", "#skills", 0.02);
  return (
    <article className="article article__skills" id="skills">
      <div className="container skills-animate-bg">
        <div className="background "></div>
        <header className="article__header">
          <ArticleHeading
            lead="Skills"
            h2="Knowledge & Experience"
            anim="skills-animate"
          />
          <p className="body-text skills-animate">
            My typical environmental setup and design tools - I have reached an
            advanced level in Photoshop. Frequently used front-end technologies,
            frameworks and libraries. I have gained some knowledge of the listed
            back-end technologies - DB connection, routing, schemas etc.
          </p>
        </header>
        <div className="lists">
          <ListGroup
            heading={environment.heading}
            list={environment.list}
            anim="skills-animate"
            image
          />
          <ListGroup
            heading={designTools.heading}
            list={designTools.list}
            anim="skills-animate"
            image
          />
          <ListGroup
            heading={frontEnd.heading}
            list={frontEnd.list}
            anim="skills-animate"
            image
          />
          <ListGroup
            heading={backEnd.heading}
            list={backEnd.list}
            anim="skills-animate"
            image
          />
        </div>
      </div>
    </article>
  );
}
