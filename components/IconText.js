import PropTypes from "prop-types";

export default function IconText({ icon, text, anim }) {
  return (
    <div className={`icon-text ${anim}`}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

IconText.defaultProps = {
  icon: "",
  text: "Icon text",
  anim: "",
};

IconText.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.string,
  anim: PropTypes.string,
};
