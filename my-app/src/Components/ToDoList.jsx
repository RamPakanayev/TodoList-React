import React, { useState } from "react";

import Heading from "./Heading";
import InputArea from "./InputArea";

function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [inputStr, setInput] = useState({
    val: "",
    placeholder: "add something to do",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    event.preventDefault();
    setInput({ val: value, placeholder: inputStr.placeholder });
  }

  function handleClick(event) {
    event.preventDefault();
    setTodo([
      ...todo,
      {
        content: inputStr.val,
        isDone: false,
      },
    ]);
    setInput({ val: "", placeholder: inputStr.placeholder });
  }

  function handleDelete(index) {
    setTodo(todo.filter((_, i) => i !== index));
  }

  function handleDone(index) {
    const newTodo = [...todo];
    newTodo[index].isDone = !newTodo[index].isDone;
    setTodo(newTodo);
  }

  return (
    <div className="container">
      <Heading />
      <InputArea
        handleChange={handleChange}
        handleClick={handleClick}
        inputStr={inputStr}
      />
      <div>
        {todo.map((item, index) => (
          <div key={index}>
            <li
              className={item.isDone ? "done-text" : ""}
              style={{
                textDecoration: item.isDone ? "line-through" : "none",
              }}
            >
              {item.content}
            </li>
            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button
              className="done"
              onClick={() => handleDone(index)}
              style={{
                backgroundColor: item.isDone ? "blue" : "",
              }}
            >
              {item.isDone ? "Undone" : "Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ToDoList;
