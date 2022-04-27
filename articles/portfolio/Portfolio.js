import Project from "./Project";
import { games } from "../../data/projects/games_data";
import { movies } from "../../data/projects/movies_data";
import { the_weather } from "../../data/projects/the_weather_data";
import ArticleHeading from "../../components/ArticleHeading";

export default function Portfolio() {
  return (
    <article className="article article__portfolio" id="portfolio">
      <div className="container">
        <ArticleHeading first="Portfolio" second="Recent projects" />
        <Project project={games} />
        <Project project={the_weather} alt />
        <Project project={movies} />
      </div>
    </article>
  );
}
