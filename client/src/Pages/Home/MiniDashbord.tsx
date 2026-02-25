import { motion, useScroll, useTransform, type Variants } from "motion/react";

const MiniDashbord = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y = useTransform(scrollYProgress, [1, 0], ["-2.5%", "0%"]);

  const parentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -200,
      x: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const childrenVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -200,
      x: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      className="dashboardMini"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      style={{ x, y }}
    >
      <header className="headerMini">
        <figure className="iconMini">
          <img src="/streak.svg" alt="Control" />
        </figure>
        <figure className="avatarMini"></figure>
      </header>
      <main className="wrapperMini">
        <aside className="sidebarMini">
          <div className="buttonWrapperMini">
            <button>New tracker</button>
          </div>
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
            <motion.div className="rectangle" variants={childrenVariants}>
              <img src="/listDashboard.png" alt="" />
            </motion.div>
            <motion.div className="square" variants={childrenVariants}>
              <img src="/chartDashboard.png" alt="" />
            </motion.div>
          </section>

          <section className="row">
            <motion.div className="square" variants={childrenVariants}>
              <img src="/streakDashboard.png" alt="" />
            </motion.div>
            <motion.div className="rectangle" variants={childrenVariants}>
              <img src="/calendaryDashboard.png" alt="" />
            </motion.div>
          </section>
        </article>
      </main>
    </motion.article>
  );
};

export default MiniDashbord;
