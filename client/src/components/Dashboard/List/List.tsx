import "./scss/List.scss";
import Modal from "../../Ui/Modal/Modal";
import { useTrackerContext } from "../../../hooks/useTrackerContext";
import { useCurrentTracker } from "../../../hooks/useCurrentTracker";
import { useState } from "react";

const List = () => {
  const { handleToogleTask, handleRemoveTask } = useTrackerContext();
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
            <li className="task" key={task.id}>
              <label className="task.name">{task.name}</label>
              <div className="taskControls">
                <input
                  className="taskCheck"
                  type="checkbox"
                  onChange={() => handleToogleTask(task.id)}
                  checked={task.isComplete}
                />
                <button
                  className="taskDelete"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default List;
