import Sidebar from "../components/Sidebar";
import "./Logout.css";

function Logout() {
  return (
    <div className="logout-page">

    <Sidebar />

      <div className="logout-card">
        <div className="logout-icon">
          ↪
        </div>

        <h1>Log Out</h1>

        <p>
          Are you sure you want to log out of your account?
        </p>

        <div className="logout-actions">
          <button className="cancel-button">
            Cancel
          </button>

          <button className="confirm-logout-button">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;