import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo">FM</div>

        <div>
          <h2>FMMS</h2>
          <span>Force Multiplier</span>
        </div>
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▣</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/trainings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▤</span>
          My Trainings
        </NavLink>

        <NavLink
          to="/certificates"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▧</span>
          My Certificates
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>◉</span>
          My Profile
        </NavLink>

      </nav>

      <div className="sidebar-bottom">

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>⚙</span>
          Settings
        </NavLink>

        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `nav-item logout ${isActive ? "active" : ""}`
          }
        >
          <span>↪</span>
          Logout
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;