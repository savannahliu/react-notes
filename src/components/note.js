import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faArrows from '@fortawesome/fontawesome-free-solid/faExpandArrowsAlt';

const Note = (props) => {
  // const imgUrl = props.video.snippet.thumbnails.default.url;
  console.log('note props', props.note);
  const { // object destructuring
    id, title, content, x, y, zIndex,
  } = props.note;
  console.log('note x', x, 'note y', y, 'note zIndex', zIndex);
  return (
    <div className="note">
      <div className="note-header">
        <div className="title">{title}</div>
        <div> <FontAwesomeIcon icon={faTrash} onClick={this.onDeleteClick} /> </div>
        <div> <FontAwesomeIcon icon={faEdit} /> </div>
        <div id="drag"> <FontAwesomeIcon icon={faArrows} /> </div>
      </div>
      <div>{id}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Note;
