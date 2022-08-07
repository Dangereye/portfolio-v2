import PropTypes from "prop-types";
export default function ArticleHeading({ lead, h2, anim }) {
  return (
    <>
      <div className={`heading heading--lead ${anim}`}>{lead}</div>
      <h2 className={`heading heading--h2 ${anim}`}>{h2}</h2>
    </>
  );
}

ArticleHeading.defaultProps = {
  lead: "first heading ",
  h2: "Second heading",
  anim: "",
};

ArticleHeading.propTypes = {
  lead: PropTypes.string,
  h2: PropTypes.string,
  anim: PropTypes.string,
};
