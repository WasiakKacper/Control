/* Import pages and components */
import Header from "./components/Header/Header.tsx";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Login from "./Pages/Login/Login.tsx";
import Footer from "./components/Footer/Footer.tsx";
/* Dashboard */
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";

/* Import react-store */
import { Element } from "react-scroll";

const App = () => {
  /* return (
    <>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="login">
        <Login />
      </Element>
      <Footer />
    </>
  ); */
  return <Dashboard />;
};

export default App;
