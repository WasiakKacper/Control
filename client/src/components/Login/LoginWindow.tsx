/* Import scss */
import "./scss/LoginWindow.scss";

/* Motion import */
import { motion } from "motion/react";

/* Props types */
interface LoginWindowProps {
  setLoginOrRegister: (value: string) => void;
}

const LoginWindow: React.FC<LoginWindowProps> = ({ setLoginOrRegister }) => {
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
      <h4 className="loginHeader">Login</h4>
      <form action="">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </form>
      <p>
        No account yet?
        <span onClick={() => setLoginOrRegister("register")}>
          Create one now!
        </span>
      </p>
    </motion.article>
  );
};

export default LoginWindow;
