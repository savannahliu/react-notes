# React Notes Webapp

## Description  
A post it note style app where users can add notes, move them around, edit them, and delete them. This React app will use Firebase as it’s backend to store collections of notes. The position of notes will also be stored, so people in multiple browsers can edit and arrange them in realtime. The notes themselves will support markdown notation and editing.

http://cs52.me/assignments/lab/react-notes/

## Minimal Functional Specs  
### Notes App:
* Add a note:
    * can either be a single title input + create button
    * or a modal if you prefer with all fields
* Delete a note
* Move a note in x, y
    * optionally in z (zIndex)
* Edit a note:
    * title, content (lists, images, text)
* Notes:
    * have title and content
    * display with some formatting
* Persists all changes to Firebase in realtime
* Updates based on Firebase events
* is at least as stylish as these mockups

### A Note:
* displays title
* displays content
* is draggable
* is editable
* is deletable

## Implementation
### Components
* App: for wrapping everything
  * AddNote: a text input for adding a new note
  * Note: the note itself
    * title, text, x, y, zIndex    

    * NoteHeader: contains title, delete button, edit button, drag button
    * NoteContent: contains the text and image content of the note
