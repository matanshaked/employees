import { createSelector } from "reselect";
import config from "./EmployeeViewConfig";

const sliceSelector = (state) => state[config.sliceName];

export const getSelectedEmployeeIdSelector = createSelector(
  sliceSelector,
  (slice) => {
    return slice.selectedEmployeeId;
  }
);

export const getSelectedEmployeeDetailsSelector = createSelector(
  sliceSelector,
  (slice) => {
    return slice.selectedEmployeeDetails;
  }
);

export const getToggleTasksSelector = createSelector(sliceSelector, (slice) => {
  return slice.toggleTasks;
});

export const getToggleReportSelector = createSelector(
  sliceSelector,
  (slice) => {
    return slice.toggleReport;
  }
);

export const getAssignId = createSelector(sliceSelector, (slice) => {
  return slice.assignId;
});

const exportedObject = {
  getSelectedEmployeeIdSelector,
  getSelectedEmployeeDetailsSelector,
  getToggleTasksSelector,
  getToggleReportSelector,
  getAssignId,
};

export default exportedObject;
