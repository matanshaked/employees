import React from "react";
import EmployeeViewReportModal from "./EmployeeView.reportModal";

export default function EmployeeViewMainView({
  selectedEmployeeDetails,
  handleClickToggleReport,
  reportModalProps,
}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md">
          <div className="row">
            <div className="col-md-2">Name:</div>
            <div className="col-md-6">
              {selectedEmployeeDetails.firstName +
                " " +
                selectedEmployeeDetails.lastName}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-2">Position:</div>
            <div className="col-md-2">{selectedEmployeeDetails.position}</div>
          </div>
          <br />
          <div className="line col-md-9" />
          <br />
          {selectedEmployeeDetails.directManager && (
            <div className="row">
              <div className="col-md-2">Manager:</div>
              <div className="col-md-4">
                {selectedEmployeeDetails.directManager.firstName +
                  " " +
                  selectedEmployeeDetails.directManager.lastName}
              </div>
              <button
                className="blue-button col-md-2"
                onClick={() => handleClickToggleReport()}
              >
                Report
              </button>
            </div>
          )}
        </div>
      </div>
      <EmployeeViewReportModal
        toggleReport={reportModalProps.toggleReport}
        handleClickToggleReport={handleClickToggleReport}
        addReport={reportModalProps.addReport}
        selectedEmployeeDetails={selectedEmployeeDetails}
        employees={reportModalProps.employees}
      />
    </div>
  );
}
