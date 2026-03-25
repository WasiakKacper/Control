import "./scss/Sidebar.scss";
import Button from "../../Ui/Button/Button";
import type { trackerType } from "../../../Types/Types";

type SidebarTypes = {
  trackers: trackerType[];
  add: () => void;
  remove: (idToRemove: number) => void;
  onSelect: (trackerId: number) => void;
};

const Sidebar: React.FC<SidebarTypes> = ({
  trackers,
  add,
  remove,
  onSelect,
}) => {
  return (
    <aside className="dashboardSidebar">
      <div className="buttonWrapper">
        <Button theme="dark" click={add} name="Add tracker" />
      </div>

      <h4>Trackers</h4>
      <ul>
        {trackers.map((tracker) => (
          <li onClick={() => onSelect(tracker.id)}>
            {tracker.name}{" "}
            <span
              onClick={(e) => {
                e.stopPropagation();
                remove(tracker.id);
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
