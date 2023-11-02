import React, { useState } from "react";
import '../style/Wishlist.css'

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleKeyUp(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent form submission on Enter press
      if (note.title.trim() !== "" || note.content.trim() !== "") {
        // Only add the wish if at least one of the fields (title, content) is not empty.
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
      }
    }
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent form submission
    if (note.title.trim() !== "" || note.content.trim() !== "") {
      // Only add the wish if anyone of the field (title, content) is not empty.
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
  }

  return (
    <div>
      <form className="wishlist-form">
        <input
          className="wishlist-form-input"
          name="title"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="wishlist-form-textarea"
          name="content"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={note.content}
          placeholder="Take a wish..."
          rows="3"
        />
        <button className="wishlist-form-add-button" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;