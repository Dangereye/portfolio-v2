export default function Highlight({ icon, text }) {
  return (
    <div className="highlight">
      <div className="highlight__icon">
        <span>{icon}</span>
      </div>
      <div className="highlight__text">{text}</div>
    </div>
  );
}
