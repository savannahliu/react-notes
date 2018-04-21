import React, { Component } from 'react';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { notetitle: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.props.onAddChange(event.target.value);
  }

  render() {
    return (
      <div id="add-note-input">
        <input onChange={this.onInputChange} value={this.state.notetitle} />
      </div>
    );
  }
}

export default AddNote;
