import "./scss/List.scss";
import Modal from "../../Ui/Modal/Modal";
import { useTrackerContext } from "../../../hooks/useTrackerContext";
import { useCurrentTracker } from "../../../hooks/useCurrentTracker";
import { useState } from "react";

const List = () => {
  const { handleToogleTask } = useTrackerContext();
  const currentTracker = useCurrentTracker();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="listContainer">
        <h2>List</h2>
        <button className="newTaskBtn" onClick={() => setIsOpen(!isOpen)}>
          +
        </button>
        <ul className="taskContainer">
          {currentTracker?.tasks.map((task) => (
            <li key={task.id}>
              {task.name}{" "}
              <input
                type="checkbox"
                onChange={() => handleToogleTask(task.id)}
                checked={task.isComplete}
              />
            </li>
          ))}
        </ul>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default List;
