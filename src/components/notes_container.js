import React from 'react';
import Note from './note';

const NotesContainer = (props) => {
  const noteItems = props.notes.map((note) => {
    return <Note key={note.id} note={note} />;
  });

  return (
    <ul>
      {noteItems}
    </ul>
  );
};

export default NotesContainer;
