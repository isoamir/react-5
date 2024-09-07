import { useState } from "react";

function AddNote() {
  const [title, setTitle] = useState("");
  const [des, setdes] = useState("");
  const submitH = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      des,
      id: Date.now(),
      createdTime: new Date().toISOString(),
    };
    console.log(newNote);
  };

  return (
    <div>
      <h1>add your notes</h1>
      <form action="" onSubmit={submitH}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="des"
          onChange={(e) => setdes(e.target.value)}
          value={des}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddNote;
