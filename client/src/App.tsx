import Header from "./components/Ui/Header/Header.tsx";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Login from "./Pages/Login/Login.tsx";
import Footer from "./components/Ui/Footer/Footer.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LandingPage = () => (
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
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboardDemo" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
