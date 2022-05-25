import { connect } from "react-redux";
import { getInstance } from "../../../sdk";
import EmployeesListComponent from "./EmployeesList.component";

const employeesListApi = getInstance().EmployeesListApi;
const employeeViewApi = getInstance().EmployeeViewApi;

const mapStateToProps = () => {
  return {
    employees: employeesListApi.getEmployees(),
  };
};

const mapDispatchToProps = () => ({
  updateSelectedEmployee: employeeViewApi.updateSelectedEmployeeID,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesListComponent);
