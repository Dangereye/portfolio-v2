import Image from "next/image";
import Apis from "./Apis";
import Technologies from "./Technologies";
import ThirdParty from "./ThirdParty";
import PropTypes from "prop-types";
import useFadeHorizontal from "../../../hooks/animation/useFadeHorizontal";
import useFadeDown from "../../../hooks/animation/useFadeDown";

export default function Project({ project, alt }) {
  const id = () => {
    return project.name.replace(" ", "-").toLowerCase();
  };

  const {} = useFadeHorizontal(
    true,
    `.${id()}-animate-img`,
    `#${id()}`,
    alt ? 150 : -150
  );

  const {} = useFadeDown(`.${id()}-animate-text`, `#${id()}`);
  return (
    <div className={alt ? "project alt" : "project"} id={id()}>
      <div className={`project__img ${id()}-animate-img`}>
        <div className="project__img__wrapper">
          <Image src={project.image} layout="fill" alt={project.name} />
        </div>
      </div>
      <div className="project__details">
        <header className={`project__header ${id()}-animate-text`}>
          <h3 className="heading heading--h2">{project.name}</h3>
          <div className="project__date">{project.date}</div>
        </header>
        <div className={`project__description ${id()}-animate-text`}>
          {project.description}
        </div>
        <Technologies
          name={project.name}
          tech={project.tech}
          anim={`${id()}-animate-text`}
        />
        <Apis
          name={project.name}
          apis={project.apis}
          anim={`${id()}-animate-text`}
        />
        <ThirdParty name={project.name} third_party={project.third_party} />
        <div className="btns">
          <a
            href={project.project__url}
            target="_blank"
            rel="noreferrer"
            className={`btn btn--primary btn--large ${id()}-animate-text`}
          >
            Launch Site
          </a>
          <a
            href={project.repo__url}
            target="_blank"
            rel="noreferrer"
            className={`btn btn--tertiary ${id()}-animate-text`}
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
