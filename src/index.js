import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Immutable from 'immutable';
import AddNote from './components/add_note';
import NotesContainer from './components/notes_container';
import './style.scss';
import NoteObject from './NoteObject';

// // note object
// class NoteObj {
//   constructor(id, title, content, x, y, zIndex) {
//     this.id = id;
//     this.title = title;
//     this.content = content;
//     this.x = x;
//     this.y = y;
//     this.zIndex = zIndex;
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    const newNote = new NoteObject(1, 'intro', 'hello', 10, 10, 1);
    // const newNote2 = new NoteObject(2, 'intro2', 'hello2', 10, 10, 2);
    this.state = {
      notes: Immutable.Map([[1, newNote]]),
      // notes: Immutable.Map([[1, newNote], [2, newNote2]]),
      newTitle: 'intro',
    };
    // console.log('initial state');
    // console.log(this.state.newTitle);
    // console.log(this.state.notes);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AddNote newTitle={this.state.newTitle} onAddClick={(id, note) => this.setState({ notes: this.state.notes.set(id, note) })} />
        </MuiThemeProvider>
        <NotesContainer notes={this.state.notes} onDeleteClick={id => this.setState({ notes: this.state.notes.delete(id) })} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
