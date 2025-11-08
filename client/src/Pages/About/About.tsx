/* Import css */
import "./scss/About.scss";

/* Import react */
import { useState } from "react";

/* Motion import */
import { motion } from "motion/react";

const About = () => {
  const [whatIndex, setWhatIndex] = useState<number | null>(0);

  const cardsContent = [
    {
      img: "./chart.svg",
      title: "Charts",
    },
    {
      img: "./streak.svg",
      title: "Streak",
    },
    {
      img: "./cup.svg",
      title: "Achievements",
    },
  ];

  const cardsText = [
    {
      index: 0,
      text: "Track your progress over time with clear charts and statistics",
    },
    {
      index: 1,
      text: "Stay motivated by building daily habits and keeping your streaks alive.",
    },
    {
      index: 2,
      text: "Celebrate your milestones and unlock achievements as you reach your goals.",
    },
  ];

  return (
    <main className="aboutConteiner">
      <motion.h2
        className="aboutHeader"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
          <motion.article
            key={index}
            className={`aboutCard ${whatIndex === index ? "active" : ""}`}
            onClick={() => setWhatIndex(index)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.2, delay: index * 0.1 },
              y: { type: "spring", bounce: 1, delay: index * 0.1 },
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -20,
              transition: { duration: 0.2, ease: "easeOut" },
              border: "1px solid #d9d9d9",
            }}
          >
            <img src={card.img} alt={card.title} className="icon" />
            <h3 className="cardTitle">{card.title}</h3>
          </motion.article>
        ))}
      </section>

      <div className="informationWrapper">
        {cardsText.map((card) =>
          whatIndex === card.index ? (
            <motion.p
              key={card.index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.2, delay: 0.1 },
                y: { type: "spring", bounce: 0, delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              {card.text}
            </motion.p>
          ) : null
        )}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 0.2, delay: 0.1 },
            y: { type: "spring", bounce: 0, delay: 0.1 },
          }}
          viewport={{ once: true }}
        >
          Start now
        </motion.a>
      </div>
    </main>
  );
};

export default About;
