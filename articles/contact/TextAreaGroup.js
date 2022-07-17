export default function TextAreaGroup({
  name,
  value,
  handleChange,
  handleBlur,
  error_msg,
}) {
  return (
    <div className="form__textarea-group">
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
};
