import "./Button.css";

export default function Button({
  text,

  onClick,

  variant = "primary",
}) {
  return (
    <button onClick={onClick} className={`btn ${variant}`}>
      {text}
    </button>
  );
}
