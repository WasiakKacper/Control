import "./scss/Home.scss";
import { motion } from "motion/react";
import MiniDashbord from "./MiniDashbord";

const Home = () => {
  return (
    <main className="homeWrapper">
      <motion.h1
        className="homeHeader"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.4, delay: 0.3 },
          y: { type: "spring", bounce: 0.1, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        Gain full control
        <br /> over your process
      </motion.h1>
      <div className="dashboardWrapper">
        <MiniDashbord />
      </div>
    </main>
  );
};

export default Home;
