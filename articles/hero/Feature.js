export default function Feature({ icon, text }) {
  return (
    <div className="feature hero-animate">
      <div className="feature__icon">
        <span>{icon}</span>
      </div>
      <span className="feature__text">{text}</span>
    </div>
  );
}
