import Image from "next/image";
import Apis from "./Apis";
import Technologies from "./Technologies";
import ThirdParty from "./ThirdParty";
import PropTypes from "prop-types";
import useFadeRight from "../../../hooks/animation/useFadeRight";

export default function Project({ project, alt }) {
  const {} = useFadeRight(
    true,
    `.${project.name.replace(" ", "-")}-animate-img`,
    `#${project.name.replace(" ", "-")}`
  );
  return (
    <div
      className={alt ? "project alt" : "project"}
      id={project.name.replace(" ", "-")}
    >
      <div
        className={`project__img ${project.name.replace(" ", "-")}-animate-img`}
      >
        <div className="project__img__wrapper">
          <Image src={project.image} layout="fill" alt={project.name} />
        </div>
      </div>
      <div className="project__details">
        <header className="project__header">
          <h3 className="heading heading--h2">{project.name}</h3>
          <div className="project__date">{project.date}</div>
        </header>
        <div className="project__description">{project.description}</div>
        <Technologies name={project.name} tech={project.tech} />
        <Apis name={project.name} apis={project.apis} />
        <ThirdParty name={project.name} third_party={project.third_party} />
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
            className="btn btn--tertiary "
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
    image: "/img/portfolio/games-project.jpg",
    date: "date",
    name: "Project",
    tech: [],
    description: (
      <p className="body-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
        doloremque cupiditate quasi in pariatur repudiandae cumque suscipit,
        nulla placeat consectetur ab? Deserunt veritatis vel libero, in, nostrum
        blanditiis consequatur repellendus quia laboriosam ullam quod nesciunt
        incidunt itaque mollitia ipsam. Repudiandae.
      </p>
    ),
    apis: [],
    third_party: [],
    project__anchor: "/",
    repo__anchor: "/",
  },
  alt: false,
};

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    tech: PropTypes.array,
    description: PropTypes.element,
    apis: PropTypes.array,
    third_party: PropTypes.array,
    project_anchor: PropTypes.string,
    repo__anchor: PropTypes.string,
  }),
  alt: PropTypes.bool,
};
