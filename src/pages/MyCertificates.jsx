import Sidebar from "../components/Sidebar";
import "./MyCertificates.css";

function MyCertificates() {
  const certificates = [
    {
      title: "Basic Crime Prevention",
      issued: "May 25, 2026",
      certificateNo: "FMMS-2026-00124",
    },
    {
      title: "Community Policing and Crime Prevention",
      issued: "April 18, 2026",
      certificateNo: "FMMS-2026-00098",
    },
    {
      title: "Disaster Risk Reduction Training",
      issued: "March 12, 2026",
      certificateNo: "FMMS-2026-00067",
    },
  ];

  return (
    <div className="certificates-page">

    <Sidebar />

      <div className="page-header">
        <div>
          <h1>My Certificates</h1>
          <p>View and manage your earned certificates.</p>
        </div>
      </div>

      <div className="certificate-summary">
        <span>Total Certificates</span>
        <strong>{certificates.length}</strong>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.certificateNo}>
            <div className="certificate-preview">
              <div className="certificate-paper">
                <span className="certificate-seal">FM</span>
                <strong>CERTIFICATE</strong>
                <small>OF COMPLETION</small>
              </div>
            </div>

            <div className="certificate-info">
              <h2>{certificate.title}</h2>

              <p>
                Issued on {certificate.issued}
              </p>

              <span>
                Certificate No. {certificate.certificateNo}
              </span>

              <button className="view-certificate">
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCertificates;