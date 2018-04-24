import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCoioHOblvWF1akRHxLJVooU3Ai0LIq-qg',
  authDomain: 'bbnotes-c0409.firebaseapp.com',
  databaseURL: 'https://bbnotes-c0409.firebaseio.com',
  projectId: 'bbnotes-c0409',
  storageBucket: 'bbnotes-c0409.appspot.com',
  messagingSenderId: '322604223723',
};
firebase.initializeApp(config);


export function fetchNotes(callback) {

}

export function addNotes(callback) {
  /* ... */
}

export function updateNotes(callback) {
  /* ... */
}

export function deleteNotes(callback) {
  /* ... */
}
