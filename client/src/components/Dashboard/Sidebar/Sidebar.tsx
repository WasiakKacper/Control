import "./scss/Sidebar.scss";
import Button from "../../Ui/Button/Button";
import { useTrackerContext } from "../../../hooks/useTrackerContext";

const Sidebar = () => {
  const { trackers, handleAdd, handleRemove, setSelectedId } =
    useTrackerContext();
  return (
    <aside className="dashboardSidebar">
      <div className="buttonWrapper">
        <Button theme="dark" click={handleAdd} name="Add tracker" />
      </div>

      <h4>Trackers</h4>
      <ul>
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
