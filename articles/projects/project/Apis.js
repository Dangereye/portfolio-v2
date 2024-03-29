import PropTypes from "prop-types";
export default function Apis({ name, apis, anim }) {
  return (
    <>
      {apis.length > 0 && (
        <div className={`apis ${anim}`}>
          <h4 className="heading heading--h3">APIs</h4>
          <div className="btns tags">
            {apis.map((item, i) => (
              <a
                key={`${name}-api-${i}`}
                href={item.anchor}
                target="_blank"
                rel="noreferrer"
                className="btn btn--tag"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

Apis.defaultProps = {
  name: "",
  apis: [],
  anim: "",
};

Apis.propTypes = {
  name: PropTypes.string,
  apis: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      anchor: PropTypes.string,
    })
  ),
  anim: PropTypes.string,
};
