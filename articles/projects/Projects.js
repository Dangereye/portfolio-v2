// Data
import { games } from "../../data/projects/games_data";
import { movies } from "../../data/projects/movies_data";
import { the_weather } from "../../data/projects/the_weather_data";

// Components
import ArticleHeading from "../../components/ArticleHeading";
import Project from "./project/Project";

// Animation hook
import useAnimation from "../../hooks/useAnimation";

export default function Projects() {
  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation(".projects-animate", "#projects", {
    y: -300,
    duration: 0.6,
    stagger: 0.05,
    ease: "back.out(1.4)",
  });

  return (
    <article className="article article__projects" id="projects">
      <div className="container">
        <header className="article__header">
          <ArticleHeading
            lead="Projects"
            h2="Latest projects"
            anim="projects-animate"
          />
          <p className="body-text projects-animate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            tenetur maxime, tempore aspernatur aperiam ut fugit recusandae odit
            corrupti at excepturi doloribus, tempora non? Autem assumenda neque
            quisquam non id!
          </p>
        </header>
        <Project project={games} />
        <Project project={the_weather} alt />
        <Project project={movies} />
      </div>
    </article>
  );
}
