import "./SectionTitle.css";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <span className="section-badge">{subtitle}</span>

      <h2>{title}</h2>

      <div className="section-divider">
        <span></span>
      </div>
    </div>
  );
}
