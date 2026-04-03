import "./scss/Sidebar.scss";
import Button from "../../Ui/Button/Button";
import { useTrackerContext } from "../../../hooks/useTrackerContext";
import { useState } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { trackers, handleAdd, handleRemove, setSelectedId } =
    useTrackerContext();
  return (
    <aside className="dashboardSidebar">
      <div className="buttonWrapper">
        <Button theme="dark" click={handleAdd} name="Add tracker" />
      </div>

      <div className="sidebarHeader">
        <h4 className="trackersSectionTitle">Trackers</h4>
        <button
          className={`trackersExpand ${isExpanded ? "active" : ""}`}
          onClick={handleToggleExpand}
        >
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </button>
      </div>

      <ul className={`trackersWrapper ${isExpanded ? "expanded" : ""}`}>
        {trackers.map((tracker) => (
          <li onClick={() => setSelectedId(tracker.id)} key={tracker.id}>
            {tracker.name}{" "}
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(tracker.id);
              }}
              className="delete"
            >
              delete
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
