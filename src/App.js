import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '12/11/2022',

  },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '12/11/2021',

    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '12/11/2023',

    },
    {
      id: nanoid(),
      text: 'This is my more note!',
      date: '12/11/2024',

    },
]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote)
  }

  return (
    <div className="container">
    <NotesList  
    notes= { notes } 
    handleAddNote= { addNote }
    handleDeleteNote= { deleteNote }
    />
    </div>
  );
}

export default App;
