// Data
import { environment } from "../../data/skills/environment";
import { designTools } from "../../data/skills/designTools";
import { frontEnd } from "../../data/skills/frontEnd";
import { backEnd } from "../../data/skills/backEnd";

// Components
import ArticleHeading from "../../components/ArticleHeading";
import ListGroup from "../../components/ListGroup";

// Animation hook
import useAnimation from "../../hooks/useAnimation";

export default function Skills() {
  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation(".skills-animate-bg", "#skills", {
    scale: 1.3,
    duration: 1,
  });
  const {} = useAnimation(".skills-animate", "#skills", {
    y: -300,
    delay: 0.4,
    duration: 0.6,
    stagger: 0.05,
    ease: "back.out(1.4)",
  });

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
            animGroup="skills-animate"
            image
          />
          <ListGroup
            heading={designTools.heading}
            list={designTools.list}
            animGroup="skills-animate"
            image
          />
          <ListGroup
            heading={frontEnd.heading}
            list={frontEnd.list}
            animGroup="skills-animate"
            image
          />
          <ListGroup
            heading={backEnd.heading}
            list={backEnd.list}
            animGroup="skills-animate"
            image
          />
        </div>
      </div>
    </article>
  );
}
