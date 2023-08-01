import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Note from "./Note";
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function delteNote(id) {
    setNotes((x) => {
      return x.filter((a, index) => index !== id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delteNote={delteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
