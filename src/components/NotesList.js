import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, addNoteFunction, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}

      <AddNote addNoteFunction={addNoteFunction} />
    </div>
  );
};

export default NotesList;
