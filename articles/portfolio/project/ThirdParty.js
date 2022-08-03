import PropTypes from "prop-types";
export default function ThirdParty({ name, third_party }) {
  return (
    <>
      {third_party.length > 0 && (
        <div className="third-party">
          <h4 className="heading heading--h3">Third party</h4>
          <div className="btns tags">
            {third_party.map((item, i) => (
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

ThirdParty.defaultProps = {
  name: "",
  third_party: [],
};

ThirdParty.propTypes = {
  name: PropTypes.string,
  third_party: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      anchor: PropTypes.string,
    })
  ),
};
