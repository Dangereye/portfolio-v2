// Data
import { portfolio } from "../../data/projects/portfolio_data";
import { games } from "../../data/projects/games_data";
import { movies } from "../../data/projects/movies_data";
import { the_weather } from "../../data/projects/the_weather_data";

// Components
import ArticleHeading from "../../components/ArticleHeading";
import Project from "./project/Project";

// Animation hook
import useAnimation from "../../hooks/useAnimation";
import { starWars } from "../../data/projects/star_wars_data";

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
            h2="Latest Work"
            anim="projects-animate"
          />
        </header>
        <Project project={movies} />
        <Project project={starWars} alt/>
        <Project project={portfolio} />
        <Project project={games} alt/>
        <Project project={the_weather} />
      </div>
    </article>
  );
}
