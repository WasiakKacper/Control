/* Import css */
import "./scss/Home.scss";

const Home = () => {
  return (
    <main>
      <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]">
        Gain full control
        <br /> over your process
      </h1>
      <div className="dashboardWrapper">
        <section className="dashboardMini">
          <div className="headerMini">
            <div className="iconMini">
              <img src="/streak.svg" alt="Control" />
            </div>
            <div className="avatarMini"></div>
          </div>
          <div className="wrapperMini">
            <aside className="sidebarMini">
              <div className="buttonWrapperMini">
                <button>New tracker</button>
              </div>
              <hr />
              <div className="listMini">
                <h4>My trackers</h4>
                <p>Title</p>
              </div>
            </aside>
            <article className="mainMini">
              <header>
                <h3>Title</h3>
              </header>
              <section className="row">
                <div className="rectangle">
                  <img src="/listDashboard.png" alt="" />
                </div>
                <div className="square">
                  <img src="/chartDashboard.png" alt="" />
                </div>
              </section>

              <section className="row">
                <div className="square">
                  <img src="/streakDashboard.png" alt="" />
                </div>
                <div className="rectangle">
                  <img src="/calendaryDashboard.png" alt="" />
                </div>
              </section>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
