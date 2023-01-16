import React from "react";

function ToDoItem({ content, index, handleDelete }) {
  return (
    <ul key={index}>
      <li> {content} </li>
      <button className="delete" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </ul>
  );
}

export default ToDoItem;
