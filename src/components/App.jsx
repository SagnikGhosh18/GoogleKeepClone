import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNotes] = useState([]);

  function addItem(note) {
    addNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteItem(id) {
    addNotes((prevNotes) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdded={addItem} />
      <ul>
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDeleted={deleteItem}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
