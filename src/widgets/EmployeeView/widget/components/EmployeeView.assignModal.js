import React,{Component} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default class EmployeeViewAssignModal extends Component {
  constructor(props) {
    super(props);
    this.state = { taskText: '', dueDate:'2021-03-24T10:30' };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleClick () {
    const {handleClickToggleTasks, addTask}=this.props;
    addTask({dueDate: this.state.dueDate.split('T')[0], taskText: this.state.taskText});
    handleClickToggleTasks();
  }
  
  handleChangeText(event) {
    this.setState({taskText: event.target.value});
  }
  handleChangeDate(event) {
    this.setState({dueDate: event.target.value});
  }
  render() {
    const {toggleTasks, handleClickToggleTasks}=this.props;
    return (
      <div>
        <Dialog open={toggleTasks} onClose={handleClickToggleTasks} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create Task</DialogTitle>
          <DialogContent>
            <TextField
              name="text"
              autoFocus
              margin="dense"
              id="name"
              label="Set task text here:"
              type="text"
              fullWidth
              onChange={this.handleChangeText}
            />
            <br/><br/><br/><br/>
            <TextField
              name="date"
              id="datetime-local"
              label="Set Task due date:"
              type="datetime-local"
              defaultValue="2021-03-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChangeDate}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickToggleTasks} color="primary">
                            Cancel
            </Button>
            <Button onClick={()=>this.handleClick()} color="primary">
                            Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
