import React from 'react';
import Note from './note';

const NotesContainer = (props) => {
  const noteItems = props.notes.entrySeq().map(([id, note]) => {
    return <Note onDeleteClick={props.onDeleteClick} updateNote={props.updateNote} key={note.id} note={note} />;
  });

  return (
    <div>
      {noteItems}
    </div>
  );
};

export default NotesContainer;
