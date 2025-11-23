/* Import SCSS */
import "./scss/Dashboard.scss";

/* Import component */
import Footer from "../../components/Footer/Footer.tsx";
import Streak from "../../components/Streak/Streak.tsx";
import Chart from "../../components/Chart/Chart.tsx";
import List from "../../components/List/List.tsx";

/* Import react */
import { useState } from "react";

/* Import types */
import type { Task } from "../../Types/Types.tsx";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { name: "Lorem ipsum", isChecked: true },
    { name: "Sit dolor", isChecked: false },
  ]);

  const toggleTask = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const completedPercentage = tasks.length
    ? Math.round(
        (tasks.filter((task) => task.isChecked).length / tasks.length) * 100
      )
    : 0;

  return (
    <>
      <header className="dashboardHeader">
        <img src="./streak.svg" alt="menu" className="dashboardIcon" />
        {/* <img src="" alt="avatar" className="dashboardAvatar" /> */}
        <div className="dashboardAvatar"></div>
      </header>
      <main className="dashboardContainer">
        <aside className="dashboardSidebar">
          <div className="dashboardButtonWrapper">
            <button className="newTracker">New tracker</button>
          </div>
          <article className="dashboardList">
            <h4>My trackers</h4>
            <ul>
              <li>Tracker</li>
            </ul>
          </article>
        </aside>
        <section className="mainBoard">
          <h1 className="title">Title</h1>
          <article className="boardWrapper">
            <div className="row">
              <List tasks={tasks} toggleTask={toggleTask} />
              <Chart value={completedPercentage} />
            </div>
            <div className="row">
              <Streak />
              <List tasks={tasks} toggleTask={toggleTask} />
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
