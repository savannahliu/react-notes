import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
      // ...
    };

    // make a note and add it to the screen
    this.setState({
      notes: this.state.notes.set(1, note),
    });
    /* {
      title: 'testing',
      text: 'I is a note',
      x: 400,
      y: 12,
      zIndex: 26,
    }
    */
  }
  render() {
    return (
      <div>{this.state.notes}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
