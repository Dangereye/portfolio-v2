import Image from "next/image";

export default function Technologies({ project }) {
  return (
    <>
      {project.tech.length > 0 && (
        <div className="tech">
          <h4 className="heading heading--h3">Technologies</h4>
          <div className="tech__items">
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
        </div>
      )}
    </>
  );
}

Technologies.defaultProps = {
  project: { tech: [] },
};
