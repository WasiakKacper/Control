/* Import scss */
import "./scss/Login.scss";

/* Import components */
import LoginWindow from "../../components/Login/LoginWindow.tsx";
import RegisterWindow from "../../components/Register/RegisterWindow.tsx";

/* Import react */
import { useState } from "react";
import { Element } from "react-scroll";

const Login = () => {
  const [loginOrRegister, setLoginOrRegister] = useState("login");

  return (
    <Element name="login">
      <main className="loginContainer">
        <h3 className="loginHeader">Your progress is waiting!</h3>
        <section className="loginWrapper">
          {loginOrRegister == "login" ? (
            <LoginWindow setLoginOrRegister={setLoginOrRegister} />
          ) : (
            <RegisterWindow setLoginOrRegister={setLoginOrRegister} />
          )}
        </section>
      </main>
    </Element>
  );
};

export default Login;
