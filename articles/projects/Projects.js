import Project from "./project/Project";
import { games } from "../../data/projects/games_data";
import { movies } from "../../data/projects/movies_data";
import { the_weather } from "../../data/projects/the_weather_data";
import ArticleHeading from "../../components/ArticleHeading";

export default function Projects() {
  return (
    <article className="article article__projects" id="projects">
      <div className="container">
        <header className="article__header">
          <ArticleHeading lead="projects" h2="Latest projects" />
          <p className="body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            tenetur maxime, tempore aspernatur aperiam ut fugit recusandae odit
            corrupti at excepturi doloribus, tempora non? Autem assumenda neque
            quisquam non id!
          </p>
        </header>
        <Project project={games} />
        <Project project={the_weather} alt />
        <Project project={movies} />
        <Project />
      </div>
    </article>
  );
}
