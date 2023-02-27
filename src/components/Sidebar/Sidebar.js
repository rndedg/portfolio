import "./Sidebar.scss";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar-top">
        <h1>Gordon J.A. Letkeman</h1>
      </div>
      <div className="sidebar-left">
        <ul className="links">
          <Link to={"/about"}>About Me</Link>
          <Link to={"/project"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <img
          src="https://github.com/rndedg/portfolio/blob/master/assets/logo.png?raw=true"
          alt="GL logo"
          id="logo"
        />
      </div>
    </div>
  );
}

export default Sidebar;
