import "./scss/Dashboard.scss";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader.tsx";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar.tsx";
import Hero from "../../components/Dashboard/Hero/Hero.tsx";
import { TrackerContext } from "../../context/TrackerContext.tsx";
import { useTracker } from "../../hooks/useTracker.tsx";

const Dashboard = () => {
  const trackerState = useTracker();

  return (
    <main className="dashboardContainer">
      <DashboardHeader />
      <section className="dashboardWrapper">
        <TrackerContext.Provider value={trackerState}>
          <Sidebar />
          <Hero />
        </TrackerContext.Provider>
      </section>
    </main>
  );
};

export default Dashboard;
