/* Import pages and components */
import Header from "./components/Header/Header.tsx";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Login from "./Pages/Login/Login.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Login />
      <Footer />
    </>
  );
};

export default App;
