import { connect } from "react-redux";
import { getInstance } from "../../../sdk";
import EmployeeViewComponent from "./EmployeeView.component";

const employeeViewApi = getInstance().EmployeeViewApi;

const mapStateToProps = () => {
  return {
    selectedEmployeeId: employeeViewApi.getSelectedEmployeeId(),
    toggleTasks: employeeViewApi.getToggleTasksSelector(),
    toggleReport: employeeViewApi.getToggleReportSelector(),
    selectedEmployeeDetails: employeeViewApi.getSelectedEmployee(),
  };
};

const mapDispatchToProps = () => ({
  handleClickToggleTasks: employeeViewApi.handleClickToggleTasks,
  handleClickToggleReport: employeeViewApi.handleClickToggleReport,
  updateAssignTask: employeeViewApi.updateAssignTask,
  addTask: employeeViewApi.addTask,
  addReport: employeeViewApi.addReport,
  deleteReport: employeeViewApi.deleteReport,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeViewComponent);
