import "./scss/Hero.scss";
import { useState } from "react";
import List from "../List/List";
import { useTrackerContext } from "../../../hooks/useTrackerContext";
import { useCurrentTracker } from "../../../hooks/useCurrentTracker";

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
      <div className="heroHeader">
        {!isEditMode ? (
          <h3 onDoubleClick={handleEditMode}>
            {currentTracker != undefined
              ? currentTracker.name
              : "Choose tracker from list or create one!"}
          </h3>
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
      </div>
      <div className="heroRow">
        <List />
      </div>
    </section>
  );
};

export default Hero;
