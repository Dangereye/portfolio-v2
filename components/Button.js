export default function Button({ icon, name, label, classes, func }) {
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      console.log("Key press.");
      func();
    }
  };

  return (
    <button
      className={`btn ${classes}`}
      onClick={func}
      onKeyDown={handleKeyDown}
      aria-label={name ? name : label}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      <span>{name}</span>
    </button>
  );
}

Button.defaultProps = {
  icon: null,
  name: "Button Name",
  label: null,
  classes: "",
  func: () => {
    return;
  },
};
