import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <Sidebar />

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>

            <div className="user-profile">
              <div className="user-avatar">D</div>

              <div className="user-info">
                <strong>Tanod</strong>
                <span>Barangay San Isidro</span>
              </div>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon training-icon">T</div>

            <div>
              <span>Total Trainings</span>
              <h2>12</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon certificate-icon">C</div>

            <div>
              <span>Certificates</span>
              <h2>8</h2>
            </div>
          </div>

        </section>

        {/* Dashboard Content */}
        <section className="dashboard-grid">

          {/* Recent Activity Attended */}
          <div className="dashboard-card">
            <div className="card-header">
              <h2>Recent Activity Attended</h2>
              <a href="#">View All</a>
            </div>

            <div className="recent-details">
              <h3>Community Crime Prevention Seminar</h3>

              <div className="activity-info">
                <div>
                  <span>Date Icon</span>
                  <span>Aug 25, 2026 (Sat) 8:00-4:00 PM</span>
                </div>

                <div>
                  <span>Loc Icon</span>
                  <span>PNP Training Center</span>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Certificate */}  
          <div className="dashboard-card latest-certificate-card">
            <div className="card-header">
              <h2>Latest Certificate Earned</h2>
              <a href="#">View All</a>
            </div>

            <div className="latest-certificate">
              <div className="certificate-details">
                <h3>Basic Crime Prevention</h3>

                <p className="certificate-date">
                  Issued on May 25, 2026
                </p>
              </div>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;