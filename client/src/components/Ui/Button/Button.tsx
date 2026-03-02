import "./scss/Button.scss";

type ButtonTypes = {
  click: () => void;
  name: string;
  theme: string;
};

const Button: React.FC<ButtonTypes> = ({ click, name, theme }) => {
  return (
    <button className={theme} onClick={click}>
      {name}
    </button>
  );
};

export default Button;
