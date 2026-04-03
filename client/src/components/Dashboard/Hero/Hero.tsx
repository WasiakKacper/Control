import "./scss/Hero.scss";
import { useState } from "react";
import List from "../List/List";
import Chart from "../Chart/Chart";
import { useTrackerContext } from "../../../hooks/useTrackerContext";
import { useCurrentTracker } from "../../../hooks/useCurrentTracker";
import Calendar from "../Calendar/Calendar";
import Streak from "../Streak/Streak";

const Hero = () => {
  const { updateTrackerName } = useTrackerContext();
  const currentTracker = useCurrentTracker();

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>("");

  const handleEditMode = () => {
    setIsEditMode(true);
  };

  const saveAndExit = () => {
    if (newName.trim() !== "") {
      updateTrackerName(newName);
    }
    setIsEditMode(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveAndExit();
    }
    if (e.key === "Escape") {
      setIsEditMode(false);
    }
  };

  return (
    <section className="heroContainer">
      {currentTracker != undefined ? (
        <>
          <header className="heroHeader">
            {!isEditMode ? (
              <h3 onClick={handleEditMode}>{currentTracker.name}</h3>
            ) : (
              <input
                onBlur={saveAndExit}
                onKeyDown={handleKeyDown}
                onChange={(e) => setNewName(e.target.value)}
                type="text"
                placeholder="Tracker"
                autoFocus
              />
            )}
          </header>
          <article className="heroWrapper">
            <div className="heroRow">
              <List />
              <Chart />
            </div>
            <div className="heroRow">
              <Streak count={1} lastActivity={2} />
              <Calendar />
            </div>
          </article>
        </>
      ) : (
        <h1 className="noTrackerMessage">
          Choose tracker from list or create one!
        </h1>
      )}
    </section>
  );
};

export default Hero;
