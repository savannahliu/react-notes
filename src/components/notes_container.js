import React from 'react';
import Note from './note';

const NotesContainer = (props) => {
  const noteItems = props.notes.map((note) => {
    return <Note key={note.id} note={note} />;
  });

  return (
    <div>
      {noteItems}
    </div>
  );
};

export default NotesContainer;
