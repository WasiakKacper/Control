import "./scss/About.scss";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import { cardsContent } from "./CardsData";
import AboutCard from "./AboutCard";

const About = () => {
  const [whatIndex, setWhatIndex] = useState<number>(0);

  const handleClick = (clickedIndex: number) => {
    setWhatIndex(clickedIndex);
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <main className="aboutConteiner">
      <motion.h2
        className="aboutHeader"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{
          opacity: { duration: 0.4, delay: 0.3 },
          y: { type: "spring", bounce: 0.1, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        Master your workflow
        <br /> with Control.
      </motion.h2>

      <section className="aboutWrapper">
        {cardsContent.map((card, index) => (
          <AboutCard
            key={index}
            content={card}
            click={() => handleClick(card.index)}
            index={whatIndex}
          />
        ))}
      </section>

      <article className="informationWrapper">
        {cardsContent.map((card) =>
          whatIndex === card.index ? (
            <motion.p
              key={card.index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              {card.text}
            </motion.p>
          ) : null,
        )}
        <Link to="login" smooth={true} duration={300}>
          <motion.p
            className="scrollToLoginBtn"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{
              opacity: { duration: 0.2, delay: 0.1 },
              y: { delay: 0.1 },
            }}
            viewport={{ once: true }}
          >
            Try the demo version of the app!
          </motion.p>
        </Link>
      </article>
    </main>
  );
};

export default About;
