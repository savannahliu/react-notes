import React from 'react';

const Note = (props) => {
  // const imgUrl = props.video.snippet.thumbnails.default.url;
  console.log('note props', props.note);
  const { // object destructuring
    id, title, content, x, y, zIndex,
  } = props.note;

  return (
    <li id="note">
      <div>{id}</div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div>{x}</div>
      <div>{y}</div>
      <div>{zIndex}</div>
    </li>
  );
};

export default Note;
