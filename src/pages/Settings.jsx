import Sidebar from "../components/Sidebar";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings-page">

    <Sidebar />

      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your account preferences.</p>
      </div>

      <div className="settings-card">
        <h2>Account Settings</h2>

        <div className="setting-item">
          <div>
            <strong>Email Notifications</strong>
            <p>Receive notifications about upcoming training and events.</p>
          </div>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <div>
            <strong>Training Reminders</strong>
            <p>Receive reminders before scheduled activities.</p>
          </div>

          <input type="checkbox" defaultChecked />
        </div>
      </div>

      <div className="settings-card">
        <h2>Security</h2>

        <button className="change-password-button">
          Change Password
        </button>
      </div>
    </div>
  );
}

export default Settings;