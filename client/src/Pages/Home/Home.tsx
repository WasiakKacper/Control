/* Import css */
import "./scss/Home.scss";

const Home = () => {
  return (
    <main>
      <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
        Gain full control
        <br /> over your process
      </h1>
      <div className="light up"></div>
      <div className="light down"></div>
    </main>
  );
};

export default Home;
