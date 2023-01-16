import React, { useState } from "react";

import Heading from "./Heading";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";


function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [inputStr, setInput] = useState({
    val: "",
    placeholder: "add somthing to do",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    event.preventDefault();
    setInput({ val: value, placeholder: inputStr.placeholder });
  }

  function handleClick(event) {
    event.preventDefault();
    setTodo([...todo, inputStr.val]);
    console.log(todo);
    setInput({ val: "", placeholder: inputStr.placeholder });
  }
  function handleDelete(index) {
    setTodo(todo.filter((_, i) => i !== index));
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
        {todo.map((content, index) => (
          <ToDoItem
            key={index}
            content={content}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
export default ToDoList;
