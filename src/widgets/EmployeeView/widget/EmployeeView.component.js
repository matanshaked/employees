import React, { Component } from "react";
import { Link } from "react-router-dom";

import EmployeeViewMainView from "./components/EmployeeView.mainView";
import EmployeeViewTasks from "./components/EmployeeView.tasks";
import EmployeeViewReports from "./components/EmployeeView.reports";
import EmployeeViewSubordinates from "./components/EmployeeView.subordinates";
import { mapComponentProps } from "./EmployeeView.propsMappar";

export default class EmployeeViewComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <Link className="col-md-1 blue-button" role="button" to="/">
            Back to Employee List
          </Link>
        </div>
        Employee Details Window:
        <div className="line small-container">
          <EmployeeViewMainView {...mapComponentProps(this.props)} />
          {this.props.selectedEmployeeDetails &&
            this.props.selectedEmployeeDetails.tasks && (
              <EmployeeViewTasks {...mapComponentProps(this.props)} />
            )}
          {this.props.selectedEmployeeDetails &&
            this.props.selectedEmployeeDetails.subordinates && (
              <EmployeeViewSubordinates {...mapComponentProps(this.props)} />
            )}
          {this.props.selectedEmployeeDetails &&
            this.props.selectedEmployeeDetails.reports && (
              <EmployeeViewReports {...mapComponentProps(this.props)} />
            )}
        </div>
      </div>
    );
  }
}
