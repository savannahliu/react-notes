import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import { pink400 } from 'material-ui/styles/colors';
import NoteObject from '../NoteObject';

const style = {
  marginRight: 20,
  underlineStyle: {
    borderColor: pink400,
  },
};

// text input for creating a new note
class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: '', currentId: 0 };
    this.onInputChange = this.onInputChange.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  onInputChange(event) {
    console.log('AddNote input', event.target.value);
    this.setState({ newTitle: event.target.value });
  }

  createNote() {
    // create a new note object
    const newNote = new NoteObject(this.state.currentId, this.state.newTitle, '', 10, 10, 1);
    // now add it to the map of notes
    this.props.onAddClick(this.state.currentId, newNote);
    this.setState({ currentId: this.state.currentId + 1 }); // update id
    // this.setState({ newTitle: this.state.currentId + 1 });// clear the input field bc user has made the note
  }

  render() {
    return (
      <div id="add-note">
        <TextField hintText="note title" onChange={this.onInputChange} value={this.state.newTitle} underlineStyle={style.underlineStyle} />
        <FloatingActionButton mini secondary style={style} onClick={() => this.createNote()}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default AddNote;
