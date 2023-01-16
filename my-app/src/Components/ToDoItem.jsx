import React from "react";

function TodoItem({ content, index, handleDelete, handleDone, isDone }) {
  return (
    <ul key={index}>
      <li className={isDone ? "done-text" : ""}> {content} </li>

      <button className="delete" onClick={() => handleDelete(index)}>
        Delete
      </button>
      <button className="done" onClick={() => handleDone(index)}>
        Done
      </button>
    </ul>
  );
}

export default TodoItem;
