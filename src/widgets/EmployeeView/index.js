import EmployeeViewApi from './api/EmployeeViewApi';
import EmployeeViewReducer from './api/EmployeeViewReducer';
import EmployeeViewConfig from './api/EmployeeViewConfig';

export const widget = {
  api: EmployeeViewApi,
  reducer: EmployeeViewReducer,
  config: EmployeeViewConfig,
};

export default widget;
