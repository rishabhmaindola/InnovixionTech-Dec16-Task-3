import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import LoginPage from "./Components/Auth/LoginPage";
// import Logout from "./Components/Auth/Logout";

import "./App.css";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  if (isLoading) {
    return <div className="loading" >Loading ...</div>;
  }

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  return (
    <>
      <div className="App">
        {isAuthenticated ? (
          <div className="dashboard">
          {/* <div className="user-info">
            <h2>{user.name}'s NotePad</h2>
            <h3>{user.email}</h3>
            <Logout />
          </div> */}
            <br />
              <div className="sidebar">
                <Sidebar addNote={addNote} />
              </div>
              <div>
                <NoteContainer
                  notes={notes}
                  deleteNote={deleteNote}
                  updateText={updateText}
                />
              </div>
          </div>
        ) : (
          <LoginPage />
        )}
      </div>
    </>
  );
}

export default App;
