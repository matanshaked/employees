import React from "react";
import EmployeeViewAssignModal from "./EmployeeView.assignModal";

export default function EmployeeViewSubordinates({
  selectedEmployeeDetails,
  toggleTasks,
  handleClickToggleTasks,
  updateAssignTask,
  addTask,
}) {
  const handleClick = (subordinateId) => {
    handleClickToggleTasks();
    updateAssignTask(subordinateId);
  };

  return (
    <div className="container-fluid">
      <br />
      <br />
      <h4>My subordinates:</h4>
      <div className="container-fluid line small-container">
        <br />
        {selectedEmployeeDetails.subordinates.map((subordinate) => {
          return (
            <div key={subordinate.id}>
              <div className="row">
                <div className="col-md-4.5">
                  {subordinate.firstName + " " + subordinate.lastName}
                </div>
                <div className="col-md-1">{subordinate.position}</div>
                <button
                  className="blue-button col-md-2"
                  onClick={() => handleClick(subordinate.id)}
                >
                  Assign Task
                </button>
              </div>
              <br />
            </div>
          );
        })}
      </div>
      <EmployeeViewAssignModal
        toggleTasks={toggleTasks}
        handleClickToggleTasks={handleClickToggleTasks}
        addTask={addTask}
      />
    </div>
  );
}
