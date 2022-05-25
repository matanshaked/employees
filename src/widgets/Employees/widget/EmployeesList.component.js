import React, { Component } from "react";
import EmployeesListMainView from "./components/EmployeesList.mainView";
import { mapComponentProps } from "./EmployeesList.propsMappar";
export default class EmployeesListComponent extends Component {
  render() {
    return (
      <div>
        <EmployeesListMainView {...mapComponentProps(this.props)} />
      </div>
    );
  }
}
