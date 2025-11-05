/* Import css */
import "./scss/About.scss";

/* Import react */
import { useState } from "react";

const About: React.FC = () => {
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
      <h2 className="aboutHeader">
        Master your workflow
        <br /> with Control.
      </h2>

      <section className="aboutWrapper">
        {cardsContent.map((card, index) => (
          <article
            key={card.index}
            className={`aboutCard ${whatIndex === index ? "active" : ""}`}
            onClick={() => setWhatIndex(index)}
          >
            <img src={card.img} alt={card.title} className="icon" />
            <h3 className="cardTitle">{card.title}</h3>
          </article>
        ))}
      </section>

      <div className="informationWrapper">
        {cardsText.map((card) =>
          whatIndex === card.index ? <p key={card.index}>{card.text}</p> : null
        )}
        <a href="#">Start now</a>
      </div>
    </main>
  );
};

export default About;
