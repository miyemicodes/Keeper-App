import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map((noteTexts) => 
          <Note
            id={noteTexts.id}
            key={noteTexts.id}
            title={noteTexts.title}
            content={noteTexts.content}
          />
        
      )}

      <Footer />
    </div>
  );
}

export default App;
