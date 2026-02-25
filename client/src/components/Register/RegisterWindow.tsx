import "./scss/RegisterWindow.scss";
import { motion } from "motion/react";
import { useState } from "react";

type RegisterWindowProps = {
  setLoginOrRegister: (value: string) => void;
};

const RegisterWindow: React.FC<RegisterWindowProps> = ({
  setLoginOrRegister,
}) => {
  const [alert, setAlert] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPaswordAgain] = useState<string>("");
  /* 
  const validateRegister = (e) => {
    e.preventDefault();
    if(password != "" && email != "" && passwordAgain)
  }; */

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
          /* onChange={(e) => setPasswordAgain(e.target.value)} */
        />
        <span>{alert}</span>
        <button>Sign up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={() => setLoginOrRegister("login")}>Log in here!</span>
      </p>
    </motion.article>
  );
};

export default RegisterWindow;
