import Image from "next/image";
import PropTypes from "prop-types";

export default function Technologies({ name, tech }) {
  return (
    <>
      {tech.length > 0 && (
        <div className="tech">
          <h4 className="heading heading--h3">Technologies</h4>
          <div className="tech__items">
            {tech.map((item, i) => (
              <div className="tech__icon" key={`${name}-tech-${i}`}>
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
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
};
