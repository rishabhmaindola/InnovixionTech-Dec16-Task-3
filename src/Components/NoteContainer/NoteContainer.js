import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Note from "../Note/Note";
import Logout from "../Auth/Logout";

import "./NoteContainer.css";

function NoteContainer(props) {

  const { user } = useAuth0();


  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
    <div className="note-container-header">
    <h2>Sticky Notes</h2>
      {/* <h2>{user.nickname}'s NotePad</h2> */}
      <div className="user-info">
            <h3>{user.email}</h3>
            <Logout/>
    </div>
      </div>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;