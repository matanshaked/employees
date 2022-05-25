import BaseApi from "../../../sdk/BaseApi";
import selectors from "./EmployeeViewSelectors";
import EmployeesListApi from "../../Employees/api/EmployeesListApi";
import EmployeeViewConfig from "./EmployeeViewConfig";

import { v4 as uuidv4 } from "uuid";

export const ActionTypes = {
  UPDATE_SELECTED_EMPLOYEE_ID: "UPDATE_SELECTED_EMPLOYEE_ID",
  FETCH_EMPLOYEES_DETAILS: "FETCH_EMPLOYEES_DETAILS",
  TOGGLE_TASKS: "TOGGLE_TASKS",
  TOGGLE_REPORTS: "TOGGLE_REPORTS",
  UPDATE_ASSIGN_TASK_ID: "UPDATE_ASSIGN_TASK_ID",
  ADD_TASK: "ADD_TASK",
  ADD_REPORT: "ADD_REPORT",
  DELETE_REPORT: "DELETE_REPORT",
};
export default class EmployeeViewApi extends BaseApi {
  constructor(store) {
    super(store, EmployeeViewConfig.sliceName);
    this.store = store;
    this.employeesListApi = new EmployeesListApi(this.store);
  }

  handleClickToggleTasks = () => {
    this.dispatchStoreAction(ActionTypes.TOGGLE_TASKS);
  };

  handleClickToggleReport = () => {
    this.dispatchStoreAction(ActionTypes.TOGGLE_REPORTS);
  };

  updateSelectedEmployeeID = (employeeId, employees) => {
    const selectedEmployeeDetails = employees.find(
      (employee) => employee.id === employeeId
    );
    const payload = { employeeId, selectedEmployeeDetails };
    this.dispatchStoreAction(ActionTypes.UPDATE_SELECTED_EMPLOYEE_ID, payload);
  };

  updateAssignTask = (employeeId) => {
    this.dispatchStoreAction(ActionTypes.UPDATE_ASSIGN_TASK_ID, employeeId);
  };

  addTask = (task) => {
    task.assignId = this.getAssignId();
    task.assignDate = new Date().toISOString().split("T")[0];
    task.id = uuidv4();
    const employeesList = this.employeesListApi.getEmployees();
    const assignedEmployeeDetails = {
      ...employeesList.find((employee) => employee.id === task.assignId),
    };

    let tempTasks = assignedEmployeeDetails.tasks && [
      ...assignedEmployeeDetails.tasks,
    ];
    if (!tempTasks) {
      tempTasks = [];
    }
    tempTasks.push(task);
    assignedEmployeeDetails.tasks = tempTasks;

    this.saveEmployees(employeesList, assignedEmployeeDetails);
  };

  addReport = (report) => {
    const employees = this.employeesListApi.getEmployees();
    const selectedEmployee = { ...this.getSelectedEmployee() };
    report.reportDate = new Date().toISOString().split("T")[0];
    report.id = uuidv4();

    let tempReports = selectedEmployee.reports && [...selectedEmployee.reports];
    if (!tempReports) {
      tempReports = [];
    }
    tempReports.push(report);
    selectedEmployee.reports = tempReports;

    this.dispatchStoreAction(ActionTypes.ADD_REPORT, selectedEmployee);
    this.saveEmployees(employees, selectedEmployee);
  };

  deleteReport = (reportId) => {
    const selectedEmployee = { ...this.getSelectedEmployee() };
    const newReports = selectedEmployee.reports.filter(
      (report) => report.id !== reportId
    );
    selectedEmployee.reports = newReports;
    this.dispatchStoreAction(ActionTypes.DELETE_REPORT, selectedEmployee);
    this.saveEmployees(this.employeesListApi.getEmployees(), selectedEmployee);
  };

  saveEmployees = (employees, employeeDetails) => {
    const newEmployees = employees.map(function (employee) {
      return employee.id === employeeDetails.id ? employeeDetails : employee;
    });
    this.employeesListApi.updateEmployees(newEmployees);
  };

  getSelectedEmployeeId = () => {
    return selectors.getSelectedEmployeeIdSelector(this.store.getState());
  };

  getSelectedEmployee = () => {
    return selectors.getSelectedEmployeeDetailsSelector(this.store.getState());
  };

  getAssignId = () => {
    return selectors.getAssignId(this.store.getState());
  };

  getToggleTasksSelector = () => {
    return selectors.getToggleTasksSelector(this.store.getState());
  };

  getToggleReportSelector = () => {
    return selectors.getToggleReportSelector(this.store.getState());
  };
}
