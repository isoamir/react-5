import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function AddNote() {
  const submit = (e) => {
    console.log(newNote);
  };

  return (
    <div className="body">
      <div className="main">
        <h1 className="h1">Add your notes</h1>
        <div className="contents">
          <form action="" onSubmit={submit}>
            <input
              className="title"
              type="text"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
              // value={title}
            />
            <input
              className="des"
              type="text"
              placeholder="des"
              onChange={(e) => setdes(e.target.value)}
              // value={des}
            />
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="notes">
        <div className="note-1">
          <h1>note 1</h1>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default AddNote;
