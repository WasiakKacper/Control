/* Import SCSS */
import "./scss/Dashboard.scss";

/* Import component */
import Streak from "../../components/Streak/Streak.tsx";
import Chart from "../../components/Chart/Chart.tsx";
import List from "../../components/List/List.tsx";

/* Import react */
import { useState, useRef, useEffect } from "react";

/* Import types */
import type { Task, Tracker } from "../../Types/Types.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const Dashboard = () => {
  /* Add tracker */
  const [trackers, setTrackers] = useState<Tracker[]>([
    { name: "Title", isOpen: true },
  ]);

  const addTracker = () => {
    setTrackers((prev) => [
      ...prev,
      { name: `${"Title " + trackers.length}`, isOpen: true },
    ]);
  };

  /* Adding tasks */
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

  /* Change tracker title */
  const [title, setTitle] = useState<string>(trackers[0].name);
  const [isTitleInputActive, setIsInputTitleActive] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeTitle = () => {
    const activeIndex = trackers.findIndex((t) => t.isOpen);

    setTrackers((prev) =>
      prev.map((tracker, i) =>
        i === activeIndex ? { ...tracker, name: title } : tracker
      )
    );
  };

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
            <button className="newTracker" onClick={addTracker}>
              New tracker
            </button>
          </div>
          <article className="dashboardList">
            <h4>My trackers</h4>
            <ul>
              {trackers.map((tracker, index) => (
                <li
                  key={index}
                  className={tracker.isOpen ? "activeTracker" : ""}
                  onClick={() => {
                    setTrackers((prev) =>
                      prev.map((t, i) =>
                        i === index
                          ? { ...t, isOpen: true }
                          : { ...t, isOpen: false }
                      )
                    );

                    setTitle(tracker.name);
                  }}
                >
                  {tracker.name}
                </li>
              ))}
            </ul>
          </article>
        </aside>
        <section className="mainBoard">
          {isTitleInputActive ? (
            <div className="titleWrapper">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => {
                  if (title.trim() !== "") changeTitle();
                  setIsInputTitleActive(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (title.trim() !== "") changeTitle();
                    setIsInputTitleActive(false);
                  }
                }}
                ref={inputRef}
                className="title"
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
