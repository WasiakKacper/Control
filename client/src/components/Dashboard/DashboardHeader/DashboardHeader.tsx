import "./scss/DashboardHeader.scss";
import Logo from "../../../../public/streak.svg";
import defaultAvatar from "../../../../public/defaultAvatar.png";

const DashboardHeader = ({ url = defaultAvatar }) => {
  return (
    <header className="dashboardHeader">
      <img className="logo" src={Logo} alt="Website logo" />
      <img className="avatar" src={url} alt="userAvatar" />
    </header>
  );
};

export default DashboardHeader;
