import React from "react";

function TodoItem({ content, index, handleDelete }) {
  return (
    <ul key={index}>
      <li> {content} </li>
      <button className="delete" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </ul>
  );
}

export default TodoItem;
