export default function InputGroup({ name, type, value, func, error_msg }) {
  return (
    <div className="form__input-group">
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} value={value} onChange={func} />
      <div className="form__error-text">{error_msg}</div>
    </div>
  );
}

InputGroup.defaultProps = {
  name: "name",
  type: "text",
  value: "",
  func: () => {
    return;
  },
  error_msg: "",
};
