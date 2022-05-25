import { ActionTypes } from "./EmployeesListApi";
const initialState = {
  employees: [
    {
      firstName: "employee0_first_name",
      id: 0,
      lastName: "employee0_last_name",
      position: "employee0_position",
      reports: [
        {
          reportDate: "2021-03-09T09:17:28.464Z",
          reportText: "employee0_report",
          id: 0,
        },
      ],
      subordinates: [
        {
          firstName: "employee1_first_name",
          lastName: "employee1_last_name",
          id: 1,
        },
      ],
    },

    {
      directManager: {
        firstName: "employee0_first_name",
        id: 0,
        lastName: "employee0_last_name",
        position: "employee0_position",
        type: "EMPLOYEE",
      },
      firstName: "employee1_first_name",
      id: 1,
      lastName: "employee1_last_name",
      position: "employee1_position",
      reports: [
        {
          reportDate: "2021-03-09T09:17:28.464Z",
          reportText: "employee1_repost",
          id: 0,
        },
      ],
      tasks: [
        {
          assignDate: "2021-03-09T09:17:28.464Z",
          assignId: 0,
          dueDate: "2021-03-09T09:17:28.464Z",
          taskText: "employee1_task",
          id: 0,
        },
      ],
    },
  ],
};
const reducer = (state = initialState, action) => {
  let newState = { ...state };
  const payload = action && action.payload;
  const type = action && action.type;
  switch (type) {
    case ActionTypes.UPDATE_EMPLOYEES:
      newState = {
        ...state,
        employees: [...payload],
      };
      break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
