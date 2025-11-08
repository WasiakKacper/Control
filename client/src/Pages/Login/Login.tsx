/* Import scss */
import "./scss/Login.scss";

/* Import components */
import LoginWindow from "../../components/Login/LoginWindow.tsx";
import RegisterWindow from "../../components/Register/RegisterWindow.tsx";

/* Import react */
import { useState } from "react";

const Login = () => {
  const [loginOrRegister, setLoginOrRegister] = useState("login");

  return (
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
  );
};

export default Login;
