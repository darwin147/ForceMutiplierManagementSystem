import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo">FM</div>
          <div>
            <h2>FMMS</h2>
            <span>Force Multiplier</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <span>▣</span>
            Dashboard
          </a>

          <a href="#" className="nav-item">
            <span>▤</span>
            My Trainings
          </a>

          <a href="#" className="nav-item">
            <span>▧</span>
            My Certificates
          </a>

          <a href="#" className="nav-item">
            <span>◷</span>
            Upcoming Events
          </a>

          <a href="#" className="nav-item">
            <span>◉</span>
            My Profile
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#" className="nav-item">
            <span>⚙</span>
            Settings
          </a>

          <a href="#" className="nav-item logout">
            <span>↪</span>
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Darwin.</p>
          </div>

          <div className="user-profile">
            <div className="user-avatar">D</div>

            <div className="user-info">
              <strong>Darwin</strong>
              <span>Force Multiplier</span>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon training-icon">
              T
            </div>

            <div>
              <span>Total Trainings</span>
              <h2>12</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon completed-icon">
              ✓
            </div>

            <div>
              <span>Completed</span>
              <h2>10</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon certificate-icon">
              C
            </div>

            <div>
              <span>Certificates</span>
              <h2>8</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon event-icon">
              E
            </div>

            <div>
              <span>Upcoming Events</span>
              <h2>3</h2>
            </div>
          </div>

        </section>

        {/* Dashboard Content */}
        <section className="dashboard-grid">

          {/* Upcoming Events */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h2>Upcoming Events</h2>
                <p>Events you are scheduled to attend</p>
              </div>

              <a href="#">View All</a>
            </div>

            <div className="event-list">

              <div className="event-item">
                <div className="event-date">
                  <strong>25</strong>
                  <span>AUG</span>
                </div>

                <div className="event-details">
                  <h3>Community Crime Prevention Seminar</h3>
                  <p>PNP Training Center</p>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
              </div>

              <div className="event-item">
                <div className="event-date">
                  <strong>03</strong>
                  <span>SEP</span>
                </div>

                <div className="event-details">
                  <h3>Basic First Aid Training</h3>
                  <p>Barangay Training Hall</p>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </div>

              <div className="event-item">
                <div className="event-date">
                  <strong>12</strong>
                  <span>SEP</span>
                </div>

                <div className="event-details">
                  <h3>Public Safety and Emergency Response</h3>
                  <p>Municipal Function Hall</p>
                  <span>8:30 AM - 4:30 PM</span>
                </div>
              </div>

            </div>
          </div>

          {/* Training Progress */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h2>Training Progress</h2>
                <p>Your participation overview</p>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-info">
                <span>Annual Training Requirement</span>
                <strong>10 / 12</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "83%" }}
                ></div>
              </div>

              <p className="progress-text">
                You have completed 83% of your annual training requirement.
              </p>
            </div>

            <div className="training-status">
              <div>
                <span className="status-dot completed"></span>
                Completed
              </div>

              <strong>10</strong>
            </div>

            <div className="training-status">
              <div>
                <span className="status-dot pending"></span>
                Remaining
              </div>

              <strong>2</strong>
            </div>
          </div>

        </section>

        {/* Recent Activity */}
        <section className="dashboard-card recent-card">

          <div className="card-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Your latest training and certificate activities</p>
            </div>

            <a href="#">View All</a>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              <div className="activity-icon">✓</div>

              <div className="activity-content">
                <h3>Training completed</h3>
                <p>Community Policing and Crime Prevention</p>
                <span>August 15, 2026</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">C</div>

              <div className="activity-content">
                <h3>Certificate issued</h3>
                <p>Basic Barangay Peacekeeping Training</p>
                <span>August 10, 2026</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">✓</div>

              <div className="activity-content">
                <h3>Attendance recorded</h3>
                <p>Disaster Risk Reduction and Management Seminar</p>
                <span>August 5, 2026</span>
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;