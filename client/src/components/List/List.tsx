/* Import scss */
import "./scss/List.scss";

/* Import ract */
import React from "react";

import type { Task } from "../../Types/Types.tsx";

type ListProps = {
  tasks: Task[];
  toggleTask: (index: number) => void;
};

const List: React.FC<ListProps> = ({ tasks, toggleTask }) => {
  return (
    <div className="listContainer">
      <h2>List</h2>
      <ul className="taskContainer">
        {tasks.map((task: Task, index: number) => (
          <li key={index}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={task.isChecked}
                onChange={() => toggleTask(index)}
              />
              <span className="box"></span>
            </label>
            <p>{task.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
