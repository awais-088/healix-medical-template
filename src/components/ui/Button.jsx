import "./Button.css";

export default function Button({
  text,

  type = "button",

  onClick,

  variant = "primary",
}) {
  return (
    <button type={type} onClick={onClick} className={`btn ${variant}`}>
      {text}
    </button>
  );
}
