import { createSelector } from "reselect";
import config from "./EmployeesListConfig";

const sliceSelector = (state) => state[config.sliceName];

export const getEmployeesSelector = createSelector(sliceSelector, (slice) => {
  return slice.employees;
});

const exportedObject = {
  getEmployeesSelector,
};

export default exportedObject;
