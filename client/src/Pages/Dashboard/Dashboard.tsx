import "./scss/Dashboard.scss";
import type { trackerType } from "../../Types/Types.tsx";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader.tsx";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar.tsx";
/* import Streak from "../../components/Dashboard/Streak/Streak.tsx";
import List from "../../components/Dashboard/List/List.tsx";
import Chart from "../../components/Dashboard/Chart/Chart.tsx";
import Calendar from "../../components/Dashboard/Calendar/Calendar.tsx"; */
import { useState } from "react";

const Dashboard = () => {
  const [trackers, setTrackers] = useState<trackerType[]>([
    { id: Date.now(), name: "Tracker" },
  ]);

  const handleAdd = () => {
    const newTracker = { id: Date.now(), name: "Tracker" + trackers.length };
    setTrackers([...trackers, newTracker]);
  };

  const handleRemove = (idToRemove: number) => {
    setTrackers((prevTrackers) =>
      prevTrackers.filter((tracker) => tracker.id !== idToRemove),
    );
  };

  return (
    <main className="dashboardContainer">
      <DashboardHeader />
      <section className="dashboardWrapper">
        <Sidebar trackers={trackers} add={handleAdd} remove={handleRemove} />
        <article className="dashboardContent"></article>
      </section>
    </main>
  );
};

export default Dashboard;
