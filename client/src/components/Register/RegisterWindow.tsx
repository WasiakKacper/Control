/* Import scss */
import "./scss/RegisterWindow.scss";

/* Motion import */
import { motion } from "motion/react";

/* Props types */
interface RegisterWindowProps {
  setLoginOrRegister: (value: string) => void;
}

const RegisterWindow: React.FC<RegisterWindowProps> = ({
  setLoginOrRegister,
}) => {
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
      <form action="">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Password again  " />
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
