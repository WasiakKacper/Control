import "./scss/LoginWindow.scss";
import { motion } from "motion/react";
import { useState } from "react";
import Button from "../../../components/Ui/Button/Button.tsx";

type LoginWindowProps = {
  click: () => void;
};

const LoginWindow: React.FC<LoginWindowProps> = ({ click }) => {
  const correctEmail = "test@example.com";
  const correctPassword = "123";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [alert, setAlert] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);

  console.log(isLogged);

  const validateLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password != "" && email != "") {
      if (emailRegex.test(email)) {
        if (email === correctEmail && password === correctPassword) {
          setIsLogged(true);
        } else {
          setAlert("Incorrect email or password!");
        }
      } else {
        setAlert("Incorrect email structure!");
      }
    } else {
      setAlert("Fields cannot be empty!");
    }
  };

  return (
    <motion.article
      className="loginBox"
      initial={{ opacity: 0, y: -200, x: 200 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <h4 className="loginHeader">Login</h4>
      <form action="">
        <input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{alert}</span>
        <Button theme="light" click={() => validateLogin} name="Sign in" />
      </form>
      <p>
        No account yet? <span onClick={click}>Create one now!</span>
      </p>
    </motion.article>
  );
};

export default LoginWindow;
