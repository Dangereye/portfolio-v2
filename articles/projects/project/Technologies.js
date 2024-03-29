import Image from "next/image";
import PropTypes from "prop-types";

export default function Technologies({ name, tech, anim }) {
  return (
    <>
      {tech.length > 0 && (
        <div className={`tech ${anim}`}>
          <h4 className="heading heading--h3">Technologies</h4>
          <div className="tech__items">
            {tech.map((item, i) => (
              <div
                key={`${name}-tech-${i}`}
                className="tech__icon"
                data-tooltip={item.name}
              >
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  layout="responsive"
                  alt={item.name}
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
  name: "",
  tech: [],
  anim: "",
};

Technologies.propTypes = {
  name: PropTypes.string,
  tech: PropTypes.arrayOf(
    PropTypes.exact({
      image: PropTypes.string,
      name: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
    })
  ),
  anim: PropTypes.string,
};
