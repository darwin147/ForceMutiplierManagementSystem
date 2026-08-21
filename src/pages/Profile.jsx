import Sidebar from "../components/Sidebar";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
    <Sidebar />
      {/* Page Header */}
      <div className="page-header">
        <h1>My Profile</h1>
        <p>View and manage your personal information.</p>
      </div>

      {/* Profile Card */}
      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            D
          </div>

          <div className="profile-name">
            <h2>Darwin</h2>
            <span>Force Multiplier</span>
          </div>
        </div>

        {/* Personal Information */}
        <div className="profile-section">
          <h3>Personal Information</h3>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Full Name</label>
              <span>Darwin</span>
            </div>

            <div className="profile-field">
              <label>Force Multiplier ID</label>
              <span>FM-2026-00124</span>
            </div>

            <div className="profile-field">
              <label>Email Address</label>
              <span>darwin@example.com</span>
            </div>

            <div className="profile-field">
              <label>Contact Number</label>
              <span>09XX XXX XXXX</span>
            </div>

          </div>
        </div>

        {/* Assignment Information */}
        <div className="profile-section">
          <h3>Assignment Information</h3>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Role</label>
              <span>Tanod</span>
            </div>

            <div className="profile-field">
              <label>Barangay</label>
              <span>Barangay San Isidro</span>
            </div>

            <div className="profile-field">
              <label>Municipality</label>
              <span>Kalibo</span>
            </div>

            <div className="profile-field">
              <label>Status</label>
              <span className="profile-status">Active</span>
            </div>

          </div>
        </div>

        <button className="edit-profile-button">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;