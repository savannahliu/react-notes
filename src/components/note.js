import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faArrows from '@fortawesome/fontawesome-free-solid/faExpandArrowsAlt';
import Draggable from 'react-draggable'; // The default

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.note.id, title: this.props.note.title, content: this.props.note.content,
      id: this.props.note.id,
      title: this.props.note.title,
      content: this.props.note.content,
      // x: this.props.note.x,
      // y: this.props.note.y,
      // zIndex: this.props.note.zIndex,
    };
    // this.onDrag = this.onDrag.bind(this);
    this.onDeleteClick = props.onDeleteClick;
  }

  // onDrag() {
  //   console.log('onstartdrag', this.state.x, this.state.y, this.state.zIndex);
  //   this.setState({ x: this.ui.x, y: this.ui.y });
  //   console.log('ui x y', this.ui.x, this.ui.y);
  // }

  // edit function

  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div className="note">
          <div className="note-header">
            <div className="title">{this.state.title}</div>
            <div> <FontAwesomeIcon icon={faTrash} onClick={() => this.onDeleteClick(this.state.id)} /> </div>
            <div> <FontAwesomeIcon icon={faEdit} /> </div>
            <div className="handle" id="drag"> <FontAwesomeIcon icon={faArrows} onClick={() => this.onDrag()} /> </div>
          </div>
          <div className="content">{this.state.content}</div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
