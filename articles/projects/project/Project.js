// Prop types
import PropTypes from "prop-types";

// Components
import Image from "next/image";
import Apis from "./Apis";
import Technologies from "./Technologies";
import ThirdParty from "./ThirdParty";

// Animation hook
import useAnimation from "../../../hooks/useAnimation";

export default function Project({ project, alt }) {
  const id = () => {
    return project.name.replace(" ", "-").toLowerCase();
  };

  // Animation
  // useAnimation(element id,trigger id,{animation options},{trigger options})
  const {} = useAnimation(`.${id()}-animate-image`, `#${id()}`, {
    x: alt ? 300 : -300,
    y: 0,
    ease: "back.out(1.4)",
  });

  const {} = useAnimation(`.${id()}-animate-text`, `#${id()}`, {
    x: alt ? -300 : 300,
    y: 0,
    ease: "back.out(1.4)",
    stagger: 0.05,
  });

  return (
    <div className={alt ? "project alt" : "project"} id={id()}>
      <div className={`project__img ${id()}-animate-image`}>
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
        <ThirdParty
          name={project.name}
          third_party={project.third_party}
          anim={`${id()}-animate-text`}
        />
        <div className={`btns ${id()}-animate-text`}>
          <a
            href={project.project__anchor}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--large"
          >
            Launch Site
          </a>
          <a
            href={project.repo__anchor}
            target="_blank"
            rel="noreferrer"
            className="btn btn--tertiary"
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
