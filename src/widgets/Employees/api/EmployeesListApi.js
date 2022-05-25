import BaseApi from "../../../sdk/BaseApi";
import selectors from "./EmployeesListSelectors";
import EmployeesListConfig from "./EmployeesListConfig";

export const ActionTypes = {
  UPDATE_EMPLOYEES: "UPDATE_EMPLOYEES",
};
export default class EmployeesListApi extends BaseApi {
  constructor(store) {
    super(store, EmployeesListConfig.sliceName);
    this.store = store;
  }
  updateEmployees = (employees) => {
    this.dispatchStoreAction(ActionTypes.UPDATE_EMPLOYEES, employees);
  };

  getEmployees = () => {
    return selectors.getEmployeesSelector(this.store.getState());
  };
}
