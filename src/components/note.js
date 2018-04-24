import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faArrows from '@fortawesome/fontawesome-free-solid/faExpandArrowsAlt';

const Note = (props) => {
  // const { // object destructuring
  //   id, title, content, x, y, zIndex,
  // } = props.note;
  // console.log('id', id, 'note x', x, 'note y', y, 'note zIndex', zIndex);
  // console.log(props.note.title);
  return (
    <div className="note">
      <div className="note-header">
        <div className="title">{props.note.title}</div>
        <div> <FontAwesomeIcon icon={faTrash} onClick={() => props.onDeleteClick(props.note.id)} /> </div>
        <div> <FontAwesomeIcon icon={faEdit} /> </div>
        <div id="drag"> <FontAwesomeIcon icon={faArrows} /> </div>
      </div>
      <div className="content">{props.note.content}</div>
    </div>
  );
};

export default Note;
