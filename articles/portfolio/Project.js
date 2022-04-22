import Image from "next/image";

export default function Project({ project, alt }) {
  return (
    <div className={alt ? "project alt" : "project"}>
      <div className={alt ? "project__img alt" : "project__img"}>
        <Image src={project.image} layout="fill" alt={project.name} />
      </div>
      <div className="project__details">
        <div className="project__date">{project.date}</div>
        <h2 className="project__name">{project.name}</h2>
        <div className="tech">
          {project.tech.map((icon, i) => (
            <div className="tech__icon" key={`${project.name}-tech-${i}`}>
              <Image
                src={icon.img}
                width={icon.width}
                height={icon.height}
                alt={icon.name}
              />
            </div>
          ))}
        </div>
        <div className="project__description">{project.description}</div>
        <div className="third-party">
          {project.third_party.map((link, i) => (
            <a
              key={`${project.name}-third-party-${i}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="third-party__link"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="btns">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="btn btn--accent btn--large"
          >
            Launch Site
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="btn btn--secondary"
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
