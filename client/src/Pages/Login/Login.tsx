import "./scss/Login.scss";
import LoginWindow from "./LoginWindow/LoginWindow.tsx";
import RegisterWindow from "./RegisterWindow/RegisterWindow.tsx";
import { useState } from "react";
import { Element } from "react-scroll";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Element name="login">
      <main className="loginContainer">
        <h3 className="loginHeader">Your progress is waiting!</h3>
        <section className="loginWrapper">
          {isLogin ? (
            <LoginWindow click={handleClick} />
          ) : (
            <RegisterWindow click={handleClick} />
          )}
        </section>
      </main>
    </Element>
  );
};

export default Login;
