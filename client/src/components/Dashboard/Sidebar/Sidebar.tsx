import "./scss/Sidebar.scss";
import Button from "../../Ui/Button/Button";
import type { trackerType } from "../../../Types/Types";

type SidebarTypes = {
  trackers: trackerType[];
  add: () => void;
  remove: (idToRemove: number) => void;
};

const Sidebar: React.FC<SidebarTypes> = ({ trackers, add, remove }) => {
  return (
    <aside className="dashboardSidebar">
      <div className="buttonWrapper">
        <Button theme="dark" click={add} name="Add tracker" />
      </div>

      <h4>Trackers</h4>
      <ul>
        {trackers.map((tracker) => (
          <li>
            {tracker.name}{" "}
            <span onClick={() => remove(tracker.id)} className="delete">
              delete
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
