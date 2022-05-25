import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default class EmployeeViewReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = { reportText: "" };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleClick() {
    const { handleClickToggleReport, selectedEmployeeDetails } = this.props;
    this.props.addReport({
      reportText: this.state.reportText,
      id: selectedEmployeeDetails.directManager.id,
    });
    handleClickToggleReport();
  }

  handleChangeText(event) {
    this.setState({ reportText: event.target.value });
  }

  render() {
    const { toggleReport, handleClickToggleReport } = this.props;
    return (
      <div>
        <Dialog
          open={toggleReport}
          onClose={handleClickToggleReport}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Report Task</DialogTitle>
          <DialogContent>
            <TextField
              name="text"
              autoFocus
              margin="dense"
              id="name"
              label="Set report text here:"
              type="text"
              fullWidth
              onChange={this.handleChangeText}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickToggleReport} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleClick()} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
