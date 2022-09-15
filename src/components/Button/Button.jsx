import "./Button.scss";

const BUTTON_STYLES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, inputProps }) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_STYLES[buttonType] : ""
      }`}
      {...inputProps}
    >
      {children}
    </button>
  );
};

export default Button;
