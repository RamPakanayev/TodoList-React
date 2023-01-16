import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Heading from "./Heading";
import InputClick from "./InputClick";

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

      <InputClick
        onChange={handleChange}
        placeholder={inputStr.placeholder}
        value={inputStr.val}
        type="text"
        onClick={handleClick}
      />

      <div>
        {todo.map((content, index) => (
          <TodoItem
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
