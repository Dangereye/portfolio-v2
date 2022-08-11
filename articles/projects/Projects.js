import Project from "./project/Project";
import { games } from "../../data/projects/games_data";
import { movies } from "../../data/projects/movies_data";
import { the_weather } from "../../data/projects/the_weather_data";
import ArticleHeading from "../../components/ArticleHeading";
import useFadeDown from "../../hooks/animation/useFadeDown";

export default function Projects() {
  const {} = useFadeDown(".projects-animate", "#projects", 0.1, 0.6, 0.3);
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
        <Project project={games} hozDelay={0.6} downDelay={0.9} />
        <Project project={the_weather} alt downDelay={0.3} />
        <Project project={movies} />
      </div>
    </article>
  );
}
