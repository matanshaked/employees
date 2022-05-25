import EmployeesListApi from './api/EmployeesListApi';
import EmployeesListReducer from './api/EmployeesListReducer';
import EmployeesListConfig from './api/EmployeesListConfig';

export const widget = {
  api: EmployeesListApi,
  reducer: EmployeesListReducer,
  config: EmployeesListConfig,
};

export default widget;
