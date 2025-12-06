/* Import scss */
import "./scss/Streak.scss";

/* Import type */
import type { StreakType } from "../../Types/Types.tsx";

const Streak: React.FC<StreakType> = ({ count, lastActivity }) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const formattedToday = today.toISOString().split("T")[0];
  const formattedYesterday = yesterday.toISOString().split("T")[0];

  const lastDate = new Date(lastActivity).toISOString().split("T")[0];

  let currentStreak: number;

  if (lastDate === formattedToday) {
    currentStreak = count;
  } else if (lastDate === formattedYesterday) {
    currentStreak = count + 1;
  } else {
    currentStreak = 1;
  }

  return (
    <div className="streakContainer">
      <h3>{currentStreak}</h3>
      <img src="./streak.svg" alt="Streak" />
    </div>
  );
};

export default Streak;
