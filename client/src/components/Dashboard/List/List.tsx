import "./scss/List.scss";
import { useTrackerContext } from "../../../hooks/useTrackerContext";
import { useCurrentTracker } from "../../../hooks/useCurrentTracker";

const List = () => {
  const { handleAddTask, handleToogleTask } = useTrackerContext();
  const currentTracker = useCurrentTracker();

  return (
    <div className="listContainer">
      <h2>List</h2>
      <button className="newTaskBtn" onClick={() => handleAddTask("Test")}>
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
  );
};

export default List;
