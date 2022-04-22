import Project from "./Project";
import { games } from "../../data/projects/games_data";
import { movies } from "../../data/projects/movies_data";
import { the_weather } from "../../data/projects/the_weather_data";

export default function Portfolio() {
  return (
    <article className="article article__portfolio" id="portfolio">
      <div className="container">
        <div className="article-heading-lead">Recent projects</div>
        <h2 className="article-heading">Portfolio </h2>
        <Project project={games} />
        <Project project={the_weather} alt />
        <Project project={movies} />
      </div>
    </article>
  );
}
