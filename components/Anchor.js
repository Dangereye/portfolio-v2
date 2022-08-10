import PropTypes from "prop-types";

export default function Anchor({ anchor, text }) {
  return (
    <a href={anchor} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

Anchor.defaultProps = {
  anchor: "/",
  text: "Anchor text",
};

Anchor.propTypes = {
  anchor: PropTypes.string,
  text: PropTypes.string,
};
