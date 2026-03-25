import "./scss/Hero.scss";
import type { trackerType } from "../../../Types/Types";
import { useState } from "react";

type heroTypes = {
  tracker: trackerType | undefined;
  onUpdateName: (newName: string) => void;
};

const Hero: React.FC<heroTypes> = ({ tracker, onUpdateName }) => {

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>("");

  const handleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const saveAndExit = () => {
    if (newName.trim() !== "" && onUpdateName) {
      onUpdateName(newName);
    }
    setIsEditMode(false);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveAndExit();
    } else if (e.key === "Escape") {
      setNewName(tracker?.name || "");
      setIsEditMode(false);
    }
  };

  return (
    <section className="heroContainer">
      <div className="heroHeader">
          {!isEditMode ? (<h3 onDoubleClick={handleEditMode}>{tracker != undefined ? (tracker.name):("Choose tracker from list or create one!")}</h3>):(<input onBlur={saveAndExit} onKeyDown={handleKeyDown} onChange={(e) => setNewName(e.target.value) } type="text" placeholder="Tracker" autoFocus/>)}
          
      </div>
    </section>
  );
};

export default Hero;
