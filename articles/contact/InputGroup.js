import PropTypes from "prop-types";

export default function InputGroup({
  name,
  type,
  value,
  handleChange,
  handleBlur,
  error_msg,
  anim,
}) {
  return (
    <div className={`form__input-group ${anim}`}>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="form__error-text">{error_msg}</div>
    </div>
  );
}

InputGroup.defaultProps = {
  name: "name",
  type: "text",
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

InputGroup.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  error_msg: PropTypes.string,
  anim: PropTypes.string,
};
