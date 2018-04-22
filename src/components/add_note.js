import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

const style = {
  marginRight: 20,
};

// text input for creating a new note
class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log('AddNote input', event.target.value);
    this.setState({ newTitle: event.target.value });
    // this.props.onSearchChange(event.target.value);
  }
  //  <input onChange={this.onInputChange} value={this.state.newTitle} />
  render() {
    return (
      <div id="add-note">
        <TextField hintText="note title" onChange={this.onInputChange} value={this.state.newTitle} />
        <FloatingActionButton mini disabled style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default AddNote;
