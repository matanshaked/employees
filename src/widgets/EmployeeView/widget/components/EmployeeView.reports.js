import React from "react";

export default function EmployeeViewReports({
  selectedEmployeeDetails,
  deleteReport,
}) {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <h4>My Reports:</h4>
      <div className="container-fluid line">
        <br />
        {selectedEmployeeDetails.reports.map((report) => {
          return (
            <div key={report.id}>
              <div className="row">
                <div className="col-md-4">{report.reportText}</div>
                <div className="col-md-4">
                  {report.reportDate.split("T")[0]}
                </div>
                <div className="col-md-4">
                  <button
                    onClick={() => deleteReport(report.id)}
                    className="reportButton"
                  >
                    &#128465;
                  </button>
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
