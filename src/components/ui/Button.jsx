import "./Button.css";

export default function Button({
  text,

  variant,

  onClick,

  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn ${variant || "primary"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
