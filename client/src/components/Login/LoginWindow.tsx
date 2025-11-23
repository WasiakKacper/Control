/* Import scss */
import "./scss/LoginWindow.scss";

/* Motion import */
import { motion } from "motion/react";

/* Import react */
import { useState } from "react";

/* Props types */
interface LoginWindowProps {
  setLoginOrRegister: (value: string) => void;
}

const LoginWindow: React.FC<LoginWindowProps> = ({ setLoginOrRegister }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const correctEmail = "test@example.com";
  const correctPassword = "123";

  const validateLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password != "" && email != "") {
      if (emailRegex.test(email)) {
        if (email === correctEmail && password === correctPassword) {
          console.log("zalogoawny");
        } else {
          console.log("niepoprawny email lub haslo");
        }
      } else {
        console.log("Niepoprawna struktura email");
      }
    } else {
      console.log("Pola nie mogą zostać puste");
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
        <button onClick={validateLogin}>Sign in</button>
      </form>
      <p>
        No account yet?{" "}
        <span onClick={() => setLoginOrRegister("register")}>
          Create one now!
        </span>
      </p>
    </motion.article>
  );
};

export default LoginWindow;
