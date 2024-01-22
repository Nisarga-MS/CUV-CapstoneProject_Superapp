import React, { useEffect, useState } from "react";
import styles from "./Notes.module.css";

export default function Notes() {
  const [notesData, setNotesData] = useState("");

  const handleSaveNotes = (event) => {
    setNotesData(event.target.value);
    localStorage.setItem("notes", JSON.stringify(notesData));
  };

  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      setNotesData(JSON.parse(notes));
    }
  }, []);

  return (
    <div className={styles.notes}>
      <label htmlFor="notes">All Notes</label>
      <textarea
        name="notes"
        id="notes"
        placeholder="Type your points...&#13;(Ex: This is how I am going to learn MERN Stack by praticing more & more!!)"
        value={notesData}
        onChange={handleSaveNotes}
      ></textarea>
    </div>
  );
}
