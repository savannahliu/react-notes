import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'; // icons
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faArrows from '@fortawesome/fontawesome-free-solid/faExpandArrowsAlt';
import Draggable from 'react-draggable'; // The default
import marked from 'marked'; // markdown support
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // pretty ui from material design
import TextField from 'material-ui/TextField';
import { pink400 } from 'material-ui/styles/colors';
import Textarea from 'react-textarea-autosize'; // so we dont have to adjust size of note ourself

const style = {
  marginRight: 20,
  underlineStyle: {
    borderColor: pink400,
  },
};

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.note.id, title: this.props.note.title, content: this.props.note.content,
      id: this.props.note.id,
      title: this.props.note.title,
      content: this.props.note.content,
      isEditing: false,
      // x: this.props.note.x,
      // y: this.props.note.y,
      // zIndex: this.props.note.zIndex,
    };
    // this.onDrag = this.onDrag.bind(this);
    this.onDeleteClick = props.onDeleteClick;
    this.onEditClick = this.onEditClick.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  // onDrag() {
  //   console.log('onstartdrag', this.state.x, this.state.y, this.state.zIndex);
  //   this.setState({ x: this.ui.x, y: this.ui.y });
  //   console.log('ui x y', this.ui.x, this.ui.y);
  // }

  onEditClick() {
    if (this.state.isEditing === true) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
    }
  }

  onChangeContent(event) {
    this.setState({ content: event.target.value });
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  // edit function
  renderNote() {
    if (this.state.isEditing) {
      return (
        <div className="note">
          <div className="note-header">
            <MuiThemeProvider>
              <TextField hintText="title" onChange={this.onChangeTitle} value={this.state.title} underlineStyle={style.underlineStyle} />
            </MuiThemeProvider>
            <div> <FontAwesomeIcon icon={faTrash} onClick={() => this.onDeleteClick(this.state.id)} /> </div>
            <div> <FontAwesomeIcon icon={faEdit} onClick={() => this.onEditClick()} /> </div>
            <div className="handle" id="drag"> <FontAwesomeIcon icon={faArrows} onClick={() => this.onDrag()} /> </div>
          </div>
          <MuiThemeProvider>
            <TextField hintText="note content" onChange={this.onChangeContent} value={this.state.content} underlineStyle={style.underlineStyle} multiLine rows={3} />
          </MuiThemeProvider>
        </div>
      );
    } else {
      return (
        <div className="note">
          <div className="note-header">
            <div className="title">{this.state.title}</div>
            <div> <FontAwesomeIcon icon={faTrash} onClick={() => this.onDeleteClick(this.state.id)} /> </div>
            <div> <FontAwesomeIcon icon={faEdit} onClick={() => this.onEditClick()} /> </div>
            <div className="handle" id="drag"> <FontAwesomeIcon icon={faArrows} /> </div>
          </div>
          <div className="noteBody content" dangerouslySetInnerHTML={{ __html: marked(this.state.content || '') }} />
        </div>
      );
    }
  }


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
        <div>
          {this.renderNote()}
        </div>
      </Draggable>
    );
  }
}

export default Note;
