export function TextAreaGroup({ name, value, func, error_msg }) {
  return (
    <div className="form__textarea-group">
      <label htmlFor={name}>{name}</label>
      <textarea name={name} value={value} onChange={func} />
      <div className="form__error-text">{error_msg}</div>
    </div>
  );
}

TextAreaGroup.defaultProps = {
  name: "name",
  value: "",
  func: () => {
    return;
  },
  error_msg: "",
};
