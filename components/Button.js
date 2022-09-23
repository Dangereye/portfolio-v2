export default function Button({
  iconBefore,
  iconAfter,
  iconClasses,
  name,
  label,
  classes,
  func,
  disabled,
}) {
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      func();
    }
  };

  return (
    <button
      className={`btn ${classes}`}
      onClick={func}
      onKeyDown={handleKeyDown}
      aria-label={name ? name : label}
      disabled={disabled}
    >
      {iconBefore && <span className={`btn__icon ${iconClasses}`}>{icon}</span>}
      <span>{name}</span>
      {iconAfter && <span className={`btn__icon ${iconClasses}`}>{icon}</span>}
    </button>
  );
}

Button.defaultProps = {
  iconBefore: null,
  iconAfter: null,
  iconClasses: "",
  name: "Button Name",
  label: null,
  classes: "",
  func: () => {
    return;
  },
  disabled: false,
};
