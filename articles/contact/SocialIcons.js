import PropTypes from "prop-types";
export default function SocialIcons({ list, anim }) {
  return (
    <div className={`btns ${anim}`}>
      {list.map((item) => (
        <a
          key={`social-icon-${item.name}`}
          href={item.anchor ? item.anchor : "/"}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          data-tooltip={item.name ? item.name : ""}
          aria-label={item.name ? item.name : "Social icon"}
        >
          {item.icon ? item.icon : "N/A"}
        </a>
      ))}
    </div>
  );
}

SocialIcons.defaultProps = {
  list: [
    { name: "01", anchor: "/", icon: "01" },
    { name: "02", anchor: "/", icon: "02" },
    { name: "03", anchor: "/", icon: "03" },
    { name: "04", anchor: "/", icon: "04" },
  ],
  anim: "",
};

SocialIcons.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      anchor: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  anim: PropTypes.string,
};
