import { useState } from "react";

const AddNote = ({ addNoteFunction }) => {
  const [noteText, setNoteText] = useState("");
  const charLength = 200;
  const handleChange = (event) => {
    if (charLength - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      addNoteFunction(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        onChange={handleChange}
        placeholder="Type to add a note"
      ></textarea>
      <div className="note-footer">
        <small>{charLength - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
