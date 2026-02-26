import { motion } from "motion/react";
import type { cardType } from "../../Types/Types";

interface AboutType {
  content: cardType;
  click: () => void;
  index: number;
}

const AboutCard: React.FC<AboutType> = ({ content, click, index }) => {
  return (
    <motion.article
      className={`aboutCard ${index === content.index ? "active" : ""}`}
      onClick={click}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.2, delay: content.index * 0.01 },
        y: { delay: content.index * 0.01 },
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -20,
        transition: { duration: 0.2, ease: "easeOut" },
        border: "1px solid #d9d9d9",
      }}
    >
      <img src={content.img} alt={content.title} className="icon" />
      <h3 className="cardTitle">{content.title}</h3>
    </motion.article>
  );
};

export default AboutCard;
