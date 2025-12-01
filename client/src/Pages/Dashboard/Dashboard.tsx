/* Import SCSS */
import "./scss/Dashboard.scss";

/* Import component */
import Footer from "../../components/Footer/Footer.tsx";
import Streak from "../../components/Streak/Streak.tsx";
import Chart from "../../components/Chart/Chart.tsx";
import List from "../../components/List/List.tsx";

/* Import react */
import { useState, useRef, useEffect } from "react";

/* Import types */
import type { Task } from "../../Types/Types.tsx";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { name: "Add first task", isChecked: false },
  ]);

  const toggleTask = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const [taskName, setTaskName] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);
  const [error, setError] = useState(false);

  const activeModal = () => {
    setIsModalActive(true);
  };

  const newTask = () => {
    if (taskName == "") setError(true);
    else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { name: taskName, isChecked: false },
      ]);
      setTaskName("");
      setIsModalActive(false);
      setError(false);
    }
  };

  const completedPercentage = tasks.length
    ? Math.round(
        (tasks.filter((task) => task.isChecked).length / tasks.length) * 100
      )
    : 0;

  const [title, setTitle] = useState("Title");
  const [isTitleInputActive, setIsInputTitleActive] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isTitleInputActive]);

  return (
    <>
      {isModalActive && (
        <div className="modal">
          <input
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            placeholder={error ? "Task need's a name" : "Task name"}
          />
          <div className="buttonsWrapper">
            <button onClick={newTask} className="addTaskBtn">
              New task
            </button>
            <button
              onClick={() => {
                setIsModalActive(false);
                setTaskName("");
              }}
              className="addTaskBtn"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
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
              <li>{title}</li>
            </ul>
          </article>
        </aside>
        <section className="mainBoard">
          {isTitleInputActive ? (
            <div className="titleWrapper">
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                className="title"
                ref={inputRef}
                placeholder="Need's title"
              />
            </div>
          ) : (
            <h1
              className="title"
              onDoubleClick={() => setIsInputTitleActive(true)}
            >
              {title}
            </h1>
          )}
          <article
            className="boardWrapper"
            onClick={() => {
              if (title != "") setIsInputTitleActive(false);
            }}
          >
            <div className="row">
              <List
                tasks={tasks}
                toggleTask={toggleTask}
                newTask={activeModal}
              />
              <Chart value={completedPercentage} />
            </div>
            <div className="row">
              <Streak />
              <List
                tasks={tasks}
                toggleTask={toggleTask}
                newTask={activeModal}
              />
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
