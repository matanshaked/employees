import React from "react";

export default function EmployeeViewTasks({ selectedEmployeeDetails }) {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <h4>My Tasks:</h4>
      <div className="container-fluid line">
        <br />
        {selectedEmployeeDetails.tasks.map((task) => {
          return (
            <div key={task.id}>
              <div className="row">
                <div className="col-md-6">{task.taskText}</div>
                <div className="col-md-6">{task.dueDate.split("T")[0]}</div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
