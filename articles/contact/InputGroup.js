export default function InputGroup({
  name,
  type,
  value,
  handleChange,
  handleBlur,
  error_msg,
}) {
  return (
    <div className="form__input-group">
      <label htmlFor={name}>{name}</label>
      <input
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
};
