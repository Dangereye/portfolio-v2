import Image from "next/image";
import Apis from "./Apis";
import Technologies from "./Technologies";
import ThirdParty from "./ThirdParty";

export default function Project({ project, alt }) {
  return (
    <div className={alt ? "project alt" : "project"}>
      <div className="project__img">
        <Image src={project.image} layout="fill" alt={project.name} />
      </div>
      <div className="project__details">
        <header className="project__header">
          <h3 className="heading heading--h2">{project.name}</h3>
          <div className="project__date">{project.date}</div>
        </header>
        <div className="project__description">{project.description}</div>
        <Technologies project={project} />
        <Apis project={project} />
        <ThirdParty project={project} />
        <div className="btns">
          <a
            href={project.project__url}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--large"
          >
            Launch Site
          </a>
          <a
            href={project.repo__url}
            target="_blank"
            rel="noreferrer"
            className="btn btn--secondary btn--large"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

Project.defaultProps = {
  project: {
    image: "/img/movies-project.jpg",
    date: "2021",
    name: "Movies",
    tech: [
      { img: "/svg/html5.svg", name: "HTML5", width: "34.29", height: "40" },
      { img: "/svg/css3.svg", name: "CSS3", width: "34.29", height: "40" },
      { img: "/svg/sass.svg", name: "SCSS", width: "53.38", height: "40" },
      { img: "/svg/js.svg", name: "JavaScript", width: "40", height: "40" },
      { img: "/svg/react.svg", name: "ReactJS", width: "45.71", height: "40" },
    ],
    description: (
      <p className="body-text">
        Explore millions of movies, television shows, cast & crew. Check out new
        upcoming releases, or re-discover old favourites. View trailers, read
        biographies, learn who or what is popular - right now! You'll probably
        find a few gems along the way - that you didn't know existed!
        <br />
        <span>Caution</span> - can cause unexplained time loss.
      </p>
    ),
    third_party: [
      { url: "/", name: "#tmdb-api" },
      { url: "/", name: "#youtube" },
      { url: "/", name: "#react-icons" },
      { url: "/", name: "#react-router" },
      { url: "/", name: "#react-query" },
    ],
    project__url: "/",
    repo__url: "/",
  },
};
