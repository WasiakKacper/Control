/* Import css */
import "./scss/Home.scss";

/* Import motion */
import { motion } from "motion/react";

const Home = () => {
  return (
    <main>
      <motion.h1
        className="text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] homeHeader"
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
      <motion.div
        className="dashboardWrapper"
        initial={{ opacity: 0, y: -200, x: 200 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <section className="dashboardMini">
          <div className="headerMini">
            <div className="iconMini">
              <img src="/streak.svg" alt="Control" />
            </div>
            <div className="avatarMini"></div>
          </div>
          <div className="wrapperMini">
            <aside className="sidebarMini">
              <div className="buttonWrapperMini">
                <button>New tracker</button>
              </div>
              <hr />
              <div className="listMini">
                <h4>My trackers</h4>
                <p>Title</p>
              </div>
            </aside>
            <article className="mainMini">
              <header>
                <h3>Title</h3>
              </header>
              <section className="row">
                <motion.div
                  className="rectangle"
                  initial={{ opacity: 0, y: -200, x: 200 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <img src="/listDashboard.png" alt="" />
                </motion.div>
                <motion.div
                  className="square"
                  initial={{ opacity: 0, y: -200, x: 200 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <img src="/chartDashboard.png" alt="" />
                </motion.div>
              </section>

              <section className="row">
                <motion.div
                  className="square"
                  initial={{ opacity: 0, y: -200, x: 200 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <img src="/streakDashboard.png" alt="" />
                </motion.div>
                <motion.div
                  className="rectangle"
                  initial={{ opacity: 0, y: -200, x: 200 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <img src="/calendaryDashboard.png" alt="" />
                </motion.div>
              </section>
            </article>
          </div>
        </section>
      </motion.div>
    </main>
  );
};

export default Home;
