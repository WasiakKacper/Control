/* Import scss */
import "./scss/Streak.scss";

const Streak = () => {
  const days = 1;

  return (
    <div className="streakContainer">
      <h3>{days}</h3>
      <img src="./streak.svg" alt="Streak" />
    </div>
  );
};

export default Streak;
