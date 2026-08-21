import Sidebar from "../components/Sidebar";
import "./MyTrainings.css";

function MyTrainings() {
  const trainings = [
    {
      title: "Community Crime Prevention Seminar",
      date: "August 25, 2026",
      time: "8:00 AM - 4:00 PM",
      location: "PNP Training Center",
      status: "Completed",
    },
    {
      title: "Basic Crime Prevention",
      date: "May 25, 2026",
      time: "8:00 AM - 4:00 PM",
      location: "Municipal Function Hall",
      status: "Completed",
    },
    {
      title: "Disaster Risk Reduction Training",
      date: "March 12, 2026",
      time: "9:00 AM - 3:00 PM",
      location: "Barangay Training Hall",
      status: "Completed",
    },
    {
      title: "Public Safety and Emergency Response",
      date: "January 20, 2026",
      time: "8:30 AM - 4:30 PM",
      location: "PNP Training Center",
      status: "Completed",
    },
  ];

  return (
    <div className="trainings-page">

    <Sidebar />

      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>My Trainings</h1>
          <p>View your training participation and attendance history.</p>
        </div>
      </div>

      {/* Training Summary */}
      <div className="training-summary">
        <div className="summary-card">
          <span>Total Trainings</span>
          <strong>12</strong>
        </div>

        <div className="summary-card">
          <span>Completed</span>
          <strong>10</strong>
        </div>

        <div className="summary-card">
          <span>Certificates</span>
          <strong>8</strong>
        </div>
      </div>

      {/* Training List */}
      <div className="trainings-card">
        <div className="card-header">
          <h2>Training History</h2>
        </div>

        <div className="training-list">
          {trainings.map((training, index) => (
            <div className="training-item" key={index}>

              <div className="training-icon">
                T
              </div>

              <div className="training-details">
                <h3>{training.title}</h3>

                <div className="training-meta">
                  <span>{training.date}</span>
                  <span>{training.time}</span>
                  <span>{training.location}</span>
                </div>
              </div>

              <span className="training-status">
                {training.status}
              </span>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default MyTrainings;