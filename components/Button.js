export default function Button({ icon, name, classes, func }) {
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
    >
      {icon && <span>{icon}</span>}
      <span>{name}</span>
    </button>
  );
}

Button.defaultProps = {
  icon: null,
  name: "Button Name",
  classes: "",
  func: () => {
    return;
  },
};
