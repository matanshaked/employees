import { ActionTypes } from "./EmployeeViewApi";
const initialState = {
  toggleTasks: false,
  toggleReport: false,
};
const reducer = (state = initialState, action) => {
  let newState = { ...state };
  const payload = action && action.payload;
  const type = action && action.type;
  switch (type) {
    case ActionTypes.UPDATE_ASSIGN_TASK_ID:
      newState = {
        ...state,
        assignId: payload,
      };
      break;
    case ActionTypes.UPDATE_SELECTED_EMPLOYEE_ID:
      newState = {
        ...state,
        selectedEmployeeId: payload.employeeId,
        selectedEmployeeDetails: payload.selectedEmployeeDetails,
      };
      break;
    case ActionTypes.TOGGLE_TASKS:
      newState = {
        ...state,
        toggleTasks: !state.toggleTasks,
      };
      break;
    case ActionTypes.TOGGLE_REPORTS:
      newState = {
        ...state,
        toggleReport: !state.toggleReport,
      };
      break;
    case ActionTypes.DELETE_REPORT:
    case ActionTypes.ADD_REPORT:
      newState = {
        ...state,
        selectedEmployeeDetails: payload,
      };
      break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
