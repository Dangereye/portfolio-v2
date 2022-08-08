import PropTypes from "prop-types";

export default function TextAreaGroup({
  name,
  value,
  handleChange,
  handleBlur,
  error_msg,
  anim,
}) {
  return (
    <div className={`form__textarea-group ${anim}`}>
      <label htmlFor={name}>{name}</label>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="form__error-text">{error_msg}</div>
    </div>
  );
}

TextAreaGroup.defaultProps = {
  name: "name",
  value: "",
  handleChange: () => {
    return;
  },
  handleBlur: () => {
    return;
  },
  error_msg: "",
  anim: "",
};

TextAreaGroup.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  error_msg: PropTypes.string,
  anim: PropTypes.string,
};
