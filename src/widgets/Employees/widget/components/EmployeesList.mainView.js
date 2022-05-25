import React from "react";
import { Link } from "react-router-dom";

export default function EmployeesListMainView({
  employees,
  updateSelectedEmployee,
}) {
  return (
    <div className="container-fluid">
      Employee list window:
      <div className="small-container line">
        <h3 className="centered">Employee List</h3>
        <br />
        {employees.map((employee) => {
          return (
            <div key={employee.id}>
              <div className="row">
                <div className="col-md-3">{employee.firstName}</div>
                <div className="col-md-3">{employee.lastName}</div>
                <div className="col-md-3">{employee.position}</div>
                <Link
                  className="col-md-1 blue-button"
                  role="button"
                  to="/view"
                  onClick={() => updateSelectedEmployee(employee.id, employees)}
                >
                  View
                </Link>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
