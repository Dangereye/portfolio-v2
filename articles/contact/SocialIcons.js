import PropTypes from "prop-types";
export default function SocialIcons({ list }) {
  return (
    <div className="btns">
      {list.map((item) => (
        <a
          key={`social-icon-${item.name}`}
          href={item.anchor ? item.anchor : "/"}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          data-tooltip={item.name ? item.name : ""}
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
};

SocialIcons.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      anchor: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
};
