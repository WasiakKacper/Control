import "./scss/RegisterWindow.scss";
import { motion } from "motion/react";
import { useState } from "react";
import Button from "../../../components/Ui/Button/Button";

type RegisterWindowProps = {
  click: () => void;
};

const RegisterWindow: React.FC<RegisterWindowProps> = ({ click }) => {
  const [alert, setAlert] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);
  console.log(isLogged);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPaswordAgain] = useState<string>("");

  const validateRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password != "" && email != "" && passwordAgain != "") {
      if (emailRegex.test(email)) {
        if (password === passwordAgain) setIsLogged(true);
        else {
          setAlert("The passwords are not the same!");
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
      className="LoginBox"
      initial={{ opacity: 0, y: -200, x: 200 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <h4 className="loginHeader">Register</h4>
      <form action="" onSubmit={validateRegister}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password again"
          onChange={(e) => setPaswordAgain(e.target.value)}
        />
        <span>{alert}</span>
        <Button
          theme="light"
          click={() => console.log("test")}
          name="Sign up"
        />
      </form>
      <p>
        Already have an account? <span onClick={click}>Log in here!</span>
      </p>
    </motion.article>
  );
};

export default RegisterWindow;
