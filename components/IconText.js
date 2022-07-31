export default function IconText({ icon, text }) {
  return (
    <div className="icon-text">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

IconText.defaultProps = {
  icon: "",
  text: "Icon text",
};
