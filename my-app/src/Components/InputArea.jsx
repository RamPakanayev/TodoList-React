import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        name="to-do"
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
      />

      <button onClick={props.handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;