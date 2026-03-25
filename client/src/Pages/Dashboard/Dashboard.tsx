import "./scss/Dashboard.scss";
import type { trackerType } from "../../Types/Types.tsx";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader.tsx";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar.tsx";
import Hero from "../../components/Dashboard/Hero/Hero.tsx";
import { useState } from "react";

const Dashboard = () => {
  const [trackers, setTrackers] = useState<trackerType[]>([
    { id: Date.now(), name: "Tracker" },
  ]);

  const [selectedId, setSelectedId] = useState(trackers[0]?.id);
  const currentTracker = trackers.find((t => t.id === selectedId))

  const handleAdd = () => {
    const newTracker = { id: Date.now(), name: trackers.length != 0 ? "Tracker" + trackers.length : "Tracker"};
    setTrackers([...trackers, newTracker]);
  };

  const handleRemove = (idToRemove: number) => {
    setTrackers((prevTrackers) =>
      prevTrackers.filter((tracker) => tracker.id !== idToRemove),
    );
  };

  const updateTrackerName  = (newName: string) => {
    setTrackers(prevTrackers => prevTrackers.map(tracker => tracker.id === selectedId ? { ...tracker, name: newName } : tracker))
  }

  return (
    <main className="dashboardContainer">
      <DashboardHeader />
      <section className="dashboardWrapper">
        <Sidebar
          trackers={trackers}
          add={handleAdd}
          remove={handleRemove}
          onSelect={setSelectedId}
        />
        <Hero tracker={currentTracker} onUpdateName={updateTrackerName}/>
      </section>
      
    </main>
  );
};

export default Dashboard;
