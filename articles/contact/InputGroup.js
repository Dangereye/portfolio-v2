export default function InputGroup({ label, type, name, value, func, error }) {
  return (
    <div className="form__input-group">
      <label htmlFor={label}>{label}</label>
      <input type={type} name={name} value={value} onChange={func} />
      <div className="form__error-text">{error}</div>
    </div>
  );
}

InputGroup.defaultProps = {
  label: "label",
  type: "text",
  name: "name",
  value: "unset",
  func: () => {},
  error: "",
};
